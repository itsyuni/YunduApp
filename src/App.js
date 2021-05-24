import Home from './pages/Home';
import Search from './pages/Search';
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import User from './pages/User'
import Settings from './pages/Settings'
import SaveCookies from './pages/SaveCookies'
import Hide from './components/Hide.js';
import Header from './components/Header'

import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {Component} from 'react';
export default class App extends Component {
  constructor() {
    super()
    this.handleLoad = this.handleLoad.bind(this);
  }
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }
  handleLoad(){
    document.body.classList.remove('disableanimations');
  }
 render(){
   let theme = localStorage.getItem('theme');
 document.body.classList.add('disableanimations')
    if(theme === 'dark'){
      document.body.classList.add('darkmode');
  }
  else if(theme === 'light'){
      
  }
  else if(theme === 'auto'){
let prefferedTheme = getPrefferedTheme();
if(prefferedTheme === 'light'){

}
else if(prefferedTheme === 'dark'){
  document.body.classList.add('darkmode');
}
  }
  else{
      localStorage.setItem('theme','light');
  }
  return (
    <Router>
    <main>
    <Header/>
    <div style={{padding:'0 20px'}}>
      <Switch>
      <Route exact path="/">
            <Home login={isLoggedIn}/>
          </Route>
          <Route path="/me/:token" children={<SaveCookies/>}/>
          <Route path="/profile">
            <Profile login={isLoggedIn}/>
          </Route>
          <Route path="/settings" children={<Settings/>}/>
          <Route path="/@:username" children={<User login={isLoggedIn}/>}/>
          
          <Route path="/search/:school?/:classroom?" children={<Search login={isLoggedIn}/>}/>
          <Route path="*">
          <NotFound login={isLoggedIn}/>
          </Route>
      </Switch>
      </div>
      <Navbar/>
      </main>
    </Router>
  );
  }
}

function isLoggedIn(){
  return /*localStorage.getItem('logged') === 'true'*/true
}


function getPrefferedTheme(){
  let date = new Date();
  let hour = date.getHours();
          if((hour >= 17 && hour <= 23) || (hour >= 0 && hour <= 6)){
              return 'dark'
          }
          else{
              return 'light'
          }
      }