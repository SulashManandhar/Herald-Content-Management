import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/admin.css';

    const body = {
    } 
export default class Admin extends Component {
  
    
    render() {
        return (
           <>
            <div className="admin-main-container  clearfix">    
                <div className="admin-sub-container ">           
                    <Link to="/add-video">
                        <h2>Add a video</h2>
                    </Link>
                </div>
            
                <div className="admin-sub-container  ">
                    <Link to="/add-image">
                        <h2>Add an image</h2>
                    </Link>
                </div>
                
                <div className="admin-sub-container ">
                    <Link to="/add-event">
                        <h2>Announce an event</h2>
                    </Link>
                </div>
                
                <div className="admin-sub-container">
                    <Link to="/post-article">
                        <h2>Post an article</h2>
                    </Link>
                </div>

            </div>
           </>
        )
    }
}
