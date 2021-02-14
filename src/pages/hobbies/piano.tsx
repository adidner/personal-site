import React from 'react';
import Layout from '../../components/Layout';

function Piano() {
  return (
    <Layout>
      <div>
        <h1>Piano</h1>
        <p>
          Growing up my parents forced me to play piano. Later I was extremely grateful for this and continued to pursue import PropTypes from 'prop-types'
          despite mouting life complexities. Eventually other things in life took priority unfortunately there are only so many hours in the day and so much 
          will power inside me. That being said I still have a handful of songs prepared at a performance level. Here are two of them.
        </p>

        <iframe width="650" height="325" src="https://www.youtube.com/embed/Kuq9BnbHOTQ?start=8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


        <iframe width="650" height="325" src="https://www.youtube.com/embed/QekGlFAYakI?start=8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </Layout>
  );
}

export default Piano;