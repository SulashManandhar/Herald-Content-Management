import React, { Component } from 'react';
import '../stylesheet/add-image.css';

export default class AddVideo extends Component {
    render() {
        return (
            <>
             <div className="main-container">
                <div className="header">
                    <span>Herald College Admin</span>
                    <hr/>
                    <span>Add an image</span>
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

    
                <div className="sub-container" id="button-container">
                    <button id="btn">Add an image</button>
                </div>
        
        
            </div>
            </>
        )
    }
}
