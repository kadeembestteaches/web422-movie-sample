const express = require("express");
const mongoose =require("mongoose");
const movieController = require("./controllers/MoviesController.js");


if(process.env.NODE_ENV!="production")
{
    require('dotenv').config({ path: 'config/keys.env' });
}

const app = express();

app.use(express.json());

app.use("/movies",movieController)


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
