const mongoose = require ('mongoose');
const validator =  require('validator');

const userSchema = new mongoose.Schema({
    userName:{
           type:String
        
    },
    password:{
        type:String
    }

})


const user = new mongoose.model('user', userSchema);

module.exports = user;