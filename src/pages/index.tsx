import React from 'react';
import Layout from '../components/Layout';

function Root() {
    return (
        <Layout>
          <h4>Hi, my name is</h4>
          <h1>Aaron Didner</h1>
          <h2>I build Web and Mobile apps</h2>
          <p>
            By day I work as a software engineer at Alion Science and Technology, where I work in a React, Typescript, C++ world. 
          </p>
          <p>
            By night I work on all sorts of random projects in React Native (Mobile Apps), React, Python and more.  
          </p>
          <a href={`mailto:adidner@gmail.com`} className="email-link">
            Get In Touch
          </a>
        </Layout>
      );
}

export default Root;