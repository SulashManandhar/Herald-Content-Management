import React, { Component } from 'react'
import '../stylesheet/event-article.css';
import axios from 'axios';

const textCenter={
    textAlign:'center',
}

export default class EventArticle extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/event-and-article')
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
            <div>
                <div className="event-hero-img">
                    <img src="../images/Herald_College_3.jpg" width="100%" alt="hero-img"/>
                </div>
                {this.state.data.map(item=>(
                      <div className="event-column">
                      <div class="event-title">
                          <h2 className="text-center">{item.title}</h2>
                          <span>{item.type}</span>
                      </div>

                      <p>{item.line1}</p>
                      <p>{item.line2}</p>
                      <p>{item.line3}</p>
                      <p>{item.line4}</p>
                      <p>{item.line5}</p>
                  </div>
                ))}
            </div>
        )
    }
}
