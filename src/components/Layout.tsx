import React from 'react';

import Navbar from './Navbar';


interface layoutProps {
    children: React.ReactNode
}


function Layout(props: layoutProps) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}

export default Layout;