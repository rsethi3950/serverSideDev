const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all( function (req, res, next) {
    res.statusCode = 200;
    console.log('all');
    res.setHeader = ('Content-type', 'text/plain');
    next();
})

.get( function (req, res, next) {
    res.end('will send dishes to you!');
})

.post(function (req, res, next) {
    res.end('will add dish ' + req.body.name + 'with details : ' + req.body.description);
})

.put( function (req, res, next) {
    res.statusCode = 403;
    res.end('PUT cannot be performed on /dishes');
});
module.exports = dishRouter;