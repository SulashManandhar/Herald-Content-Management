import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheet/watch-us.css'


export default class WatchUs extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/watch-us')
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
        .catch(error=>{
            console.log("Error!!!");
        })
    }
    render() {
        return (
            <>
            {/* hero-video  */}
            <div className="video-container">
            <video width="1200px" controls>
                <source src="../video/Herald College TVC.mp4" type="video/mp4"/>
            </video>
            </div>

            <h1><u>More video about us..</u></h1>
            
            <div className="main-container clearfix">
               {this.state.data.map(item=>(
                   <div className="sub-container ">
                        <div className="img-container clearfix">
                            <img src={item.image} alt="Image not found" />
                        </div>
                        <div className="text-container clearfix">
                            <h2>{item.heading}</h2>
                            <a href={item.link}>{item.link}</a>
                            <p>Description:{item.description}</p>
                        </div>
                   </div>
               ))}
            </div>


           </>
        )
    }
}
