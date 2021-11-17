import React from 'react';
import ServicesData from '../../data/Services/service'
import ServiceItem from "./ServiceItem";
import SectionTitle from "../SectionTitles/SectionTitle";

const Service = () => {

    return (

        <section className="service-section">
            {/* Start: Animation Bounce Icon */}
            {/* <div >
                <div className="animate_item animate_item1 bounce_animate">
                    <img src="/assets/images/animate_icon1.png" alt="service" />
                </div>
                <div className="animate_item animate_item2 bounce_animate">
                    <img src="/assets/images/animate_icon2.png" alt="service" />
                </div>
                <div className="animate_item animate_item3 bounce_animate">
                    <img src="/assets/images/animate_icon3.png" alt="service" />
                </div>
                <div className="animate_item animate_item4 bounce_animate">
                    <img src="/assets/images/animate_icon4.png" alt="service" />
                </div>
            </div> */}
            {/* End: Animation Bounce Icon */}

            <div className="container">
            <div class="base-header base-header-left"><small>OUR LATEST WORK</small><h3>Service We Offers</h3></div>
                {/* Heading */}
                {/* <SectionTitle
                    title="Service We Offers" /> */}
                
                <div>
                    <h4>Our service begins by assessing the frequency of how often the cars on your yard need to be
                        cleaned:</h4>
                    <div>
                        <p><b>We take into consideration:</b></p>
                        {/* <div className="angry-grid"> */}
                        <div>

                                        
<ul className="imglist">
    <li class=""><a href="#">The standard you would like your cars to be</a></li>
    <li class=""><a href="#">Seasonal weather conditions</a></li>
    <li class=""><a href="#">Proximity to trees and other pollinating plants</a></li>
    <li class=""><a href="#">Distance to main road</a></li>
    <li class=""><a href="#">Length of exposure of the site</a></li>
</ul>

                        </div>
                    </div><br/>
                    <p>Based on these factors we determine how often your yard needs to be cleaned and what days
                        during the week will best suit the dealerships needs.</p>
                        <br/>
                </div>
                {/* End: Heading */}

                <div className="row">
                    {
                        ServicesData.slice(0, 6).map(service => (
                            <div className="col-md-6 col-sm-12" key={service.id}>
                                <ServiceItem
                                    key={service.id}
                                    service={service}
                                />
                            </div>
                        ))
                    }
                </div>
                {/* End: row */}
            </div>
            {/* End: container */}
        </section>
    );
}
    ;

export default Service;