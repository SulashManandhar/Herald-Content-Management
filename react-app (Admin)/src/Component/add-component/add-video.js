import React, { Component } from 'react';
import '../../stylesheet/add-video.css';
import axios from 'axios';

const body={
    maxWidth:'550px',
}

export default class AddVideo extends Component {
    constructor(props){
        super(props);
        this.addData=this.addData.bind(this);
    }

    addData=e=>{
         e.preventDefault();
        axios.post("http://localhost:5000/watch-us",{
            image:document.getElementById('file-input').value,
            heading:document.getElementById('title-input').value,
            link:document.getElementById('link-input').value,
            description:document.getElementById('desc-input').value,
        }).then(res=>{
            console.log(res);
        });
        e.target.reset();
        alert("Successfully added the data");
    }
    render() {
        return (
            <div className={body}>
             <div className="video-main-container" >
             <form action="#" onSubmit={this.addData}>
                <div className="video-header">
                    <span>Herald College Admin</span>
                    <hr/>
                    <span>Add a video</span>
                </div>
               
        
                {/* image input  */}
                <div className="video-sub-container">
                    <div className="video-label-container">
                        <label>Image(jpg):</label>
                    </div>
                    <div className="video-input-container">
                        <input type="file" name="file" id="file-input" className="video-input-box" accept=".jpg,.png"/>
                    </div>
                </div>

                {/* title of image  */}
                <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="Title:">Title:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="text" name="title" id="title-input" className="video-input-box"/>
                    </div>       
                </div>

                {/* link input  */}
                <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="Link">Link:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="link" name="link" id="link-input" className="video-input-box"/>
                    </div>     
                </div>

     
                {/* description  */}
                <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="description">Description:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="text" name="description" id="desc-input" className="video-input-box"/>
                    </div>  
                </div>

                {/* button input  */}
                <div className="video-sub-container" id="button-container">
                    <button id="btn" >Add a video</button>
                </div>
        
                </form>
            </div>
            </div>
        )
    }
}
