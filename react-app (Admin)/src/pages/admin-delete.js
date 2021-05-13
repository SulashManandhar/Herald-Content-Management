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
                    <Link href="/add-video">
                        <h2>Delete a video</h2>
                    </Link>
                </div>
            
                <div className="admin-sub-container  ">
                    <Link href="/add-image">
                        <h2>Delete an image</h2>
                    </Link>
                </div>
                
                <div className="admin-sub-container ">
                    <Link href="/add-event">
                        <h2>DElete an event</h2>
                    </Link>
                </div>
                
                <div className="admin-sub-container">
                    <Link href="/post-article">
                        <h2>Delete an article</h2>
                    </Link>
                </div>

            </div>
           </>
        )
    }
}
