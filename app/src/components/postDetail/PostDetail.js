import React, { Component } from 'react';
import './postDetail.css';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPost, getComments, newComment, votePost, deletePost, deleteComment } from '../../actions/index';
import { NewCommentType } from '../../types/types';
import EditPost from '../edit_post/EditPost';
import EditComment from '../edit_comment/EditComment';

class PostDetail extends Component {

    state = {
        editModalOpen: false,
        commentModalOpen: false,
        comment: null
    }

    componentWillMount() {
        this.props.getPost(this.props.match.params.postId);
        this.props.getComments(this.props.match.params.postId);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true});
        const comment = new NewCommentType(
            this.newUID(), Date.now(), values.body,
            'bob', this.props.match.params.postId
        );
        this.props.newComment(comment);
        this.commentFormRef.reset();
    }

    newUID = () => {
        return Math.floor(Math.random()*8999999999999999+1000000000000000).toString();
    }

    openEditModal() {
        this.setState({ editModalOpen: true });
    }

    closeEditModal() {
        this.setState({ editModalOpen: false });
    }

    deletePost(post) {
        console.log(post);
        this.props.deletePost(post);
    }

    openCommentEditModal(comment) {
        this.setState({ commentModalOpen: true, comment: comment });
    }

    closeCommentEditModal() {
        this.setState({ commentModalOpen: false });
    }

    render() {

        const { post, comments, votePost, deleteComment } = this.props;

        const {
            editModalOpen,
            commentModalOpen,
            comment
        } = this.state;

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
                                        onClick={ () => votePost('upVote', post) }
                                        className='vote upvote'
                                    >
                                        &#9650;
                                    </span>
                                    <span
                                        onClick={ () => votePost('downVote', post) }
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
                                            onClick={ () => this.openEditModal(post) }
                                            className='edit'
                                        >
                                            edit
                                        </button>
                                    </span>
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
                        <hr className='comment-hr' />
                        <form
                            ref={(el) => this.commentFormRef = el}
                            onSubmit={this.handleSubmit}
                            className='comment-form'
                        >
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
                        <div className='comments-wrapper'>
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
                                                        onClick={ () => this.openCommentEditModal(comment) }
                                                        className='edit'
                                                    >
                                                        edit
                                                    </button>
                                                </span>
                                                <span>
                                                    <button
                                                        onClick={ () => deleteComment(comment, post) }
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
                {
                    editModalOpen &&
                    <EditPost
                        post={post}
                        closeModal={this.closeEditModal.bind(this)}
                    />
                }
                {
                    commentModalOpen &&
                    <EditComment
                        comment={comment}
                        closeModal={this.closeCommentEditModal.bind(this)}
                    />
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getPost: (postId) => dispatch(getPost(postId)),
    votePost: (post, vote) => dispatch(votePost(post, vote)),
    deletePost: (post) => dispatch(deletePost(post)),
    getComments: (postId) => dispatch(getComments(postId)),
    newComment: (comment) => dispatch(newComment(comment)),
    deleteComment: (comment, post) => dispatch(deleteComment(comment, post))
});

const mapStateToProps = state => ({
    post: state.allPosts.currentPost,
    comments: state.allPosts.currentComments
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));
