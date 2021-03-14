import React from 'react';
import Layout from '../../components/Layout';
import {experienceSkillData} from "../../data/experienceSkillsData";


function ProfessionalProjects() {


  return (
    <Layout>
      <div>
        
        <div>
          <h2>Skills</h2>
          {
            experienceSkillData.map((currentVal) => {
              //potentially change into a mapping of skill string and picture URL
              //to some sort of card or verical list 
              let skillString = "";
              currentVal.skills.forEach(element => {
                skillString = skillString +  element + ", ";
              });
              skillString = skillString.slice(0, skillString.length -2);//get rid of trailing ,
              return (
                <div className={"skill-container"}>
                  <h3 className={"skill-title"}>{currentVal.title}:</h3>
                  <div>{skillString}</div>
                </div>
              );
            })
          }
        </div>

        <div>
          <h2>Experience</h2>
          
        </div>
      </div>
    </Layout>
  );
}

export default ProfessionalProjects;