import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sidebarShow:false
        }
    }

    sideBarClickHandler = ()=>{
        this.setState({
            sidebarShow:!this.state.sidebarShow
        })
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="strip">
                        <div className="logo-wrap left">
                            <Link to='/home'>
                                <img className="logo" src="images/Logo Cogmac-white textNormal.png" alt="logo" />
                            </Link>
                        </div>
                        <ul className="nav right">
                            <li>
                                <Link to="/products">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                        <div onClick={(e)=>{this.sideBarClickHandler(e)}} className="side-bar-menu-button">
                        <i class="fa fa-bars"></i>
                        </div>
                    </div>
                    
                    
                </div>
                <div className={(this.state.sidebarShow===false)?"side-bar":"side-bar active"}>
                        <span onClick={(e)=>{this.sideBarClickHandler(e)}} className="close">
                            x
                        </span>
                        <ul>
                            <li>
                                <Link onClick={(e)=>{this.sideBarClickHandler(e)}} to="/home" >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link onClick={(e)=>{this.sideBarClickHandler(e)}} to="/about" >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link onClick={(e)=>{this.sideBarClickHandler(e)}} to="/products" >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link onClick={(e)=>{this.sideBarClickHandler(e)}} to="/services" >
                                    services
                                </Link>
                            </li>
                            <li>
                                <Link onClick={(e)=>{this.sideBarClickHandler(e)}} to="/finance">
                                    Finance
                                </Link>
                            </li>
                            <li>
                                <Link onClick={(e)=>{this.sideBarClickHandler(e)}} to="/" >
                                    Contact US
                                </Link>
                            </li>
                        </ul>
                    </div>
            </header>
        )
    }
}

export default Header;