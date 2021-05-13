import Admin from './pages/admin';
import AddVideo from './pages/add-video';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AdminHeader from './Component/admin-header';
import AdminDelete from './pages/admin-delete'
import AddEvent from './pages/add-event';


function App() {

  
  return (
    <BrowserRouter>
   
      <AdminHeader/>
     
        <div className="clearfix"></div>
        <Switch>
          <Route exact path="/" component={Admin}></Route>
          <Route path="/delete-contain-admin" component={AdminDelete}></Route>
          <Route path="/add-video" component={AddVideo}></Route>
          <Route path="/add-image" component={AddEvent}></Route>
          <Route path="/add-event" component={AddVideo}></Route>
          <Route path="/post-article" component={AddEvent}></Route>
        </Switch>
    </BrowserRouter>
  );
}




export default App;
