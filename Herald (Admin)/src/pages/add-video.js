import React, { Component } from 'react';
import '../stylesheet/add-video.css';
import axios from 'axios';

export default class AddVideo extends Component {
    constructor(props){
        super(props);
        this.addData=this.addData.bind(this);
        this.state={
            success:'',
            error:''
        }
   
    }
    state={
        selectedFile:null
    }

    fileSelectedHandler = event =>{
        this.setState({
            selectedFile:event.target.files[0]
        })
    }
        addData=e=>{
            e.preventDefault();
            axios.post("http://localhost:5000/watch-us",{
                image:this.state.selectedFile,
                heading:document.getElementById('title-input').value,
                link:document.getElementById('link-input').value,
                description:document.getElementById('desc-input').value,
            }).then(res=>{
                this.setState({
                    success:"Successfully added data"
                })
                // .catch(error=>{
                //     this.setState({
                //         error:"Error adding data"
                //     })
                // });
            });
            e.target.reset();
        }
    render() {
        return (
            <>
             <div className="video-main-container" onSubmit={this.addData}>
             <form action="#">
                <div className="video-header">
                    <span>Herald College Admin</span>
                    <hr/>
                    <span>Add a video</span>
                </div>
               
        
        
                <div className="video-sub-container">
                    <div className="video-label-container">
                        <label>Image(jpg):</label>
                    </div>
                    <div className="video-input-container">
                        <input type="file" name="file" id="file-input" onCLick={this.fileSelectedHandler} className="video-input-box" accept=".jpg,.png"/>
                    </div>
                </div>

       
                <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="Title:">Title:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="text" name="title" id="title-input" className="video-input-box"/>
                    </div>       
                </div>

       
                <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="Link">Link:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="link" name="link" id="link-input" className="video-input-box"/>
                    </div>     
                </div>

     
                <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="description">Description:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="text" name="description" id="desc-input" className="video-input-box"/>
                    </div>  

                </div>

    
                <div className="video-sub-container" id="button-container">
                    <button id="btn">Add a video</button>
                </div>
        
                </form>
            </div>
            </>
        )
    }
}
