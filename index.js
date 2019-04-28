var port = require("./kom/port");
var urldosya = require("./kom/urldosya");
var jsonxs = require("./kom/json");
var path = require('path');
module.exports.port = function(port2){
port(port2);
}
module.exports.url_dosya = function(url,doysa){
urldosya(url,doysa);
}
module.exports.log = function(logger){
console.log(logger)
}
module.exports.url_json = function(url,jsonx){
jsonxs(url,jsonx)
}
module.exports.use = function(kullanimx){
urldosya.use(kullanimx);
}

module.exports.redirect = function(red,rect){
urldosya.redirect(red,rect);
}
module.exports.yonlendir = function(red,rect){
urldosya.redirect(red,rect);
}
//inglizce
module.exports.listen = function(port2){
port(port2);
}
module.exports.url_file = function(url,doysa){
urldosya(url,doysa);
}

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot Giriş Yaptı ${client.user.tag}!`);
});




class dcbot {

    constructor(token) {
  client.login(token);
    }

    async soru_cevap(soru,cevap) {
client.on('message', msg => {
  if (msg.content === soru) {
    msg.reply(cevap);
  }
});
    }
async oynuyor(oynuyorr){
client.on('ready', () => {
client.user.setActivity(oynuyorr);
});


}

async kanal_mesaj(id,mesaj){
client.channels.get(id).send(mesaj)
}
async kullanıcı_mesaj(id,mesaj){
client.users.get(id).send(mesaj)
}

}

module.exports.bot = dcbot;


