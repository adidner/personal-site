import React, { ReactNode } from 'react';
import Layout from '../components/Layout';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import BitBucketIcon from '../assets/BitBucketIcon';
import ButtonLink from '../components/ButtonLink';
// import profile from '../assets/profile.jfif'
// var profile = require('../assets/profile.jfif');

function Root() {
    return (
        <Layout>
          <div className={"seperating-container"}>
              <div>
                
                <h3>Disclaimer: This site is a work in progress as I have other personal projects that interest me and I want to work on over this one also I would rather code most of this content from scratch and include more personal details rather than use a generic template</h3>
                
                
                <h1>Aaron Didner</h1>
                <h2>I build Websites and Mobile apps</h2>

                <div className={"bio-and-image"}>
                  {/* <img src={profile}/> */}
                  <div className={"image-container"}>
                    <img src={"data/profilePic/Potentail.jpg"} alt={"its bad you probably don't wanna see it anyways"} width={"100%"} height={"100%"}/>
                  </div>
                  <div className={"bio-container"}>
                    <p>
                      By day I work as a software engineer at Alion Science and Technology a land of React, Typescript, C++. 
                    </p>
                    <p>
                      By night I'm a creator of random Projects, Exercise Enthusiust, Dancer, Dungeon Master, Gamer, Casual Chef and Bookworm. 
                    </p>
                  </div>
                </div>
              </div>

              <div style={{paddingBottom: "20px"}}>            
                <div className={"center-get-in-touch"}>
                <ButtonLink title={"Get In Touch"} link={"mailto:adidner@gmail.com"}/>
                </div>
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
                  <IconPlusLink 
                    icon={BitBucketIcon} 
                    title={"@adidner"}
                    link={"https://bitbucket.org/adidner/"}
                  /> 
                </div>
              </div>

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
      <a href={props.link}>
      {props.icon}
      <div>{props.title}</div>
      </a>
    </div>
  );
}

export default Root;