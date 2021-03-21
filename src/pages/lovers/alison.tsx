import React from 'react';
import Layout from '../../components/Layout';
import {loverData} from "../../data/loverData";

const alisonData = loverData.filter((current) => current.nameFirst === "Alison" && current.nameLast === "Jones");

function LoversAlison() {
    return (
        <Layout>
          <div>LoversAlison</div>
        </Layout>
      );
}

export default LoversAlison;