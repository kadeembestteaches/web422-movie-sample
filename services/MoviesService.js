
const movieModel = require("../models/MovieModel.js");

exports.getMovies = (req,res)=>{


        //yes  or now
        if(req.query.featured)
        {
           movieModel.find()
           .where("featured").equals(req.query.featured==="yes" ? true : false)
            .then((movies)=>{
                res.json({
                    message : req.query.featured==="yes" ? `A list of all the featured movies` : "A List of non-featured movies",
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
    
        else if(req.query.genre)
        {
    
            movieModel.find()
            .where("genre").equals(req.query.genre)
             .then((movies)=>{
                 res.json({
                     message : `A list of movies with the genere ${req.query.genre}`,
                     data : movies
                 
                 })
         
             })
             .catch((err)=>{
                 res.status(500).json({
                     message : `Error ${err}`,
                 
                 })
             })
             
        }
    
        //No Query String params where provided, thus, list all the movies
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
    

};

exports.getAMovie = (req,res)=>{

    res.json({
        message : "Get A Movie"
    })


};

exports.createMovie = (req,res)=>{

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

};


exports.updateAMoive = (req,res)=>{

    res.json({
        message : "Update A Movie"
    })

};


exports.deleteAMovie = (req,res)=>{

    res.json({
        message : "Delete A Movie"
    })

};