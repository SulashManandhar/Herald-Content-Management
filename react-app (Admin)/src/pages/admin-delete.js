import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/admin.css';

    const body = {
    } 
export default class AdminDelete extends Component {
  
    
    render() {
        return (
           <>
            <div className="admin-main-container  clearfix">    
                <div className="admin-sub-container ">           
                    <Link to="/delete-video">
                        <h2>Delete a video</h2>
                    </Link>
                </div>
            
                <div className="admin-sub-container  ">
                    <Link to="/delete-image">
                        <h2>Delete an image</h2>
                    </Link>
                </div>
                
                <div className="admin-sub-container ">
                    <Link to="/delete-event">
                        <h2>Delete an event</h2>
                    </Link>
                </div>
                
                <div className="admin-sub-container">
                    <Link to="/delete-article">
                        <h2>Delete an article</h2>
                    </Link>
                </div>

            </div>
           </>
        )
    }
}
