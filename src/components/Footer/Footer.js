import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <div className="row strip">
                        <div className="footer-item col-6 col-sm-6 col-md-3">
                            <h5>Cogmac</h5>
                            <span className="copy">Copywrite &copy; 2017</span>
                            <span>Cogmac Industries Pvt. Ltd.</span>
                        </div>
                        <div className="footer-item col-6 col-sm-6 col-md-3">
                            <h5>Company</h5>
                            <ul className="nav-footer">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Awards</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Blog</a></li>  
                                <li><a href="#">Petents</a></li>
                                <li><a href="#">White Papers</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>

                        </div>
                        <div className="footer-item contact col-6 col-sm-6 col-md-3">
                            <h5>Contact</h5>
                            <span className="address">B35,Sector67,Noida,U.P.,India201301</span>
                            <span className="mail"><a href="mailto:contact@cogmac.com">contact@cogmac.com</a></span>
                            <span className="call"><a href="tel:+911234567890">+91 1234567890</a></span>
                        </div>
                        <div className="footer-item col-6 col-sm-6 col-md-3">
                            <h5>Social Media</h5>
                            <div className="social">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-pinterest-p"></i></a>
                            </div>

                        </div>
                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer;
