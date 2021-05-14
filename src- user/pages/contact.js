import React, { Component } from 'react'
import '../stylesheet/contact.css';
import axios from 'axios';
export default class Contact extends Component {

    render() {
        return (
         <>
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
			<div className="contact-in">
				<h1>Enquire Now</h1>
				
					<input type="text" placeholder="First Name" className="contact-in-input"/>
					<input type="text" placeholder="Last Name" className="contact-in-input"/>
					<input type="text" placeholder="Email" className="contact-in-input"/>
					<input type="text" placeholder="Subject" className="contact-in-input"/>
					<input type="submit" value="SUBMIT" className="contact-in-btn"/>
				
			</div>
			<div className="contact-in">
				{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.169115730583!2d85.32856061515037!3d27.71206428278986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1910158959fb%3A0xc274a7c179f20d1a!2sHerald%20College%20Kathmandu%20New%20Facility!5e0!3m2!1sen!2snp!4v1617804751493!5m2!1sen!2snp" width="1000" height="1050" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
			</div>
		</div>
         </>
        )
    }
}
