var express = require('express');
var router= express.Router();

var model = require('../models');

router.get('/', (req, res)=>{
  model.Subject.findAll()
  .then((subjects)=> {
    res.render('subject', {data_subjects: subjects});
    //res.send(JSON.stringify(teachers, null, 2))
  });
})

module.exports = router;
