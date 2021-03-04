const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const app = express();
require('./db');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.use('/api',apiRouter);
app.get("/develop", (req, res) =>
        res.status(200).send({
            message: "Welcome to this API Freelearning.",
        })
    );
app.listen(3000, () => {
    console.log('Servidor arrancado!');
});