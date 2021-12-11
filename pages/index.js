import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne"; 
import Slider from '../components/Slider/SliderOne'
import About from '../components/About'
import Services from '../components/Services'
import Funfact from '../components/FunFacts'
import Team from '../components/Team/index';
import WorkProcess from '../components/WorkProcess';
import WhyChooseUs from '../components/WhyChooseUs';
import PricingTable from '../components/PricingTable';
import Gallery from '../components/Gallery/gallery-one/index';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';
import BrandLogo from '../components/BrandLogo'; 
 

const Home = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="UNIPHI Car Wash and Detailing">  
        <Slider />
        <About />
        <Services /> 
        <Gallery />
      
        {/* <Funfact /> */}
        {/* <Team /> */}
        {/* <WorkProcess /> */}
        <WhyChooseUs />
        {/* <PricingTable />  */}

        {/* <Testimonial /> */}
        {/* <Blog /> */}
        {/* <BrandLogo />  */}
     </LayoutOne>

    </Fragment>
  );
};

export default Home;