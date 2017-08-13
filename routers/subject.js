var express = require('express');
var router= express.Router();

var model = require('../models');

router.get('/', (req, res)=>{
  model.Subject.findAll()
  .then((subjects)=> {
    model.Teacher.findAll()
    .then((teachers)=>{
      for (var j = 0; j < subjects.length; j++) {
        var teacherName = []
        for (var i = 0; i < teachers.length; i++) {
          if(subjects[j].id == teachers[i].SubjectId){
            let fullname = teachers[i].first_name + ' ' + teachers[i].last_name
            subjects[j].teacher_name = fullname
            teacherName.push((i+1)+ '. ' +subjects[j].teacher_name)
          }
        }
        subjects[j].teacher_name = teacherName.join("\n")
      }
      res.render('subject', {data_subjects: subjects});
    })
  });
})

module.exports = router;
