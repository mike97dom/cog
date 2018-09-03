import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="strip">
                        <div className="logo-wrap left">
                            <a href="#">
                                <img className="logo" src="images/Logo Cogmac-white textNormal.png" alt="logo" />
                            </a>
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
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;