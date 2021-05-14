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


function App() {

  return (
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
          <Route path="/delete-contain-admin/delete-video" component={DeleteVideo}></Route>
          <Route path="/delete-image" component={DeleteImage}></Route>
          <Route path="/delete-article" component={DeleteArticle}></Route>
          <Route path="/delete-event" component={DeleteEvent}></Route>


        </Switch>
    </BrowserRouter>
  );
}




export default App;
