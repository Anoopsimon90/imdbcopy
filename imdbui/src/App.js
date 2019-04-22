import React, { Component } from 'react';   
import NavBar from './components/navbar';   
import Home from "./components/home";


export default class App extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>    
            <NavBar/>
            <main className='container'>
            </main>
            </React.Fragment>

         );
    }
    }
