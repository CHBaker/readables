import React, { Component } from 'react'
import './post.css';

class Post extends Component {
    render() {

        const { post, openEditModal, deletePost } = this.props;

        return (
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
                                            <span className='vote upvote'>
                                                &#9650;
                                            </span>
                                            <span className='vote downvote'>
                                                &#9660;
                                            </span>
                                            <span className='votescore'>
                                                { post.voteScore }
                                                { !post.voteScore && 1 }
                                            </span>
                                        </div>
                                        <div className='col crud-col'>
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

export default Post;
