import React, { Component } from 'react'
import Index from './pages/index'
import WatchUs from './pages/watch-us'
import EventArticle from './pages/event-article'
import Contact from './pages/contact'
import ViewUs from './pages/view-us'
import Footer from './Component/footer'
import Header from './Component/header'
import { BrowserRouter, Switch, Route} from 'react-router-dom';



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path ="/" component={Index}></Route>
          <Route  path ="/watch-us" component={WatchUs}></Route>
          <Route  path ="/view-us" component={ViewUs}></Route>
          <Route  path ="/event-article" component={EventArticle}></Route>
          <Route  path ="/contact" component={Contact}></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    )
  }
}
