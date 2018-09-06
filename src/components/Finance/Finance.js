import React from 'react';

class Finance extends React.Component{
    render(){
        return(
            <div className="finance-page page-wrapper">
                <div className="row no-margin">
                    <div className="col-md-12 col-sm-12 no-padding">
                        <h1 className="text-center content-heading">Finance</h1>
                    </div>
                </div>
                <div className="container">
                <div className="row financeTeam">
                    <div className="col-sm-12 col-md-6">
                        <p>We have developed multiple suites for automated or
                            algorithmic trading which is
                            currently running for National Stock Exchange of India and Bombay Stock Exchange.</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div>
                        <img src="images/financeTeam.png" alt=""/>
                        </div>
                    </div>
                </div>
                <section className="futureProduct">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <h2 className="text-center text-uppercase ">Futrue Product</h2>
                    </div>
                </div>
                <div className="row futureProductHeading">
                    <div className="col-sm-12 col-md-6">
                        <div className="futureProductHeadingWraper"><h3 className="checkBoxContainer"> <i className="checkBox"></i>Commodity Trading Platform</h3></div>
                        <div className="futureProductHeadingWraper"><h3 className="checkBoxContainer"> <i className="checkBox"></i>Currency Trading Platform</h3></div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="futureProductHeadingWraper"><h3 className="checkBoxContainer"> <i className="checkBox"></i>Financing Data Analysis</h3></div>
                        <div className="futureProductHeadingWraper"><h3 className="checkBoxContainer"> <i className="checkBox"></i>Retail Trading Platform</h3></div>
                    </div>
                </div>
                </section>
                <section className="serviceProduct">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <h2 className="text-center text-uppercase ">Services</h2>
                        </div>
                    </div>
                    <div className="row futureProductHeading">
                        <div className="col-sm-12 col-md-6">
                            <div className="futureProductHeadingWraper"><h3 className="checkBoxContainer"> <i className="checkBox"></i>Customized Trading systems</h3></div>
                            <div className="futureProductHeadingWraper"><h3 className="checkBoxContainer"> <i className="checkBox"></i>Network & Server optimization for low latency</h3></div>
                            <div className="futureProductHeadingWraper"><h3 className="checkBoxContainer"> <i className="checkBox"></i>Co-location management & maintenance services</h3></div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="futureProductHeadingWraper"><h3 className="checkBoxContainer"> <i className="checkBox"></i>Special HFT and Algotrading strategies</h3></div>
                            <div className="futureProductHeadingWraper"><h3 className="checkBoxContainer"> <i className="checkBox"></i>Tick by tick & other financial data analysis</h3></div>
                        </div>
                    </div>
                </section>
                <section className="clientsProduct">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <h2 className="text-center text-uppercase ">Clients</h2>
                        </div>
                    </div>
                </section>
                </div>

            </div>
        )
    }
}

export default Finance;