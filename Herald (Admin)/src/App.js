import Admin from './pages/admin';
import AddVideo from './pages/add-video';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddEvent from './pages/add-event';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Admin}></Route>
          <Route  path='/' component={AddVideo}></Route> 
          <Route  path='/' component={AddVideo}></Route>
          <Route  path='/add-event' component={AddEvent}></Route>
          <Route  path='/add-event' component={AddEvent}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}




export default App;
