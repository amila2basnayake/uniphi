import React, { useState } from 'react';
import AboutList from "./AboutList";
import SectionTitle from "../SectionTitles/SectionTitleTwo";
import AboutData from "../../data/About/about.json";
import ModalVideo from "react-modal-video";

const AboutContent = () => {

    const [modalStatus, isOpen] = useState(false);

    return (

        <section className="about-section" id="about" >
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-sm-12">
                        <div className="about_img" >
                            { /*  About Left Image  */}

                            {/* <div class="mb-4">
                                <img src="/assets/images/howweareimg/img138.jpg" alt="about" style={{height:220,width:550}}/>
                            </div> */}
                            {/* <div class="col-12">
                                <div class="d-flex">
                                    <div >
                                        <div >
                                            <img src="/assets/images/howweareimg/img138.jpg" alt="about" style={{height:220,width:250,margin: -16}}/>
                                        </div>
                                    </div>
                                    <div >
                                        <div>
                                            <img src="/assets/images/howweareimg/img138.jpg" alt="about"  style={{height:220,width:250,margin: -16}} />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <img src="/assets/images/howweareimg/aa.jpg" alt="about" />  

                            {/* about_video  */}
                            {/* <div className="about_video"> 
                             <ModalVideo
                                channel="youtube"
                                isOpen={modalStatus}
                                videoId="BDYUV7tx_pM"
                                onClose={() => isOpen(false)}
                            />
                            <a onClick={() => isOpen(true)} className="play-video" href="#/">
                                <i className="icon-glyph-229"></i>Watch our intro video
                            </a>  
                        </div> */}
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12 about_why_choose">
                        <div className="about_item_tb">
                            <div className="about_item_tbcell">

                                {/* Start: Heading */}
                                <SectionTitle
                                    title="Who We Are ?" />
                                <div >
                                    <p>We here at UniPhi Car Cleaning are a newly established business and are committed to providing the
                                        optimal solution for your dealerships car cleaning needs. We have been in business for 5 years now
                                        and have designed car cleaning protocols for over 20 dealerships in South Australia.</p>
                                    <h2 style={{marginTop:82}}>Our Goal</h2>
                                    <p>Our Goal is to provide the most optimal and cost-effective solution for your dealerships car cleaning
                                        needs. We provide a cleaning service that is tailored to the unique circumstances of your dealership
                                        and take many factors into consideration when designing a cleaning protocol.</p>
                                </div>
                                {/*Start:   About List */}
                                {/* {AboutData.map(about=>(
                                <AboutList 
                                    key={about.id} 
                                    about={about}  
                                />
                            ))} */}
                                {/*End:  About List*/}

                            </div>
                        </div>
                    </div>

                </div>
                {/* row */}
            </div>
            {/* container */}
        </section>

    );
};

export default AboutContent;
