var express = require('express');
var router= express.Router();

var model = require('../models');

router.get('/', (req, res)=> {
  model.Teacher.findAll().then(teachers => {
    res.render('teacher', {data_teachers : teachers})
    //res.send(JSON.stringify(teachers, null, 2))
  })
})


module.exports = router;
