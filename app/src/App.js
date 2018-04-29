import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Category from './components/category/Category';
import * as Api from './utils/api';

class App extends Component {

    componentDidMount() {
        Api.getAllPosts().then(posts => console.log('all : ', posts))
    }

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
                    <div className='col react-category'>
                        <Category
                            category='react'
                        />
                    </div>
                )} />
                <Route exact path='/redux' render={() => (
                    <div className='col redux-category'>
                        <Category
                            category='redux'
                        />
                    </div>
                )} />
                <Route exact path='/udacity' render={() => (
                    <div className='col udacity-category'>
                        <Category
                            category='udacity'
                        />
                    </div>
                )} />
                <Route exact path='/node' render={() => (
                    <div className='col node-category'>
                        <Category
                            category='node'
                        />
                    </div>
                )} />
            </div>
        );
    }
}

export default App;
