import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index';  
import Team from '../components/Team/index'; 

const Home = () => {
  return (
    <Fragment>
        
        <LayoutOne pageTitle="UNIPHI Car wash and Detailing"> 

        <PageHeader 
          bgImg={('/assets/images/page_bg.jpg')}
          title="Our Team" 
        /> 
        <Team /> 

     </LayoutOne>

    </Fragment>
  );
};

export default Home;