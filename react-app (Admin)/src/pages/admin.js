import React, { Component } from 'react'
import '../stylesheet/admin.css';
import { Link } from 'react-router-dom';

export default class Admin extends Component {
    render() {
        return (
           <>
            <div className="main-container">
                <h1>Welcome to Admin Page.</h1>
                <hr/>

                <div className="sub-container">           
                    <Link to="add-video">
                        <h2>Add a video</h2>
                    </Link>
                </div>
            
                <div className="sub-container">
                    <a href="#">
                        <h2>Add an image</h2>
                    </a>
                </div>
                
                <div className="sub-container">
                    <a href="#">
                        <h2>Announce an event</h2>
                    </a>
                </div>
                
                <div className="sub-container">
                    <a href="#">
                        <h2>Post an article</h2>
                    </a>
                </div>

            </div>
           </>
        )
    }
}
