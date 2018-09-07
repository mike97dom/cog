import React from 'react';


class ContactUs extends React.Component{
    render(){
        return(
            <div className="wrapper-page contact-page">
                                
                <section className="contactus">
                    <div style={{width: '100%'}}><iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=28.611982,70.38091&amp;q=B%2035%2C%20Sector%2067%2C%20Noida%2C%20U.P.%2C%20India%20201301+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/create-google-map/">Create Google Map</a></iframe></div><br />
                </section>
                <section className="contactDetailsPopup contactusPop">

                    <div className="container">
                        <div className="row contactDetailsPopupContainer">
                            <i className="glyphicon glyphicon-plus closeIcon"></i>
                            <div className="col-md-8 col-xs-8 no-padding">
                                <div className="infoWrapper">
                                    <div className="row ">

                                        <div className="col-md-12 col-xs-12 userinfo">
                                            <h4 className="text-left">Send a Message</h4>

                                        </div>
                                    </div>
                                    <form>
                                        <div className="row ">

                                            <div className="col-md-12 col-xs-12 userinfo">
                                                <div className="row">
                                                    <div className="col-md-6 col-xs-12 "><input type="text" className="border-bottom" placeholder="Name*"/></div>
                                                    <div className="col-md-6 col-xs-12"><input type="text" className="border-bottom"placeholder="Email*"/></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 col-xs-12 "><input type="text" className="border-bottom" placeholder="Phone number"/></div>
                                                    <div className="col-md-6 col-xs-12"><input type="text" className="border-bottom"placeholder="Company Email"/></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12 msgarea">
                                                        <p className="msg">Message*</p>
                                                        <textarea></textarea></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-xs-12 msgarea text-right">
                                                <span className="btn btn-primary send-btn">Send</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xs-4 col-md-4 contactDetails">
                                <h3 className="text-cente">Contact</h3>
                                <div className="detailsWrapper">
                                    <div className="row ">
                                        <div className="col-md-12 col-xs-12">
                                            <h5 className="detailsHeading" >Phone Number</h5>
                                        </div>
                                        <div className="col-md-12 col-xs-12"> <span className="">+91 1234567890

                </span>  </div>
                                    </div>
                                </div>
                                <div className="detailsWrapper">
                                    <div className="row ">
                                        <div className="col-md-12 col-xs-12">
                                            <h5 className="detailsHeading" >Email</h5>
                                        </div>
                                        <div className="col-md-12 col-xs-12"> <span className="">contact@cogmac.com</span>  </div>
                                        <div className="col-md-12 col-xs-12"> <span className="">rajendu@cogmac.com</span>  </div>
                                        <div className="col-md-12 col-xs-12"> <span className="">hari@cogmac.com</span>  </div>
                                    </div>
                                </div>
                                <div className="detailsWrapper">
                                    <div className="row ">
                                        <div className="col-md-12 col-xs-12">
                                            <h5 className="detailsHeading" >Mailing Address </h5>
                                        </div>
                                        <div className="col-md-12 col-xs-12"> <span className="">B 35, Sector 67, </span>  </div>
                                        <div className="col-md-12 col-xs-12"> <span className="">Noida, U.P., India </span>  </div>
                                        <div className="col-md-12 col-xs-12"> <span className="">201301</span>  </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default ContactUs;