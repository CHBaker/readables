import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './category.css';

import * as capitalize from '../../utils/capitalize.js';

class Category extends Component {

    state = {
        category: ''
    }

    componentWillMount() {
        this.setState({ category: this.props.category })
    }

    render() {

        const { category } = this.state;
        const { allPosts } = this.props;

        return (
            <div className='category-wrapper'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col title'>
                        { capitalize.capitalize(category) }
                    </div>
                    <div className='col'></div>
                </div>
                <div className='posts-container'>
                    {
                        allPosts[category].map((post) => (
                            <div className='mx-auto d-block content-row' key={ post.id }>
                                <div className='post'>
                                    <div className='row'>
                                        <div className='post-title'>
                                            { post.title }
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='post-body'>
                                            { post.body }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allPosts: state.allPosts
});

export default withRouter(connect(mapStateToProps)(Category));
