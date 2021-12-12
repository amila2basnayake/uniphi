import React from 'react';
import Link from 'next/link'

const Header = () => {
	return (
 
    <div className="header_topbar">
        <div className="container">
            <div className="row">
                {/* Address / Phone / Email*/}
                <div className="header_top_right list-unstyled">
                    <ul>
                        <li><i className="fa fa-phone"></i>+61 407 247 886</li>
                        <li><i className="fa fa-globe"></i>132 Springbank Rd, Clapham 5062</li>
                    </ul>
                </div>
 
                {/* Social Icon */}
                <div>
                    <ul className="header_socil list-inline pull-left">
                        <li><i className="fa fa-envelope"></i>connect2.rahan.rahman@gmail.com</li>
                        <li>
                            <a href="https://www.facebook.com/UniPhi-Car-Cleaning-110082951515460" className="fa fa-facebook"></a>
                        </li>
                        {/* <li>
                            <a href="#" className="fa fa-twitter"></a>
                        </li>
                        <li>
                            <a href="#" className="fa fa-linkedin"></a>
                        </li>
                        <li>
                            <a href="#" className="fa fa-google-plus"></a>
                        </li> */}
                    </ul>
                </div>
                {/* <Link href="/contact">
                    <a className="more-link">
                        Get a quote
                    </a>
                </Link> */}
                {/* End: Social Icon */}
                 
            </div>
        </div>
    </div>
 
	)
}


export default Header;