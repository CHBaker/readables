import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import NewPost from '../new_post/NewPost';

class Nav extends Component {

    state = {
        newPostModal: false
    }

    closeNewPostModal = () => {
        this.setState({ newPostModal: false });
    }

    render() {
        return (
            <div className='nav'>
                <div className='container'>
                    <div className='row menu-header'>
                        Threads | <Link to='/'>Home</Link>
                    </div>
                    <hr />
                    <div className='container menu-options-row'>
                        <Link to='/react' className='row menu-option'>
                            React
                        </Link>
                        <Link to='/redux' className='row menu-option'>
                            Redux
                        </Link>
                        <Link to='/udacity' className='row menu-option'>
                            Udacity
                        </Link>
                        <Link to='/node' className='row menu-option'>
                            Node
                        </Link>
                    </div>
                    <div className='new-post-row'>
                        <button
                            onClick={() => this.setState({ newPostModal: true })}
                            className='new-post-button'
                        >
                            New Post
                        </button>
                        {
                            this.state.newPostModal &&
                            <NewPost
                                onGetPosts={() => {
                                    this.getPosts()
                                }}

                                closeModal={this.closeNewPostModal}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
