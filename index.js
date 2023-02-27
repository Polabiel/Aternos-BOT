const mineflayer = require("mineflayer");
const pvp = require("mineflayer-pvp").plugin;
const { pathfinder } = require("mineflayer-pathfinder");
const armorManager = require("mineflayer-armor-manager");
const AutoAuth = require("mineflayer-auto-auth");

function createBot() {
  const nicknames = [
    "bot",
    "escreveaqui",
    "aternos",
    "chaco-bot",
    "passa no canal do polabiel",
    "minecraft4d"
  ];
  const getContent = nicknames[Math.floor(Math.random() * nicknames.length)];

  const bot = mineflayer.createBot({
    viewDistance: 1,
    host: "coloca o IP aqui", // <= Coloca seu IP aqui
    version: "1.17",
    username: `${getContent}`,
    port: 24466, // <= Coloca sua PORTA aqui
    plugins: [AutoAuth],
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

  bot.on("kicked",console.log);
  bot.on("error",console.log);
  bot.on("end", () => {
    setTimeout(() => createBot(), 4 * 60 * 1000);
  });

  bot.on("time", () => {});
}

createBot();
console.log("Foi iniciado o BOT 😎");
