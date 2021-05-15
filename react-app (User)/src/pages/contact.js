import React, { Component } from 'react'
import '../stylesheet/contact.css'
import axios from 'axios';


export default class Contact extends Component {
    constructor(props){
        super(props);
        // this.addData=this.addData.bind(this);
        this.state={
            success:'',
            error:''
        }
    }

    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "https://code.iconify.design/1/1.0.7/iconify.min.js";
        script.async = true;
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
        document.body.appendChild(script);
    }

    submission= event =>{
        event.preventDefault();
        axios.post("http://localhost:5000/contact",{
            name:document.getElementById('submitName').value,
            email:document.getElementById('submitEmail').value,
            subject:document.getElementById('submitSubject').value,
            enquire:document.getElementById('submitEnquire').value,
        })
        .then(response=>{
            this.setState({
                success:"Successfully sent request"
            })
            
            console.log(this.state.success);
        })
        .catch(error=>{
            this.setState({
                error:"Error while uploading the data",
            })
            console.log(this.state.error)
        })
        event.target.reset();
    }
    render() {
        return (  
            <div className="contact-wrap">
                <div className="contact-in">
                    <h1>Contact Info</h1>
                    <h2><i className="fa fa-phone" aria-hidden="true"></i> Phone</h2>
                    <p>9801022637, 01-4010120, 01-4010121</p>
                    <h2><i className="fa fa-envelope" aria-hidden="true"></i> Email</h2>
                    <p>info@heraldcollege.edu.np</p>
                    <h2><i className="fa fa-map-marker" aria-hidden="true"></i> Address</h2>
                    <p>Bhagawati Marg, Kathmandu, Nepal</p>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
			    </div>
                <div className="contact-in" onSubmit={this.submission}>
                    <form action="#">
                        <h1>Enquire Now</h1>
                        <input type="text" placeholder="Full Name..." id="submitName" className="contact-in-input" required/>
                        <input type="email" placeholder="Email..." id="submitEmail" className="contact-in-input" required/>
                        <input type="text" placeholder="Subject..." id="submitSubject" className="contact-in-input" required/>
                        <input type="text" placeholder="Enquire..." id="submitEnquire" className="contact-in-input" required/>
                        <input type="submit" value="SUBMIT" className="contact-in-btn"/>
                    </form>
                </div>
		    </div>
            
            
        )
    }
   
}
