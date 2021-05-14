import React, { Component } from 'react';
import '../../stylesheet/add-article.css';
import axios from 'axios';

const body={
    maxWidth:'550px',
}

export default class AddArticle extends Component {
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
             <div className="article-main-container" >
             <form action="#" onSubmit={this.addData}>
                <div className="article-header">
                    <span>Herald College Admin</span>
                    <hr/>
                    <span>Add an article</span>
                </div>
               
        
        
                <div className="article-sub-container">
                    <div className="article-label-container">
                        <label>Image(jpg):</label>
                    </div>
                    <div className="article-input-container">
                        <input type="file" name="file" id="file-input" className="article-input-box" accept=".jpg,.png"/>
                    </div>
                </div>

       
                <div className="article-sub-container">
                    <div className="article-label-container">
                        <label for="Title:">Title:</label>
                    </div>
                    <div className="article-input-container">
                        <input type="text" name="title" id="title-input" className="article-input-box"/>
                    </div>       
                </div>

     
                <div className="article-sub-container">
                    <div className="article-label-container">
                        <label for="description">Description:</label>
                    </div>
                    <div className="article-input-container">
                        <input type="text" name="description" id="desc-input" className="article-input-box"/>
                    </div>  

                </div>

    
                <div className="article-sub-container" id="button-container">
                    <button id="btn" >Add an article</button>
                </div>
        
                </form>
            </div>
            </div>
        )
    }
}

