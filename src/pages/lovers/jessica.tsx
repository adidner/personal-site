import React from 'react';
import Layout from '../../components/Layout';
import {loverData} from "../../data/loverData";

const jessicaData = loverData.filter((current) => current.nameFirst === "Jessica" && current.nameLast === "King");

function LoversJessica() {
    return (
        <Layout>
          <div>LoversJessica</div>
        </Layout>
      );
}

export default LoversJessica;