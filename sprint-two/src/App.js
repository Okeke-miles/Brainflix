import './App.scss';
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom"
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import Upload from "../src/components/Upload/Upload";


// Using proper React best practices, I have made my App.js clean. It is used for routing purposes only. Most of my logic has been placed in the component files to make for an easier read. 

// My Header Component is placed outside the router as I want it to appear on every page.

//I have three routes I am rendering. First to homepage(with BMX video). Then to homepage but with a video id for a selected video. Then to my upload component.

class App extends Component{
 
  render(){
 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path="/upload" component={Upload}/>

          <Route exact path="/video/:videoId" component={VideoList}/>

          <Route exact path="/" component={withRouter (VideoList)}/>  

        </Switch>
      </BrowserRouter>
    </div>
  )}
}

export default App;
