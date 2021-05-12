import Admin from './pages/admin';
import AddVideo from './pages/add-video';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Admin}></Route>
          <Route  path='/add-video' component={AddVideo}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
