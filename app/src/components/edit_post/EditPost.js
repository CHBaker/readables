import React, { Component } from 'react';
import './editPost.css';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { editPost } from '../../actions/index';

class EditPost extends Component {

    componentWillMount() {
        this.setState({ post: this.props.post });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true});
        let editedPost = this.props.post;
        editedPost.title = values.title;
        editedPost.body = values.body;

        this.props.editPost(editedPost);
        this.props.closeModal();
    }

    render() {
        const { closeModal, post } = this.props;

        return (
            <div>
                <div
                    onClick={ () => closeModal() }
                    className='edit-veil'
                ></div>
                <div className='edit-post-wrapper'>
                    <form onSubmit={this.handleSubmit} className='new-post-form'>
                        <div className='form-group row'>
                            <div className='col form-title'>
                                Edit Post
                            </div>
                        </div>
                        <hr className='new-post-hr' />
                        <div className='form-group row form-top-wrapper'>
                            <label htmlFor="title" className="col-1 col-form-label">Title</label>
                            <div className="col-4">
                                <input
                                    defaultValue={ post.title }
                                    type="text"
                                    name="title"
                                    className="form-control"
                                />
                            </div>
                            <div className='col'></div>
                            <div className="col-4">
                            </div>
                        </div>
                        <div className='form-group row content-wrapper'>
                            <label htmlFor='content'>Content</label>
                            <div className='col'></div>
                        </div>
                        <div className='form-group row'>
                            <div className='col post-body-input'>
                                <textarea
                                    defaultValue={ post.body }
                                    className='content-input'
                                    type='text'
                                    name='body'
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col'></div>
                            <div className='col button-col'>
                                <button type='submit' value="submit" className='btn btn-group btn-primary edit-btn'>
                                    UPDATE
                                </button>
                            </div>
                            <div className='col'></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    editPost: (post) => dispatch(editPost(post))
});

export default connect(null, mapDispatchToProps)(EditPost);
