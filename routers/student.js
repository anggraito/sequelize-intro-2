var express = require('express');
var router= express.Router();

var model = require('../models');

router.get('/', (req, res)=>{
  model.Student.findAll()
  .then((students)=> {
    res.render('student', {data_students: students});
  });
})

router.get('/add', (req, res)=>{
  res.render('addStudent', {errmsg: false})
})

router.post('/add', (req, res)=>{
  model.Student.findOne({
    where:{
      email:req.body.email
    }
  })
  .then((result)=>{
    if(!result){
      model.Student.create(req.body)
      .then(()=>{
        res.redirect('/students')
      })
      .catch(function(err){
       res.render('addStudent', {errmsg: err.message});
      })
    } else {
      res.render('addStudent', {errmsg: 'Email sudah terdaftar'});
    }
  })
})

router.get('/edit/:id', (req, res)=>{
  model.Student.findById(req.params.id)
  .then((student)=>{
    console.log(student);
    res.render('editStudent', {edit_student: student, errmsg: false})
  })
})

// router.post('/edit/:id', (req, res)=>{
//   model.Student.update({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email},
//     { where:
//       {id : req.params.id}
//     })
//   .then(()=>{
//     res.redirect('/students')
//   })
// })
router.post('/edit/:id', (req, res)=>{
  model.Student.findOne({
    where:{
      email: req.body.email
    }
  })
  .then((result)=>{
    if(!result){
      model.Student.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
      },
      {
        where:{
          id:req.params.id
        }
      })
      .then(()=>{
        res.redirect('/students');
      })
      .catch((err)=>{
        model.Student.findById(req.params.id)
        .then((rows)=>{
          res.render('editStudent',{edit_student:rows, errmsg: err.message})
        })
      })
    } else {
      res.render('editStudent', {errmsg: 'Ganti lainnya lahhh'});
    }
  })
})

router.get('/delete/:id', (req, res)=>{
  model.Student.destroy({ where:{ id : req.params.id}})
  .then(()=>{
    res.redirect('/students');
  })
})




module.exports = router;
