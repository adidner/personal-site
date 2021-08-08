import React, { useEffect } from 'react';
import PersonalProjects from '../personalprojects/index';
import Router from 'next/router';

// Should re-direct to personalprojects some how

function Coding() {
  useEffect(() => {
     Router.push('/personalprojects') 
  },[])


  return <div/>;
}

export default Coding;