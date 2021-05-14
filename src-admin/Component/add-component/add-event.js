import React, { Component } from 'react';
import '../../stylesheet/add-event.css';
import axios from 'axios';

const body={
    maxWidth: '550px',
}

export default class AddEvent extends Component {
    constructor(props){
        super(props);
        this.addData=this.addData.bind(this);
    }

    addData=e=>{
         e.preventDefault();
        axios.post("http://localhost:5000/event-and-article",{
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
             <div className="event-main-container" >
             <form action="#" onSubmit={this.addData}>
                <div className="event-header">
                    <span>Herald College Admin</span>
                    <hr/>
                    <span>Announce an event</span>
                </div>
               
        
        
                <div className="event-sub-container">
                    <div className="event-label-container">
                        <label>Image(jpg):</label>
                    </div>
                    <div className="event-input-container">
                        <input type="file" name="file" id="file-input" className="event-input-box" accept=".jpg,.png"/>
                    </div>
                </div>

       
                <div className="event-sub-container">
                    <div className="event-label-container">
                        <label for="Title:">Title:</label>
                    </div>
                    <div className="event-input-container">
                        <input type="text" name="title" id="title-input" className="event-input-box"/>
                    </div>       
                </div>

     
                <div className="event-sub-container">
                    <div className="event-label-container">
                        <label for="description">Description:</label>
                    </div>
                    <div className="event-input-container">
                        <input type="text" name="description" id="desc-input" className="event-input-box"/>
                    </div>  

                </div>

    
                <div className="event-sub-container" id="button-container">
                    <button id="btn" >Announce an event</button>
                </div>
        
                </form>
            </div>
            </div>
        )
    }
}