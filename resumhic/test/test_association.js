const mongoose = require('mongoose');
const User = require('../src/user');
const Resume=require('../src/resume');
const Skills = require('../src/skills');
const Experience=require('../src/experience');
const Achievement=require('../src/achievement');
const Education=require('../src/education');

describe('Assocations',()=>{
  let ram,resume, skills,achievement,experience,education; 
  beforeEach((done) =>{
    ram=new User({
      Email:'sitaram@gmail.com',
      Password:'sitaram'
    });
    resume=new Resume({
        Name: 'Ram',
        Address: 'RamMandir',
        PostCode: 224123,
        City: 'Ayodhya',
        State: 'UP',
        Email: 'sitaram@gmail.com',
        Phone:1234567890,
    });
    education=new Education({
        I_name:'Gurukul',
        Degree:'God',
        Grades:'100%'
    });
    skills=new Skills({
      S_details:'All rounder'
    });
    experience=new Experience({
      E_details:'14 years of vanvas'
    });
    achievement=new Achievement({
      A_details:'Win the fight with Ravan'
    }); 
    ram.Resume=resume;
    resume.Education.push(education);
    resume.Skills.push(skills);
    resume.Achievement.push(achievement);
    resume.Experience.push(experience);

    Promise.all([ram.save(),resume.save(),achievement.save(),education.save(),experience.save(),skills.save()])
      .then(()=> done());
  });
  // it('saves a relation',(done) => {
  //   User.findOne({Password:'sitaram'})
  //     .then((user) => {
  //       console.log(user);
  //       done();
  //     })
  // });
});