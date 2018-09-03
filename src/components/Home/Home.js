import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div className="home-page">
                <div className="banner-wrap">
                    <img className="banner" src="images/welding1Normal.png" alt="banner" />
                    <div className="container banner-info">
                            <h1>CogMac</h1>
                            <span>Machines With Cognition</span>
                            <span className="effect"></span>                            
                    </div>
                </div>
                <div className="explore">
                    <div className="research">
                        <div className="container">
                            <h2>RESEARCH area </h2>
                            <ul className="list">
                                <li>
                                    <a href="/">
                                        <img src="images/aiNormal.png" alt="art" />
                                    </a>
                                    <span className="label">
                                        Artificial Intelligence
                                    </span>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="images/automationNormal.png" alt="auto" />
                                    </a>
                                    <span className="label">
                                        Generalized Automation & Monitoring
                                    </span>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="images/dataanalNormal.png" alt="auto" />
                                    </a>
                                    <span className="label">
                                        Data Analytics
                                    </span>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="images/embeddedNormal.png" alt="auto" />
                                    </a>
                                    <span className="label">
                                        Embedded Systems
                                    </span>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="images/languageNormal.png" alt="auto" />
                                    </a>
                                    <span className="label">
                                        Domain Specific Language
                                    </span>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="domain">
                        <div className="container">
                            <h2>domain</h2>
                            <ul className="list">
                                <li>
                                    <a href="/">
                                        <img src="images/financeNormal.png" alt="art" />
                                    </a>
                                    <span className="label">
                                        Finance
                                    </span>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="images/f&bNormal.png" alt="auto" />
                                    </a>
                                    <span className="label">
                                        Food & Beverages
                                    </span>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="images/healthcare copyNormal.png" alt="auto" />
                                    </a>
                                    <span className="label">
                                        Health Care
                                    </span>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="images/smartcityNormal.png" alt="auto" />
                                    </a>
                                    <span className="label">
                                        Smart City
                                    </span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="clients">
                            <div className="container">
                                <h2>Clients</h2>
                                <ul className="list">
                                <li><img src="images/adroidNormal.png" alt="clients" /></li>
                                <li><img src="images/cboarddehNormal.png" alt="clients" /></li>
                                <li><img src="images/cboardNormal.png" alt="clients" /></li>
                                <li><img src="images/starfinvestNormal.png" alt="clients" /></li>
                                <li><img src="images/divya-portfolio-logoNormal.png" alt="clients" /></li>
                                <li><img src="images/vee-mech-industries-logo-120x120Normal.png" alt="clients" /></li>
                                
                            </ul>
                            </div>
                            
                        </div>
                </div>
                
            </div>
        )
    }
}

export default Home;
