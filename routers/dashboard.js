var express = require('express');
var router= express.Router();

const models = require('../models')

router.use((req, res, next)=>{
  if(req.session.authority > 0){
    next();
  } else{
    res.redirect('/login')
  }
})

router.get('/', (req, res)=>{
	res.render('dashboard')
})


module.exports = router;
