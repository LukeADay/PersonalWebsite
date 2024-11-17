import React from 'react';
import SkillBar from 'react-skillbars';
import './Skills.css';

const SKILLS = [
    {type: "Python", level: 95},
    {type: "R", level: 90},
    {type: "SQL", level: 80},
    {type: "Tableau", level: 80},
    {type: "AWS", level: 80},
    {type: "SageMaker", level: 80},
    {type: "Lambda", level: 80},
    {type: "Redshift", level: 80},
    {type: "Airflow", level: 70},
    {type: "Glue", level: 65},
    {type: "Docker", level: 60},
    {type: "Kubernetes", level: 50},
    {type: "JavaScript", level: 50},
    {type: "React", level: 50},
    {type: "CSS", level: 50},
    {type: "HTML", level: 40},
    {type: "C++", level: 30}
];

const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9"
    }
  };
  


  function Skills() {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <SkillBar skills={SKILLS.map(skill => ({
          ...skill,
          title: `${skill.type} (${skill.years})`
        }))} colors={colors} height={25} animationDuration={2000} />
      </div>
    );
  }
  

export default Skills;
