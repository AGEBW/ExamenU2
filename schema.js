const mongoose = require('mongoose');

//Construyendo el esquema
const productSchema = new mongoose.Schema({
    code: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required:true
    },
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    },
  quantity:{
      type:Number,
      required:true
  }
});


