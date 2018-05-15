import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './category.css';

class NewPost extends Component {
    render() {
        return (
            <div className='row new-post-row'>
                <form>
                    <div className='row form-row'>
                        <div className='col'>
                            <input type='text' value='' />
                        </div>
                    </div>
                    <div className='row form-row'>
                        <div className='col post-body'>
                            <textarea type='text' value=''>
                            </textarea>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewPost
