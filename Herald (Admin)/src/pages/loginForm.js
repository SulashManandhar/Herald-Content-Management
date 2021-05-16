import React,{ useState } from 'react'
import '../stylesheet/login.css'

function LoginForm({Login, error }) {
    const [details,setDetails]= useState({email:"",password:""});


    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }
    const body={
            marginLeft:'400px'
        
    }
    return (
       <div className="body">
            <form onSubmit={submitHandler}>
                <div className="login-main-container">
                    <div className="login-header">
                        <span>Herald College Admin</span>
                    </div>

                    <div>
                        <input type="text" name="email" id="login-email-input" className="login-input-box" placeholder="Email....." required onChange={e => setDetails({...details,email:e.target.value})} value={details.email}/>
                    </div>

                    <div>
                        <input type="password" name="password" id="login-password-input" className="login-input-box" placeholder="Password...." required onChange={e => setDetails({...details,password:e.target.value})} value={details.password}/>
                    </div>

                    <div id="login-button-container">
                        <input type="submit" value="Login"/>
                    </div>
                </div>
            </form>

       </div>
    )
}

export default LoginForm
