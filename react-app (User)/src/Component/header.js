import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/header.css';

class Header extends Component {
    render() {
        return (
            <>
            <header>
                <div id="page-logo">
                    <img src={process.env.PUBLIC_URL+ "../images/herald-logo.png"} alt="herald-college-logo" width="15%" height="auto"/>
                </div>
                <div className="clearfix">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/watch-us">Watch Us</Link></li>
                                <li><Link to="/view-us">View Us</Link></li>
                                <li><Link to="/event-article">Events and articles</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                </div>
            </header>
          
            </>
        )
    }
}
export default Header;
