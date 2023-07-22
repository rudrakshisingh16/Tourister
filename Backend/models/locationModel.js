const { Schema, model } = require('../connection');

// defining the structure of data to store
const myschema = new Schema({
    title : String,
    image : String,
    description: String,
    place: String
})

 module.exports = model('location',myschema);
    
