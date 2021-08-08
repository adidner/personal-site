import React from 'react';
import { tiktokDataInterface, tiktokData } from '../../../public/data/tiktokData';
import Layout from '../../components/Layout';

function TikToks() {
    return (
        <Layout>
          <h1>TikToks</h1>
          {
            tiktokData.map((child) => {
              return <TikTokCard {...child}/>;
            })
            
          }
        </Layout>
      );
}

export default TikToks;



function TikTokCard(props: tiktokDataInterface){
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: props.code}}/>
    </>
  );
}