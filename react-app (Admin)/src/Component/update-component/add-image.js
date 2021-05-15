import React, { Component } from 'react'
import axios from 'axios'
import '../../stylesheet/add-image.css'


const body={
    maxWidth:'550px',
    height:'auto'
}

export default class AddImage extends Component {
    constructor(props){
        super(props);
        this.addData=this.addData.bind(this);
    }

    addData=event=>{
         event.preventDefault();
        axios.post("http://localhost:5000/view-us",{
            image:document.getElementById('file-input').value,
            description:document.getElementById('desc-input').value,
        }).then(res=>{
            console.log(res);
        });
        event.target.reset();
        alert("Successfully added the data");
        window.location.reload();
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
              
       
            {/* image input  */}
               <div className="image-sub-container">
                   <div className="image-label-container">
                       <label>Image(jpg):</label>
                   </div>
                   <div className="image-input-container">
                       <input type="file" name="file" id="file-input" className="image-input-box" accept=".jpg,.png"/>
                   </div>
               </div>

            
            {/* description  */}
               <div className="image-sub-container">
                   <div className="image-label-container">
                       <label for="Description">Description:</label>
                   </div>
                   <div className="image-input-container">
                       <input type="text" name="description" id="desc-input" className="image-input-box"/>
                   </div>       
               </div>

                {/* button input  */}
               <div className="image-sub-container" id="button-container">
                    <button id="btn" >Add an image</button>
                </div>
        
                </form>
                </div>
            </div>
        )
    }
}
