var express = require("express");
var app = new express();
var urldosya = require("./urldosya")
module.exports = function(port){
urldosya.port(port)
}
