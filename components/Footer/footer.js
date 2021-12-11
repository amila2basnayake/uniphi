import React, { useState, useEffect } from "react"; 
import Link from 'next/link'
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";

const Footer = () => { 
    return(
    <footer className="footer-section">
        <div className="container">
            <div className="row"> 
                {/*  Start:About  */}
                <div className="col-lg-3 col-md-6 col-sm-12">  
                    <Widget>
                    <img src="../../assets/images/logo2.png" alt="" style={{width:100}}/>  
                    <div className="footer_p">
                        <p className="footer_para">
                        We have been in business for 5 years now
and have designed car cleaning protocols for over 20 dealerships in South Australia.
                        </p> 
                    </div> 

                    <div className="footer_socil" style={{fontSize:12}}>
                        <ul className="list-icons link-list footer_soc">
                            <li> <a href="//facebook.com"><i className="fa fa-facebook"></i></a> </li>
                            <li> <a href="//twitter.com"><i className="fa fa-twitter"></i></a> </li>
                            <li> <a href="//instagram.com"><i className="fa fa-instagram"></i></a> </li>
                            <li> <a href="//pinterest.com"><i className="fa fa-pinterest"></i></a> </li>
                            <li> <a href="//behance.com"><i className="fa fa-behance"></i></a> </li>
                        </ul>
                    </div> 
                    </Widget> 
                </div> 
                {/*  End:About  */}

                {/*  Start:Quick Link  */} 
                <div className="col-lg-3 col-md-6 col-sm-12 quick_lnk"> 
                    <Widget title="Our Services"> 
                        <List classes="list-icons link-list footer_soc" style={{fontSize:12}}>
                            <LI>
                                <Link href="/service/1">
                                    <a> Car Yard Cleaning Service </a>
                                </Link>
                            </LI>
                            <LI>
                                <Link href="/service/2"> 
                                    <a> Car Yard Soaping Service </a>
                                </Link>
                            </LI>
                            <LI>
                                <Link href="/service/3">
                                    <a> Car Yard Tyre Service - Alloys </a>
                                </Link>
                            </LI>                             
                            <LI>
                                <Link href="/service/4">
                                    <a> Car Yard Tyre Service – Tyre Shine </a>
                                </Link>
                            </LI> 
                            <LI>
                                <Link href="/service/5">
                                    <a> Car Detailing Service </a>
                                </Link>
                            </LI> 
                        </List>
                    </Widget> 
                </div> 
                {/*  End:Quick Link  */}
 
                {/*  Start:Latest post   */}
                <div className="col-lg-3 col-md-6 col-sm-12 quick_lnk"> 
                    <Widget title="Quick Links"> 
                        <List classes="list-icons link-list footer_soc">
                            <LI>
                                <Link href="/service/1">
                                    <a> Car Yard Cleaning Service </a>
                                </Link>
                            </LI>
                            <LI>
                                <Link href="/service/2"> 
                                    <a> Car Yard Soaping Service </a>
                                </Link>
                            </LI>
                            <LI>
                                <Link href="/service/3">
                                    <a> Car Yard Tyre Service - Alloys </a>
                                </Link>
                            </LI>                             
                            <LI>
                                <Link href="/service/4">
                                    <a> Car Yard Tyre Service – Tyre Shine </a>
                                </Link>
                            </LI> 
                            <LI>
                                <Link href="/service/5">
                                    <a> Car Detailing Service </a>
                                </Link>
                            </LI> 
                        </List>
                    </Widget> 
                </div> 
                {/*  End:Latest post  */}
                
                <a className="scrollup" href="#"><span className="icon-glyph-203"></span></a>

                {/*  Start:Newsletter  */} 
                <div className="col-lg-3 col-md-6 col-sm-12"> 
                    <Widget title="contact info">
                        {/*  Start:Subscribe  */}
                        <div >
									<ul>
										<li>
											<div class="wrap">
												<span >Call us now:</span>
												<a >1-800-123-4567</a>
											</div>
										</li>
										<li>
											
											<ul >
												<li >5604 Willow Crossing Ct,</li>
												<li>Clifton, VA, 20124</li>
											</ul>
										</li>
										<li c>
											<ul>
												<li><time datetime="2019-07-15">Mon-Sat: 7:00am-6:00pm</time></li>
												<li><time datetime="2019-07-15">Sun: 8:00am-5:00pm</time></li>
											</ul>
										</li>
									</ul>
								
							</div>
					
                    </Widget> 
                </div> 
                {/*  End:Start Subscribe  */}   
            </div> 
        </div> 

        {/*  Start:Subfooter  */}
        <div className="subfooter"> 
            <p>{new Date().getFullYear()} &copy; Design And Developed by  <Link href="/www.linkedin.com/in/amilabasnayake"> Amila Basnayake </Link>.</p> 
        </div> 
        {/* End:Subfooter  */}

    </footer> 

    )
 
}

 
export default Footer;