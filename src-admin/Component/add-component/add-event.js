import React, { Component } from 'react';
import axios from 'axios'
import '../../stylesheet/add-video.css'

const body={
    maxWidth:'550px',
    
}

export default class AddEvent extends Component {
    constructor(props){
        super(props);
        this.addData=this.addData.bind(this);
    }

    addData=event=>{
         event.preventDefault();
        axios.post("http://localhost:5000/event-and-article",{
            title:document.getElementById("title-input").value,
            type:document.getElementById('type-input').value,
            line1:document.getElementById('line1-input').value,
            line2:document.getElementById('line2-input').value,
            line3:document.getElementById('line3-input').value,
            line4:document.getElementById('line4-input').value,
            line5:document.getElementById('line5-input').value
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
             <div className="video-main-container" >
             <form action="#" onSubmit={this.addData}>
                <div className="video-header">
                    <span>Herald College Admin</span>
                    <hr/>
                    <span>Add an article</span>
                </div>
               

                {/* title of title  */}
                <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="Title:">Title:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="text" name="title" id="title-input" className="video-input-box"/>
                    </div>       
                </div>

                {/* type type  */}
                <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="Type">Type:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="text" name="type" id="type-input" className="video-input-box"/>
                    </div>     
                </div>

     
                {/* Line1  */}
                <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="line1">Line 1:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="text" name="line1" id="line1-input" className="video-input-box"/>
                    </div>  
                </div>

                 {/* Line2  */}
                 <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="line2">Line 2:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="text" name="line2" id="line2-input" className="video-input-box"/>
                    </div>  
                </div>

                 {/* Line3  */}
                 <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="line3">Line 3:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="text" name="line3" id="line3-input" className="video-input-box"/>
                    </div>  
                </div>

                 {/* Line4  */}
                 <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="line4">Line 4:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="text" name="line4" id="line4-input" className="video-input-box"/>
                    </div>  
                </div>

                 {/* Line5 */}
                 <div className="video-sub-container">
                    <div className="video-label-container">
                        <label for="line5">Line 5:</label>
                    </div>
                    <div className="video-input-container">
                        <input type="text" name="line5" id="line5-input" className="video-input-box"/>
                    </div>  
                </div>

                {/* button input  */}
                <div className="video-sub-container" id="button-container">
                    <button id="btn" >Add a Event</button>
                </div>
        
                </form>
            </div>
            </div>
        )
    }
}
