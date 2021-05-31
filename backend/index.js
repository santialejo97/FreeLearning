const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const PORT=process.env.PORT || 3000;
const app = express();
require('./db');

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE" );
    next();
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.use('/api',apiRouter);
app.get("/", (req, res) =>
        res.status(200).send({
            message: "Welcome to this API Freelearning.",
        })
    );
app.listen(PORT, () => {
    console.log('Servidor arrancado!');
});


