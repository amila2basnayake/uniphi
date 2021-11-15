import React, { useState } from 'react';
import ChooseUsList from "./ChooseUsList";
import SectionTitle from "../SectionTitles/SectionTitleTwo";
import Data from "../../data/WhyChooseUs/why-choose.json";

const AboutContent = () => {


    return (

        <section className="whychose-section" style={{ backgroundImage: `url("${('/assets/images/img40.jpg')}")` }} >
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-sm-12 my-auto">
                        <div className="whychose_wrp">

                            {/* Start: Heading */}
                            {/* <SectionTitle
                                subTitle=""
                                title=""
                            /> */}
                            <div style={{ paddingTop: 100,paddingBottom:100 }}>
                            <div className={`base-header base-header-left`} >
                                <small style={{ color: '#1E90FF' }}>WHAT WE DO</small>
                                <h3 style={{ color: 'black' }}>Why Choose Us</h3>
                            </div>

                            <div className="whychose_list" style={{ color: 'black' }} >
                                <p>Many Dealerships around South Australia have begun to ditch their car yard hand and instead use
                                    our service. After using our service, many have not gone back to the traditional yard hand model.
                                    Why?</p>
                                <ol >
                                    <li ><a href="#">Most dealerships find our service is cheaper than hiring their own yard hand full time</a></li>
                                    <li ><a href="#">As we send in a team of yard hands, the yard is completed much quicker</a></li>
                                    <li ><a href="#">If your dealership is accessible before hours, most of the time your yard is completed prior to
                                        opening (meaning you’ll never see a dirty yard!</a></li>
                                    <li ><a href="#">We offer multiple services that cannot be completed by a single yard hand alone</a></li>
                                    <li ><a href="#">During the event of rain or bad weather, we simply reschedule the service to a later time</a></li>
                                    <li ><a href="#">We supply the chemicals, equipment and chamois. Saving your dealership money</a></li>
                                    <li ><a href="#">All our yard hands are experienced, in the case of a new worker they are trained amongst experienced yard hands, making them get good at what we do, quickly. This makes our quality of work really high</a></li>
                                </ol>


                                <br />
                                <h3>Still not convinced?</h3>
                                <p>We have no lock in contract. Give us a go and if you’re not happy with our service there is no need to
                                    commit!</p>
                            </div>
                        </div>
                            {/*Start:   About List */}
                            {/* {Data.map(whychoose=>(
                                <ChooseUsList 
                                    key={whychoose.id} 
                                    whychoose={whychoose}  
                                />
                            ))} */}
                            {/*End:  About List*/}

                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12 whychose_bg" style={{ backgroundImage: `url("${('/assets/images/img251.jpg')}")` }} >
                        { /* Image */}
                        {/* <div className="whychose_bg" style={{ backgroundImage: `url("${('/assets/images/img251.jpg')}")` ,marginTop:161,width:625}} > </div> */}
                    </div>

                </div>
                {/* row */}
            </div>
            {/* container */}
        </section>

    );
};

export default AboutContent;
