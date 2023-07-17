const express = require("express");

const app = express(); //initialize express
const port = 5000;

const userRouter = require('./routers/userRouters');
const laptopRouter = require('./routers/laptopRouters');

app.use(express.json(  ));
// middleware

app.use('/user', userRouter);
app.use('/user', laptopRouter);

// to accept request from client
// routing
app.get('/', (req, res) => {
    res.send ('response from backend')
});
app.get('/add', (req, res) => {
    res.send ('response from add route')
});
app.get('/add', (req, res) => {
    res.send ('response from update route')
});
app.get('/add', (req, res) => {
    res.send ('response from delete route')
});
app.listen(port, () => {
    console.log('serve started on 5000');
}); //listen for requests
