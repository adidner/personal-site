import React from 'react';
import Layout from '../../components/Layout';
import {loverData} from "../../../public/data/loverData";

const lilliData = loverData.filter((current) => current.nameFirst === "Lilli" && current.nameLast === "Shriver");

function LoversLilli() {
    return (
        <Layout>
          <div>LoversLilli</div>
        </Layout>
      );
}

export default LoversLilli;