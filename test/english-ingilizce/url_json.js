var byeol = require("byeol-js")
byeol.port(8000)

var testapi = {
api: "sa"}
byeol.url_json("/",testapi)
