import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheet/index.css'


export default class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/index-contain')
        .then(res => {
            this.setState({
                data: res.data
            })
        })
        .catch(error=>{
            console.log("Error!!!");
        })
    }
    render() {
        return (
            <>
                <div id="hero-img">
                    <img src="../images/hero-img1.png" alt="hero-img" width="100%" height="auto"/>
                </div>
                <div className="main-wrapper clearfix">
                    {this.state.data.map(item=>(
                        <div className="container">
                            <div class="img-container clearfix">
                                <img src={item.image} alt="demo-img"/>
                            </div>
                            <div className="text-container clearfix">
                                <h1>{item.heading}</h1>
                                <p>{item.paragraph}</p>
                            </div>
                    
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
