import React from 'react';
import Layout from '../../components/Layout';
import { personalProjectDataInterface, personalProjectData } from '../../../public/data/personalProjectData';
import SourceButton from '../../components/SourceButton'
import linkify from '../../utils/Linkify';


function PersonalProjects() {
  return (
    <Layout>
      <div className={"personal-projects-container"}>
        <div className={"personal-projects-title"}>Personal Projects</div>
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
          <img src={props.picturesSrc[0]} alt={"placeholder"} width={"90%"} height={"80%"}/>
        </div>

        <div className={"text-container"}>
          <div className={"text-title-container"}>{props.title}</div>
          <div className={"dates-wrapper"}>{props.dateStarted} - {props.dateEnded}</div>
          <div className={"tech-stack-container"}>
            {
              props.techStack.map(current => 
                <div className={"tech-stack-wrapper"}>
                  {current}
                </div>
              )
            }
          </div>
          <div className={"description-wrapper"}>{linkify(props.description)}</div>
          {/* 
          
          TODO: Integrate these into the design or a popup with a button or something???
          
          <div className={"noteable-wrapper"}>{props.noteableThings}</div>
          <div className={"reflection-wrapper"}>{props.reflection}</div> 
          */}
          <div className={"source-wrapper"}><SourceButton link={props.srcLink} title={"Source Code"}/></div>
        </div>

    </div>
  );
} 