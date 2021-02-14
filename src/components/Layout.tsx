import React from 'react';

import Navbar from './Navbar';


interface layoutProps {
    children: React.ReactNode
}


function Layout(props: layoutProps) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout;