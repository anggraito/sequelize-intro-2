var express = require('express');
var router= express.Router();
// var session = require('express-session')

const models = require('../models')

router.get('/login', (req, res)=>{
	res.render('login', {message: req.query.message || ''})
})

router.post('/login', (req, res)=>{
	models.User.findOne({
    where: {
			username: req.body.username,
			password: req.body.password
		}
  })
	.then((user) =>{
    // res.send(user)
		if(user == null){
			res.send('/login?message=login failed')
		} else {
			console.log(req.session);
			req.session.login = true
			req.session.role = user.role
			// console.log(req.session);
			if(req.session.role == "teacher"){
        req.session.authority = 1
      } else if(req.session.role == "academic"){
        req.session.authority = 2
      } else if(req.session.role == "headmaster"){
        req.session.authority = 3
      }
			console.log(user);
			res.redirect('/dashboard')
		}
	})
	.catch((err)=>{
		res.send(err)
		// res.redirect('/login')
	})
})

router.get('/logout', (req,res,nest)=>{
	req.session.destroy()
	res.redirect('/')
})

module.exports = router;
