import React from 'react';
import Layout from '../../components/Layout';
import {loverData} from "../../../public/data/loverData";

const ashleyData = loverData.filter((current) => current.nameFirst === "Ashley" && current.nameLast === "Boone");

function LoversAshley() {
    return (
        <Layout>
          <div>LoversAshley</div>
        </Layout>
      );
}

export default LoversAshley;