const mineflayer = require("mineflayer");
const pvp = require("mineflayer-pvp").plugin;
const { pathfinder } = require("mineflayer-pathfinder");
const armorManager = require("mineflayer-armor-manager");
const AutoAuth = require("mineflayer-auto-auth");
const Movements = require('mineflayer-pathfinder').Movements;
const goals = require('mineflayer-pathfinder').goals;

function createBot() {
  const nicknames = [
    "gabryelcomY",
  ];
  const getContent = nicknames[Math.floor(Math.random() * nicknames.length)];

  const bot = mineflayer.createBot({
    viewDistance: 1,
    host: "hazedecria.aternos.me", // <= Coloca seu IP aqui
    version: "1.17",
    username: `${getContent}`,
    port: 41074, // <= Coloca sua PORTA aqui
    plugins: [AutoAuth, armorManager, pathfinder],
    AutoAuth: "bot112022",
  });
  bot.loadPlugin(pvp);
  bot.loadPlugin(armorManager);
  bot.loadPlugin(pathfinder);

  // ------------ ------------ Não venha mexer aqui ------------ -----------

  bot.on("playerCollect", (collector) => {
    if (collector !== bot.entity) return;

    setTimeout(() => {
      const sword = bot.inventory
        .items()
        .find((item) => item.name.includes("sword"));
      if (sword) bot.equip(sword, "hand");
    }, 150);
  });

  bot.on("playerCollect", (collector) => {
    if (collector !== bot.entity) return;

    setTimeout(() => {
      const shield = bot.inventory
        .items()
        .find((item) => item.name.includes("shield"));
      if (shield) bot.equip(shield, "off-hand");
    }, 250);
  });

  let guardPos = null;

  bot.on("physicTick", () => {
    if (bot.pvp.target) return;
    if (bot.pathfinder.isMoving()) return;

    const entity = bot.nearestEntity();
    if (entity) bot.lookAt(entity.position.offset(0, entity.height, 0));
  });

  bot.on("physicTick", () => {
    if (!guardPos) return;
    const filter = (e) =>
      e.type === "mob" &&
      e.position.distanceTo(bot.entity.position) < 16 &&
      e.mobType !== "Armor Stand";
    const entity = bot.nearestEntity(filter);
    if (entity) {
      bot.pvp.attack(entity);
    }
  });

  let followingPlayer = null;
  let movements;

  bot.loadPlugin(pathfinder);

  bot.on('chat', (username, message) => {
    if (followingPlayer && message.toLowerCase().includes('parar')) {
      if (username === followingPlayer) {
        stopFollowingPlayer();
      }
    } else if (message.toLowerCase().includes('seguir')) {
      if (!followingPlayer) {
        followingPlayer = username;
        console.log(`Seguindo o jogador ${followingPlayer}.`);
        startFollowingPlayer();
      } else {
        console.log(`O bot já está seguindo o jogador ${followingPlayer}.`);
      }
    }
  });

  bot.on('playerLeft', (player) => {
    if (followingPlayer && player.username === followingPlayer) {
      console.log(`${followingPlayer} saiu do jogo. Parando de seguir.`);
      stopFollowingPlayer();
    }
  });

  function startFollowingPlayer() {
    const player = bot.players[followingPlayer];
    if (player) {
      movements = new Movements(bot, bot.pathfinder);
      bot.pathfinder.setMovements(movements);
      bot.pathfinder.setGoal(new goals.GoalFollow(player.entity, 1), true);
    }
  }

  function stopFollowingPlayer() {
    console.log(`Parando de seguir o jogador ${followingPlayer}.`);
    followingPlayer = null;
    if (movements) {
      bot.pathfinder.setGoal(null);
      movements = null;
    }
  }

  bot.on("kicked", console.log);
  bot.on("error", console.log);
  bot.on("end", () => {
    setTimeout(() => createBot(), 4 * 60 * 1000);
  });


  bot.on("kicked", console.log);
  bot.on("error", console.log);
  bot.on("end", () => createBot());

  bot.on("time", () => { });
}

createBot();
console.log("Foi iniciado o BOT 😎");
