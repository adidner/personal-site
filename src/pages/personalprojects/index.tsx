import React from 'react';
import Layout from '../../components/Layout';
import { personalProjectDataInterface, personalProjectData } from '../../../public/data/personalProjectData';

function PersonalProjects() {
  return (
    <Layout>
      <div className={"personal-projects-container"}>
        <div className={"personal-projects-title"}>PersonalProjects</div>
        {
          personalProjectData.map(current => 
            <PersonalProjectCards
              {...current}
            />
          )
        }
      </div>
    </Layout>
  );
}

export default PersonalProjects;


function PersonalProjectCards(props: personalProjectDataInterface) {
  return (
    <div className={"personal-project-card-container"}>
        <div className={"picture-container"}>
          <img src={"data/bookCovers/ready_player_one.jpg"} alt={"placeholder"} width={"600px"} height={"400px"}/>
        </div>

        <div className={"text-container"}>
          <div className={"text-title-container"}>{props.title}</div>
          <div className={"tech-stack-container"}>
            {
              props.techStack.map(current => 
                <div className={"tech-stack-wrapper"}>
                  {current}
                </div>
              )
            }
          </div>
        </div>
      
    </div>
  );
} 