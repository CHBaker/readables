import React, { Component } from 'react'
import { connect } from 'react-redux';
import './post.css';
import { votePost } from '../../actions/index';
import { Link } from 'react-router-dom';

class Post extends Component {
    render() {

        const {
            post, openEditModal, deletePost,
            votePost
        } = this.props;

        return (
            <div className='mx-auto d-block content-row' key={ post.id }>
                                <div className='post'>
                                    <div className='row'>
                                        <div className='col-2'></div>
                                        <div className='col post-title'>
                                            <Link to={`/${post.category}/${post.id}`}>
                                                { post.title }
                                            </Link>
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
                                            <span
                                                onClick={ () => votePost('upVote', post)}
                                                className='vote upvote'
                                            >
                                                &#9650;
                                            </span>
                                            <span
                                                onClick={ () => votePost('downVote', post)}
                                                className='vote downvote'
                                            >
                                                &#9660;
                                            </span>
                                            <span className='votescore'>
                                                { post.voteScore }
                                            </span>
                                        </div>
                                        <div className='col crud-col'>
                                            <span className='comments-count'>
                                                <button
                                                    className='comment-count'
                                                >
                                                    comments: { post.commentCount }
                                                </button>
                                            </span>
                                            <span>
                                                <button
                                                    onClick={ () => openEditModal(post) }
                                                    className='edit'
                                                >
                                                    edit
                                                </button>
                                            </span>
                                            <span>
                                                <button
                                                    onClick={() => deletePost(post) }
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
    }
}

const mapDispatchToProps = dispatch => ({
    votePost: (vote, post) => dispatch(votePost(vote, post))
});

export default connect(null, mapDispatchToProps)(Post);
