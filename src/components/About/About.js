import React from 'react';

class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            popupStatus:false
        }
    }

    sideBarClickHandler = (status)=>{
        this.setState({
            popupStatus:status
        })
    }
    render(){
        return(
            <div className="page-wrapper about-page">
                {
                        this.state.popupStatus==true&&   
                <section class="contactDetailsPopup">

                <div class="container">
                    
                    

                    <div class="row contactDetailsPopupContainer">
                    <i onClick={(e)=>this.sideBarClickHandler(false)} class="fa fa-times close-popup"></i>               
                        

                    <div class="col-md-8 col-xs-8 no-padding">
                        <div class="infoWrapper">
                        <div class="row ">
                            <div class="col-md-1 col-xs-2">
                            <figure>
                                <img src="images/default-avatar.png" alt=""/>
                            </figure>
                            </div>
                            <div class="col-md-11 col-xs-10 userinfo">
                                <h4 class="text-left">Rajendu Mitra</h4>
                                <p class="text-left">CEO & Co-founder</p>
                            </div>
                        </div>
                            <div class="detailsWrapper">
                                <div class="row ">
                                    <div class="col-md-12 col-xs-12">
                                        <h5 class="detailsHeading" >Experience</h5>
                                    </div>
                                    <div class="col-md-12 col-xs-12">
                                        <span class="">Chief Executive Officer & Co-Founder</span> :<span> Cogmac Research </span> </div>
                                        <div class="col-md-12 col-xs-12"> <span class="">Former Research Engineer </span> :<span> IBM Research India</span> </div>
                                            <div class="col-md-12 col-xs-12"> <span class=""> Software Development Engineer </span> :<span> Citrix Research & Development</span> </div>
                                                <div class="col-md-12 col-xs-12"> <span class=""> Software Development Engineer </span> :<span>Mahindra Satyam</span>
                                    </div>
                                </div>
                            </div>
                                <div class="detailsWrapper">
                                    <div class="row ">
                                        <div class="col-md-12 col-xs-12">
                                            <h5 class="detailsHeading" >Interests</h5>
                                        </div>
                                        <div class="col-md-12 col-xs-12"> <span class="">Machine Learning   </span>  </div>
                                        <div class="col-md-12 col-xs-12"> <span class=""> Stochastic Modeling </span> </div>
                                        <div class="col-md-12 col-xs-12"> <span class=""> Computer Networks</span>
                                        </div>
                                    </div>
                                </div>
                                    <div class="detailsWrapper">
                                        <div class="row ">
                                            <div class="col-md-12 col-xs-12">
                                                <h5 class="detailsHeading" >Academia</h5>
                                            </div>
                                            <div class="col-md-12 col-xs-12"> <span class="">Master of Engineering (Computer Science)</span>  </div>
                                            </div>
                                        </div>
                    </div>
                    </div>
                        <div class="col-xs-4 col-md-4 contactDetails">
                        <h3 class="text-cente">Contact Details</h3>
                            <div class="detailsWrapper">
                                <div class="row ">
                                    <div class="col-md-12 col-xs-12">
                                        <h5 class="detailsHeading" >Phone Number</h5>
                                    </div>
                                    <div class="col-md-12 col-xs-12"> <span class="">+91 1234567890

                </span>  </div>
                                </div>
                            </div>
                            <div class="detailsWrapper">
                                <div class="row ">
                                    <div class="col-md-12 col-xs-12">
                                        <h5 class="detailsHeading" >Email</h5>
                                    </div>
                                    <div class="col-md-12 col-xs-12"> <span class="">rajendu@cogmac.com</span>  </div>
                                </div>
                            </div>
                            <div class="detailsWrapper">
                                <div class="row ">
                                    <div class="col-md-12 col-xs-12">
                                        <h5 class="detailsHeading" >Social Profiles

                                        </h5>
                                    </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
                </section>
                }
                <section class="aboutus">
                <div class="container">
                    <div class="row profile-list">
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>


                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>

                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>

                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                        <div onClick={(e)=>this.sideBarClickHandler(true)} class="col-md-2 col-xs-12 item">
                            <figure>
                                <img src="images/default-avatar.png"/>
                            </figure>
                            <h4 class="text-center">Rajendu Mitra</h4>
                            <p class="text-center">CEO & Co-founder</p>
                        </div>
                    </div>
                </div>
                </section>

            </div>
        )
    }
}

export default About;