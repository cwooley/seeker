import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Profile from './pages/Profile'


export default class Routes extends React.Component{
   render(){
     return(
       <Router>
         <div>
           <Route exact path={'/'} render={() => (
              //Check for JWT and render Main or login
                !!localStorage.jwt ? (
                  <Redirect to={'/main'} />
                ) : (
                  <Login />
                )
              )} />
            <Route path="/main" render={() => <Main />} />
            <Route path="/profile" render={() => <Profile />} />
         </div>
       </Router>
     )
   }
 }
