import React, { Component } from 'react';
import './postDetail.css';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PostDetail extends Component {

    componentWillMount() {
        console.log(this.props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {

        return (
            <div>
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

export default connect(null, null)(PostDetail);
