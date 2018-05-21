import React, { Component } from 'react';
import './newPost.css';
import serializeForm from 'form-serialize';

class NewPost extends Component {

    state = {
        category: 'react'
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true})
    }

    changeCategory = (e) => {
        this.setState({ category: e.target.value })
    }

    render() {
        const { category } = this.state;

        return (
            <div>
                <div className='veil'></div>
                <div className='new-post-wrapper'>
                    <form className='new-post-form'>
                        <div className='form-group row'>
                            <div className='col form-title'>
                                New Post
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor="title" className="col-1 col-form-label">Title</label>
                            <div className="col-4">
                                <input type="text" className="form-control" id="title" placeholder="title" />
                            </div>
                            <div className='col'></div>
                            <label htmlFor="category" className="col-2 col-form-label">Category</label>
                            <div className="col-4">
                                <select className='form-control' value={category} onChange={this.changeCategory}>
                                    <option value='react'>React</option>
                                    <option value='redux'>Redux</option>
                                    <option value='udacity'>Udacity</option>
                                    <option value='node'>Node</option>
                                </select>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-1'></div>
                            <label htmlFor='content col-2'>Content</label>
                            <div className='col'></div>
                        </div>
                        <div className='form-group row'>
                            <div className='col post-body'>
                                <textarea className='content-input' type='text' name='content' value=''>
                                </textarea>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col'></div>
                            <div className='col button-col'>
                                <button type='submit' className='btn btn-group btn-primary post-btn'>
                                    POST
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

export default NewPost
