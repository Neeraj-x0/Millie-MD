let config = require('./config')
const path = require("path");
let ssname = path.join(__dirname, `./database/session.json`)
const {StartMillie,MakeSession}= require('./lib')
const fs = require('fs')
if(!fs.existsSync(ssname)){
    MakeSession(config.Session_Id,ssname)
    }

console.log("Starting...");

StartMillie("./lib");
