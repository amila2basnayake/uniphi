import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index';  
import BlogPage from "../components/BlogPage"; 

const BlogPg = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="UNIPHI Car wash and Detailing"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title="Our Blog" 
        />  

        <BlogPage />
   
     </LayoutOne>

    </Fragment>
  );
};

export default BlogPg;