import React, { Component } from 'react';
import './postDetail.css';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPost, getComments } from '../../actions/index';

class PostDetail extends Component {

    state = {
        loading: true
    }

    componentWillMount() {
        this.props.getPost(this.props.match.params.postId);
        this.props.getComments(this.props.match.params.postId);
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {

        const { post, comments } = this.props;

        return (
            <div className='post-detail-wrapper'>
                {
                    post.id === this.props.match.params.postId &&
                    <div>
                        <div className='post-detail'>
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
                                    <span
                                        
                                        className='vote upvote'
                                    >
                                        &#9650;
                                    </span>
                                    <span
                                        
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
                                            
                                            className='edit'
                                        >
                                            edit
                                        </button>
                                    </span>
                                    <span>
                                        <button
                                            
                                            className='delete'
                                        >
                                            delete
                                        </button>
                                    </span>
                                </div>
                                <div className='col-1'></div>
                            </div>
                        </div>
                        <hr className='comment-hr' />
                        <form onSubmit={this.handleSubmit} className='comment-form'>
                            <div className='form-group row'>
                                <div className='col comment-form-title'>
                                    Comment
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col comment-body-input'>
                                    <textarea className='comment-input' type='text' name='body'>
                                    </textarea>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col'></div>
                                <div className='col button-col'>
                                    <button type='submit' value="submit" className='btn btn-group btn-primary post-btn'>
                                        POST
                                    </button>
                                </div>
                                <div className='col'></div>
                            </div>
                        </form>
                        <div className='row comments-wrapper'>
                            {   comments &&
                                comments.map(comment => (
                                    <div className='comment' key={ comment.id }>
                                        <div className='comment-body row'>
                                            <div className='col-3'>
                                                { comment.author } :
                                            </div>
                                            <div className='col'>
                                                { comment.body } 
                                            </div>
                                        </div>
                                        <div className='row comment-info'>
                                            <div className='col-2 vote-col'>
                                                <span
                                                    
                                                    className='vote upvote'
                                                >
                                                    &#9650;
                                                </span>
                                                <span
                                                    
                                                    className='vote downvote'
                                                >
                                                    &#9660;
                                                </span>
                                                <span className='votescore'>
                                                    { comment.voteScore }
                                                </span>
                                            </div>
                                            <div className='col-3 comment-crud-col'>
                                                <span>
                                                    <button
                                                        
                                                        className='edit'
                                                    >
                                                        edit
                                                    </button>
                                                </span>
                                                <span>
                                                    <button
                                                        
                                                        className='delete'
                                                    >
                                                        delete
                                                    </button>
                                                </span>
                                            </div>
                                            <div className='col'></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
                {
                    post.id !== this.props.match.params.postId &&
                    <div>
                        <h1> POST NOT FOUND </h1>
                    </div>
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getPost: (postId) => dispatch(getPost(postId)),
    getComments: (postId) => dispatch(getComments(postId))
});

const mapStateToProps = state => ({
    post: state.allPosts.currentPost,
    comments: state.allPosts.currentComments
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));
