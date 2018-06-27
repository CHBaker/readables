import React, { Component } from 'react';
import './postDetail.css';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPost } from '../../actions/index';

class PostDetail extends Component {

    componentWillMount() {
        this.props.getPost(this.props.postId);
        console.log(this.props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {

        return (
            <div>
                <div className='post-detail'>
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col post-title'>
                            
                        </div>
                        <div className="col-2 crud">
                            by: 
                        </div>
                    </div>
                    <div className='row'>
                        <div className='post-body'>
                            
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
                                
                            </span>
                        </div>
                        <div className='col crud-col'>
                            <span className='comments-count'>
                                <button
                                    className='comment-count'
                                >
                                    
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
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getPost: (postId) => dispatch(getPost(postId))
});

const mapStateToProps = (state, ownProps) => ({
    post: state.allPosts[ownProps.postId]
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
