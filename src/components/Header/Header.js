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
                            <Link to='/'>
                                <img className="logo" src="images/Logo Cogmac-white textNormal.png" alt="logo" />
                            </Link>
                        </div>
                        <ul className="nav right">
                            <li>
                                <a href="#">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Research
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact
                                </a>
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
                                <Link to="/" >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/" >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/" >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/" >
                                    services
                                </Link>
                            </li>
                            <li>
                                <Link to="/" >
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