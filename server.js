const express = require("express");

const app = express();

app.use(express.json());

app.get("/movies",(req,res)=>{

    res.json({
        message : "Get All Movies"
    })

})

app.get("/movies/:id",(req,res)=>{

    res.json({
        message : "Get A Movie"
    })
    
})

app.post("/movies",(req,res)=>{

    res.json({
        message : "Create A Movie"
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


app.listen(3000,()=>{

    console.log(`Web Server is up and $running  on ${3000}`);
})