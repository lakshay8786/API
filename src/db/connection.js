const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Three:glTGxKYVVknoGF0R@threejs.c7o0mqu.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
        console.log("Connection Successful");
}).catch((e)=>{
    console.log(e);
})