import React, { Component } from 'react';
import '../stylesheet/add-video.css';

export default class AddVideo extends Component {
    render() {
        return (
            <>
             <div className="main-container">
                <div className="header">
                    <span>Herald College Admin</span>
                    <hr/>
                    <span>Add a video</span>
                </div>
        
        
                <div className="sub-container">
                    <div className="label-container">
                        <label>Image(jpg):</label>
                    </div>
                    <div className="input-container">
                        <input type="file" name="file" id="file-input" className="input-box" accept=".jpg,.png"/>
                    </div>
                </div>

       
                <div className="sub-container">
                    <div className="label-container">
                        <label for="Title">Title:</label>
                    </div>
                    <div className="input-container">
                        <input type="text" name="title" id="title-input" className="input-box"/>
                    </div>       
                </div>

       
                <div className="sub-container">
                    <div className="label-container">
                        <label for="Link">Link</label>
                    </div>
                    <div className="input-container">
                        <input type="text" name="link" id="link-input" className="input-box"/>
                    </div>     
                </div>

     
                <div className="sub-container">
                    <div className="label-container">
                        <label for="description">Description:</label>
                    </div>
                    <div className="input-container">
                        <input type="text" name="description" id="desc-input" className="input-box"/>
                    </div>  

                </div>

    
                <div className="sub-container" id="button-container">
                    <button id="btn">Add a video</button>
                </div>
        
        
            </div>
            </>
        )
    }
}
