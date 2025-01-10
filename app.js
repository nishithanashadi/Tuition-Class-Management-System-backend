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
    controller.getResults(results => {
        res.send(results);
    }); 
});

app.get('/result', (req, res) => {
    const id = req.query.id;
    controller.getResultById(id, result => {
        res.send(result);
    });
});

module.exports = app;