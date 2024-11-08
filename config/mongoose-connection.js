const mongoose = require('mongoose')
const dbgr = require('debug')("development:mongoose")
const config = require("config")

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`) //works on the value of environment variable like this one will take value from the development config file, if we had another file it'll take it from that file
.then(function(){
    dbgr("connected");
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection