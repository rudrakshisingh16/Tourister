const mongoose = require('mongoose')

const url = 'mongodb+srv://rudrakshisingh16:bhavya18@cluster0.czgkjtc.mongodb.net/tourister?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
   console.log('database connected'); 
}).catch((err) => {
console.log(err);
});

module.exports = mongoose;