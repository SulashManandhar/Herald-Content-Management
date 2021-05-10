import React, { Component } from 'react';
import '../stylesheet/footer.css';

class Footer extends Component {
    render() {
        return (
            <>
            <footer>
                <div class="footer">
                    <div class="footer-text">
                        
                            <p>
                                Herald College Kathmandu<br/>
                                Naxal,Kathmandu<br/>
                                Phone: 9801022637, 01-4010120 , 01-4010121<br/>
                                Email:info@heraldcollege.edu.np
                            </p>
                </div>
                <div class="social-container">
                <a href="https://www.facebook.com/heraldcollegektm"><img src={process.env.PUBLIC_URL+"../images/facebook-icon.png"} alt="facebook-icon"/></a>
                <a href="https://www.instagram.com/heraldcollegektm/"><img src={process.env.PUBLIC_URL+"../images/instagram.jpg"} alt="instagram-icon"/></a>
                <a href="#"><img src={process.env.PUBLIC_URL+"../images/twitter.png" } alt="twitter-icon"/></a>

                </div>
                    <hr/>
                    <span><b>Copyright&copy;2021 Herald College Kathmandu</b></span>
                </div>
             </footer>
          
         </>
        )
    }
}
export default Footer;
