import React from 'react';
import Layout from '../../components/Layout';
import {loverData} from "../../data/loverData";

const natashaData = loverData.filter((current) => current.nameFirst === "Natasha" && current.nameLast === "Bolshakoff");

function LoversNatasha() {
    return (
        <Layout>
          <div>LoversNatasha</div>
        </Layout>
      );
}

export default LoversNatasha;