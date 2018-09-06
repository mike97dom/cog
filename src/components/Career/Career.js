import React from 'react';

class Career extends React.Component{
    render(){
        return(
            <div className="about-page page-wrapper">
                    <section className="chooseHeading">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <h2 className="text-center text-uppercase  ">Who we are?</h2>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <p className="text-center">We are team of researchers and developers, innovating machines with cognition.

                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                    <div className="row workHere">
                        <div className="col-sm-12 col-md-12">
                            <h2 className="text-center text-uppercase  ">Why Work Here?</h2>
                        </div>
                    </div>
                        <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-4">
                            <div className="workWrapper">
                                <img src="images/analytics.svg"/>
                                <h4 className="text-center">Open office Environment</h4>
                            </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="workWrapper">
                                    <img src="images/analytics(1).svg"/>
                                    <h4 className="text-center">Innovating technologies and products for automation and new world</h4>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="workWrapper">
                                    <img src="images/analysis.svg"/>
                                    <h4 className="text-center">Only Researchers</h4>
                                </div>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <span className="btn joinus">Join us</span>
                                </div>
                            </div>
                        </div>
                    </section>

            </div>
        )
    }
}

export default Career;