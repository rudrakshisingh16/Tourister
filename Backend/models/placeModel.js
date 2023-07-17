const { Schema, model, Types } = require('../connection');

// defining the structure of data to store
const myschema = new Schema({
    title : String,
    address : String,
    speciality: String,
    image: String,
    createdAt: Date,
    location:{type : Types.ObjectId, ref: 'location' }
})

 module.exports = model('places',myschema);
    
