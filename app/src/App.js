import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Nav from './components/nav/Nav';
import Main from './components/main/Main';


class App extends Component {
    render() {
        return (
            <div className='row app-main'>
                <div className='col-3 nav-col'>
                    <Nav />
                </div>
                <Route exact path='/' render={() => (
                    <div className='col'>
                        <Main />
                    </div>
                )} />
            </div>
        );
    }
}

export default App;
