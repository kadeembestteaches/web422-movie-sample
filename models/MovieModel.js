const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchmea = new Schema({

  title: {
    type : String,
    required : true
  },
  description: {
    type : String,
    required : true
  },
  genre: {
    type : String,
    required : true
  },
  rating: {
    type : Number,
    required : true
  },

  featured: {
    type : Boolean,
    required : false
  },
  dateCreated : 
  {
      type : Date,
      default :  Date.now()
  }
});

//Creating a model objet ALLOWS YOU TO QUERY YOUR MONGO DB!!!!
const MovieModel = mongoose.model('Moive', movieSchmea);

module.exports = MovieModel; 



