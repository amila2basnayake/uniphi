import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index'; 
import Gallery from '../components/Gallery/gallery-one'; 

const GalleryPg = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="UNIPHI Car wash and Detailing"> 

        <PageHeader 
          bgImg={('/assets/images/img37.jpg')}
          title="Our Gallery" 
        /> 

        <Gallery />   
 
     </LayoutOne>

    </Fragment>
  );
};

export default GalleryPg;