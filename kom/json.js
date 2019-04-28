var express = require("express");
var app = new express();
var urldosya = require("./urldosya")
module.exports = function(url,json){
urldosya.url_json(url,json)
}
