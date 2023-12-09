const express = require('express');
const app=express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const user = require('./models/userData.js')
require('./db/connection.js')

app.use(express.json());


// Get data 
app.get('/',async(req,res)=>{
     try{
           const info = await user.find();
           res.status(200).send(info)
     }catch(e){
          res.status.send(e);
     }
})
 
// Get Data by id 
app.get('/:id',async(req,res) =>{
    try{
        const id =  req.params.id;
        const data = await user.findById(id);
       if(!data){
        return res.status(400).send("Your data is not present here !");
       }else{
        res.status(200).send(data);
       }
        
    }catch(e){

    }
})

// app.post('/Registeration',(req,res)=>{
//      const result =  new user(req.body);
//      result.save().then(()=>{
//         res.status(201).send(result)
//      }).catch((e)=>{
//         res.status(500).send(e)
//      })
// })

// Post Data
app.post('/Registeration',async(req,res) =>{
     try {
        const result = new user(req.body);
        const info = await result.save();
        res.status(200).send(info);
     }catch(e){
         res.status(500).send(e);
     }
})

// Delete Data by Id

app.delete('/:id',async(req,res)=>{
   try{
     const id =  req.params.id;
     const deleteData = await user.findByIdAndDelete(id);
     if(!id){
       return res.status(404).send();
     }
     else{
        res.status(200).send(deleteData);
     }
   }catch(e){
        res.status(500).send(e);
   }
})

// update data by Id

 app.patch('/:id',async(req,res)=>{
   try{
      const id = req.params.id;
      const data = await user.findByIdAndUpdate(id,req.body,{new:true});   
      res.status(200).send(data);
   }catch(e){
       res.status(404).send(e);
   }
 })

app.listen(port,() =>{
    console.log('http://localhost:',port);
})