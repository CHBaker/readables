import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Category from './components/category/Category';


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
                <Route exact path='/react' render={() => (
                    <div className='col'>
                        <Category title='React' />
                    </div>
                )} />
                <Route exact path='/redux' render={() => (
                    <div className='col'>
                        <Category title='Redux' />
                    </div>
                )} />
                <Route exact path='/udacity' render={() => (
                    <div className='col'>
                        <Category title='Udacity' />
                    </div>
                )} />
                <Route exact path='/Node' render={() => (
                    <div className='col'>
                        <Category title='Node' />
                    </div>
                )} />
            </div>
        );
    }
}

export default App;
