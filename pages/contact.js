import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from '../components/PageHeader/index'; 
import ContactForm from '../components/ContactForm';  

const Contact = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="UNIPHI Car wash and Detailing"> 

        <PageHeader 
          bgImg={('/assets/images/img08.jpg')}
          title="Contact Us" 
        /> 

        <ContactForm />   
 
     </LayoutOne>

    </Fragment>
  );
};

export default Contact;