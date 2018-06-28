import React, { Component } from 'react';
import './editComment.css';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { editComment } from '../../actions/index';

class EditComment extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true});
        let editedComment = this.props.comment;
        editedComment.body = values.body;

        this.props.editComment(editedComment);
        this.props.closeModal();
    }

    render() {
        const { closeModal, comment } = this.props;

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
                                Edit Comment
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col post-body-input'>
                                <textarea
                                    defaultValue={ comment.body }
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
    editComment: (comment) => dispatch(editComment(comment))
});

export default connect(null, mapDispatchToProps)(EditComment);
