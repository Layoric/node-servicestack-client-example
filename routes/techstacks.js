var express = require('express');
var JsonServiceClient = require('servicestack-client').JsonServiceClient;
var GetAllTechnologies = require('../dtos/techstacks.dtos').GetAllTechnologies;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var client = new JsonServiceClient('http://techstacks.io/');
    client.get(new GetAllTechnologies()).then(function (ssRes) {
        res.render('techstacks', { title: 'TechStacks', technologies: ssRes.Results });
    });
});

module.exports = router;
