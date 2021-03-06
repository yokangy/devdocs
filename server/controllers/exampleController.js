var Example = require('../models/example.js');

module.exports = {
  load: function (req, res, next, exampleID) {
    Example.find(exampleID).then(function (example) {
      if(example) {
        req.example = example;
        next();
      } else {
        res.status(404).send('Example ' + exampleID + ' not found');
      }
    });
  },

  create: function (req, res) {
    Example.create(req.body).then(function(result) {
      //TODO branch on result instanceof Sequelize.ValidaitonError
      res.status(200).send(result);
    });
  },

  get: function (req, res) {
    res.status(200).send(req.example); //TODO mask private settings for get; leave them in for edit...?
  },

  edit: function (req, res) {
    res.status(200).send(req.example);
  },

  update: function (req, res) {
    req.example.update(req.body).then(function(result) {
      //TODO branch on result instnaceof Sequelize.ValidationError 
      res.status(200).send(result);
    });
  },

  delete: function (req, res) {
    req.example.destroy().then(function() {
      res.status(200).send('Example deleted')
    });
  },

  vote: function (req, res) {
    //TODO !
  }
  
};
