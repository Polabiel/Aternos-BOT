
<h1 align="center">
  <br>
  <a href="http://www.aternos.org"><img src="https://aternos.gmbh/img/logo-blue.png" alt="Markdownify" width="200"></a>
  <br>
  Aternos-BOT
  <br>
</h1>

<h4 align="center">Um bot criado para deixar seu servidor do <a href="http://aternos.org" target="_blank">Aternos</a> AFK .</h4>

<p align="center">
  <a href="#aviso">Aviso</a> •
  <a href="#como-configurar">Como configurar</a> •
  <a href="#preparando-arquivos-para-o-envio">Envio</a> •
  <a href="#créditos">Créditos</a> •
  <a href="#suporte">Suporte</a>
</p>

# Aviso

Esse software contem risco de banir sua conta dentro do <a href="http://aternos.org" target="_blank">Aternos</a> além de banir seu servidor do minecraft

## Como configurar

faça um bifurcação ou clone e execute o programa, você precisará de [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) que vem com [npm](http://npmjs.com) instalado em seu computador. Na sua linha de comando:

```bash
# Clonar este repositório
$ git clone https://github.com/polabiel/aternos-bot

# Entre no repositório
$ cd aternos-bot

# Instalar dependências
$ npm install

```

```Javascript
// Configure seus nicknames

const nicknames = [
    "bot",
    "escreveaqui",
    "aternos",
    "chaco-bot",
    "passa no canal do polabiel",
    "minecraft4d"
  ]

// Configure seu IP e Porta do servidor

const bot = mineflayer.createBot({
    host: "coloca o IP aqui", // <= Coloca seu IP aqui
    port: 24466, // <= Coloca sua PORTA aqui
  })
```
```bash
# Execute o aplicativo
$ npm start
```


> **Nota**
> caso você estiver usando o Linux Bash para Windows, [consulte este guia](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) ou use `node` no prompt de comando.

# Preparando arquivos para o envio

Antes de hospedar seu projeto na Square Cloud, é necessário primeiramente ter os arquivos do seu projeto devidamente configurados, para que você possa hospeda-lo posteriormente.

> **Nota**
> é recomendado deletar a pasta node_modules, caso ela exista em seu projeto.

Depois que os arquivos do seu projeto estiverem pronto (e os arquivos desnecessários deletados), basta compacta-los em formato .zip antes de fazer upload para a Square Cloud.

Como está abaixo na imagem a baixo

<img src="https://3099339305-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FVhTs3qFK7WhIgH9qOWXk%2Fuploads%2Fgit-blob-db6b838defb9c9bbaa7496295de4131c2eac6676%2Fjavascript-zip.png?alt=media">

Após compactar seu arquivo, é só enviar ele para a Square Cloud.

> **Nota**
> caso você estiver com dúvidas de como funciona a Square Cloud clica <a href="https://docs.squarecloud.app/" target="_blank">aqui<a> para acessar o docs deles.

## Créditos

Este software/plataformas usa os seguintes pacotes de código aberto:

- [MineFlayer](https://github.com/PrismarineJS/mineflayer)
- [Node.js](https://nodejs.org/)
- [Square Cloud](squarecloud.app)

## Suporte

<p>Entra em contato comigo pelo <a href="https://www.discord.gg/BgQrmc6TnC" target="_blank">Discord</a></p>
<a href="https://www.discord.gg/BgQrmc6TnC" target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEEDZxmHJc6hbR3E0xg3TqW7abE3zLaXhCA&usqp=CAU" alt="Imagem com link para o Discord do meu servidor" style="height: 41px !important;width: 100px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
