var express = require("express");
var app = new express();
var path = require('path');
module.exports = function(url,dosya){
app.get(url, function(req,res){

res.sendFile(path.join(__dirname + dosya));
})

}
module.exports.port= function(port2){
console.log(`Sunucu açık işte port: ${port2}`)
app.listen(port2)
}
module.exports.url_json= function(url,jsonlar){
app.get(url, function(req,res){

res.json(jsonlar)
})
}
module.exports.use = function(kullanimx){
app.use(kullanimx, express.static(path.join(__dirname, 'public')))
}

module.exports.redirect= function(red,rect){
app.get(red, function(req,res){

res.redirect(rect)
})
}

