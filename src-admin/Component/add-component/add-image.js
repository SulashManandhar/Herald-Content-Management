import React, { Component } from 'react';
import '../../stylesheet/add-image.css';
import axios from 'axios';

const body={
    maxWidth:'550px',
}

export default class AddImage extends Component {
    constructor(props){
        super(props);
        this.addData=this.addData.bind(this);
    }

    addData=e=>{
         e.preventDefault();
        axios.post("http://localhost:5000/view-us",{
            image:document.getElementById('file-input').value,
            heading:document.getElementById('title-input').value,
            link:document.getElementById('link-input').value,
            description:document.getElementById('desc-input').value,
        }).then(res=>{
            console.log(res);
        });
        e.target.reset();
    }
    render() {
        return (
            <div className={body}>
            <div className="image-main-container" >
            <form action="#" onSubmit={this.addData}>
               <div className="image-header">
                   <span>Herald College Admin</span>
                   <hr/>
                   <span>Add an image</span>
               </div>
              
       
       
               <div className="image-sub-container">
                   <div className="image-label-container">
                       <label>Image(jpg):</label>
                   </div>
                   <div className="image-input-container">
                       <input type="file" name="file" id="file-input" className="image-input-box" accept=".jpg,.png"/>
                   </div>
               </div>

      
               <div className="image-sub-container">
                   <div className="image-label-container">
                       <label for="Title:">Title:</label>
                   </div>
                   <div className="image-input-container">
                       <input type="text" name="title" id="title-input" className="image-input-box"/>
                   </div>       
               </div>

               <div className="image-sub-container" id="button-container">
                    <button id="btn" >Add an image</button>
                </div>
        
                </form>
                </div>
            </div>
        )
    }
}
