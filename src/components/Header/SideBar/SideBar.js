import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

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


    render(){
        return(
        <div className="side-bar">
            <span className="close">
            X
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
    )
    }
}

export default SideBar;