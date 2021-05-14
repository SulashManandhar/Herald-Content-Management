import React, { Component } from 'react'
import '../stylesheet/view-us.css';
import axios from 'axios';
export default class ViewUs extends Component {
  constructor(props){
    super(props);
    this.state={
        data:[],
    }
}
componentDidMount(){
    axios.get('http://localhost:5000/view-us')
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
         <div className="gallery-section">
      <div class="gallery-inner-width">
        <h1>Herald College Gallery</h1>
        <div className="gallery-border"></div>
        <div className="gallery">


        {this.state.data.map(item=>(
          <a href={item.image} className="image">
            <img src={item.image} alt={item.description}/>
          </a>
        ))}
         
        </div>
      </div>
    </div>
         </>
        )
    }
}
