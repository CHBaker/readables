import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './category.css';
import { deletePost } from '../../actions/index';
import * as capitalize from '../../utils/capitalize.js';

class Category extends Component {

    state = {
        category: ''
    }

    componentWillMount() {
        this.setState({ category: this.props.category })
    }

    deletePost(post) {
        console.log(post);
        this.props.deletePost(post);
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
                                        <div className='col-2'></div>
                                        <div className='col post-title'>
                                            { post.title }
                                        </div>
                                        <div className="col-2 crud">
                                            by: { post.author }
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='post-body'>
                                            { post.body }
                                        </div>
                                    </div>
                                    <div className='row post-info'>
                                        <div className='col-1'></div>
                                        <div className='col vote-col'>
                                            <span className='vote'>
                                                &#9650;
                                            </span>
                                            <span className='vote'>
                                                &#9660;
                                            </span>
                                            <span className='votescore'>
                                                { post.voteScore }
                                                { !post.voteScore && 1 }
                                            </span>
                                        </div>
                                        <div className='col crud-col'>
                                            <span className='edit'>
                                                edit
                                            </span>
                                            |
                                            <span>
                                                <button
                                                    onClick={() => this.deletePost(post) }
                                                    className='delete'
                                                >
                                                    delete
                                                </button>
                                            </span>
                                        </div>
                                        <div className='col-1'></div>
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

const mapDispatchToProps = dispatch => ({
    deletePost: (post) => dispatch(deletePost(post))
});

const mapStateToProps = state => ({
    allPosts: state.allPosts
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
