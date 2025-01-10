const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());
app.get('/results', (req,res) => {
    controller.getResults((req, res, next) => {
        res.send();
    });
});

app.post('/createresult', (req, res) => {
    controller.addResult(req.body, (callack) => {
        res.send();
    });
});

app.post('/updateresult', (req, res) => {
    controller.updateResult(req.body, (callack) => {
        res.send(callack);
    });
});

app.post('/deleteresult', (req, res) => {
    controller.deleteResult(req.body, (callack) => {
        res.send(callack);
    });
});

module.exports = app;