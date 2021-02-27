import React, { ReactNode } from 'react';
import Layout from '../components/Layout';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import BitBucketIcon from '../assets/BitBucketIcon';


function Root() {
    return (
        <Layout>
          <h4>Hi, my name is</h4>
          <h1>Aaron Didner</h1>
          <h2>I build Web and Mobile apps</h2>
          <p>
            By day I work as a software engineer at Alion Science and Technology a land of React, Typescript, C++. 
          </p>
          <p>
            By night I'm a creator of random projects, exercise enthusiust, dancer, Dungeon Master, gamer, casual chef and bookworm. 
          </p>
          <a href={`mailto:adidner@gmail.com`} className="email-link">
            Get In Touch
          </a>
          <div className="all-icon-links-container">
            <IconPlusLink 
              icon={<GitHubIcon/>} 
              title={"@adidner"}
              link={"https://github.com/adidner/"}
            />
            <IconPlusLink 
              icon={<LinkedInIcon/>} 
              title={"@aaron-didner"}
              link={"https://www.linkedin.com/in/aaron-didner-3b9554129/"}
            />
            <IconPlusLink 
              icon={<InstagramIcon/>} 
              title={"@_snap_dragon_"}
              link={"https://www.instagram.com/_snap_dragon_/"}
            />
            {/* <IconPlusLink 
              icon={BitBucketIcon} 
              title={"@adidner"}
              link={"https://bitbucket.org/adidner/"}
            />  */}
          </div>
        </Layout>
      );
}

interface IconPlusLinkInterface{
  icon: ReactNode;
  title: string;
  link: string;
}
function IconPlusLink(props: IconPlusLinkInterface){

  return (
    <div className={"icon-link-container"}>
      {props.icon}
      <a href={props.link}>{props.title}</a>
    </div>
  );
}

export default Root;