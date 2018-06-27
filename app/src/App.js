import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Category from './components/category/Category';
import { fetchPosts } from './actions/index'
import PostDetail from './components/postDetail/PostDetail';

class App extends Component {

    state = {
        posts: []
    }

    componentWillMount() {
        this.getPosts();
    }

    getPosts() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className='row app-main'>
                <div className='col-3 nav-col'>
                    <Nav
                        onGetPosts={() => {
                            this.getPosts()
                        }}
                    />
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
                <Route exact path='/:category/:postId' render={( {match }) => (
                    <div className='col post-detail'>
                        <PostDetail
                            category={match.params.category}
                            postId={match.params.postId}
                        />
                    </div>
                )} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

const mapStateToProps = state => ({
    posts: state.allPosts.posts
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
