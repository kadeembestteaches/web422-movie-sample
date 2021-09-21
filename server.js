const express = require("express");
const mongoose =require("mongoose");
require('dotenv').config({ path: 'config/keys.env' });


const movieModel = require("./models/MovieModel.js");

const app = express();

app.use(express.json());

app.get("/movies",(req,res)=>{

 

    //localhost:3000/movies?featured=no
    const result =req.query.featured;
    if(result)
    {

        movieModel.find({featured: result==="yes" ? true : false})
        .then((movies)=>{
            res.json({
                message : `A list of all the featurd movies`,
                data : movies
            
            })
    
        })
        .catch((err)=>{
            res.status(500).json({
                message : `Error ${err}`,
            
            })
        })
    }


    //localhost:3000/movies
    else
    {
        movieModel.find()
        .then((movies)=>{
            res.json({
                message : `A list of all the movies`,
                data : movies
            
            })
    
        })
        .catch((err)=>{
            res.status(500).json({
                message : `Error ${err}`,
            
            })
        })
    }


})

app.get("/movies/:id",(req,res)=>{

    res.json({
        message : "Get A Movie"
    })
    
})

app.post("/movies",(req,res)=>{


   const newMovie = new movieModel(req.body);

   newMovie.save()
   .then((doc)=>{
        
        res.json({
            message : "Your movie was created successfully",
            data : doc
        })
   })
   .catch((err)=>{
    res.status(500).json({
        message : `Error ${err}`,
    
    })
})







})

app.put("/movies/:id",(req,res)=>{

    res.json({
        message : "Update A Movie"
    })
})

app.delete("/movies/:id",(req,res)=>{

    res.json({
        message : "Delete A Movie"
    })
});

//

app.listen(process.env.PORT,()=>{

    console.log(`Web Server is up and $running  on ${3000}`);

    mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
    .then(()=>{
        console.log(`Connected to MongoDB`)
    })
    .catch((err)=>{
        console.log(`Error :${err}`);
    })
})





/*
   Question to you all :
   
   Why booking an Uber triggers 
   an async operation??????


*/


//1 shlidhsglshdlgh





