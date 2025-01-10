const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host ='localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri ='mongodb+srv://nashadi:nishi@cluster0.hckw8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log('MongoDB Error:', error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Node Server is listening to ${server.address().port}`)
});

app.use('/api', router);