const express = require("express");
const cors = require('cors');

const app = express(); //initialize express
const port = 5000;

const userRouter = require('./routers/userRouters');
const locationRouter = require('./routers/locationRouter');
const utilRouter = require('./routers/util');

app.use(cors());
app.use(express.json());
// middleware

app.use('/user', userRouter);
app.use('/location', locationRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'));

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
