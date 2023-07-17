const { Schema, model } = require('../connection');

// defining the structure of data to store
const myschema = new Schema({
    name : String,
    email : String,
    passward: String,
})

 module.exports = model('user',myschema);
    
