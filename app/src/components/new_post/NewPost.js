import React, { Component } from 'react';
import './newPost.css';
import serializeForm from 'form-serialize';

class NewPost extends Component {

    state = {
        category: 'react'
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true});
        values.category = this.state.category;
        console.log(values);
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
                    <form onSubmit={this.handleSubmit} className='new-post-form'>
                        <div className='form-group row'>
                            <div className='col form-title'>
                                New Post
                            </div>
                        </div>
                        <hr className='new-post-hr' />
                        <div className='form-group row form-top-wrapper'>
                            <label htmlFor="title" className="col-1 col-form-label">Title</label>
                            <div className="col-4">
                                <input type="text" name="title" className="form-control" placeholder="title" />
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
                        <div className='form-group row content-wrapper'>
                            <label htmlFor='content'>Content</label>
                            <div className='col'></div>
                        </div>
                        <div className='form-group row'>
                            <div className='col post-body'>
                                <textarea className='content-input' type='text' name='content'>
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
            </div>
        )
    }
}

export default NewPost
