import React, {useState} from 'react'
import Admin from './pages/admin';
import AddVideo from './Component/add-component/add-video';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AdminHeader from './Component/admin-header';
import AdminDelete from './pages/admin-delete'
import AddEvent from './Component/add-component/add-event';
import AddImage from './Component/add-component/add-image';
import AddArticle from './Component/add-component/add-article';
import DeleteVideo from './Component/delete-component/delete-video';
import DeleteImage from './Component/delete-component/delete-image';
import DeleteArticle from './Component/delete-component/delete-article';
import DeleteEvent from './Component/delete-component/delete-event';  
import LoginForm from './pages/loginForm'


function App() {

  const adminUser = {
    email:"admin@admin.com",
    password:"password",
  }

 

  const [user,setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");

  const Login = details =>{
    console.log(details);
    if(details.email==adminUser.email && details.password==adminUser.password){
      console.log("Logged In");
      setUser({
        email:details.email
      })
      
    }else{
      console.log("Error while logging in");
      setError("Error while logging, either email or password is wrong")
      alert(setError  );
      window.location.reload();
     
    }
  }

  const Logout = () =>{
    console.log("Log out");
    setUser({email:"",password:""})
  }
  return (
    <>
    
        {(user.email != "")?(
          
         <BrowserRouter>
          <AdminHeader/>
          <div className="clearfix"></div>
            <Switch>
              <Route exact path="/" component={Admin}></Route>
              <Route path="/delete-contain-admin" component={AdminDelete}></Route>
              {/* add route  */}
              <Route path="/add-video" component={AddVideo}></Route>
              <Route path="/add-image" component={AddImage}></Route>
              <Route path="/add-event" component={AddEvent}></Route>
              <Route path="/post-article" component={AddArticle}></Route>
              {/* delete route  */}
              <Route path="/delete-video" component={DeleteVideo}></Route>
              <Route path="/delete-image" component={DeleteImage}></Route>
              <Route path="/delete-article" component={DeleteArticle}></Route>
              <Route path="/delete-event" component={DeleteEvent}></Route>
             </Switch>
          </BrowserRouter>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
     
    </>
  );
}




export default App;
