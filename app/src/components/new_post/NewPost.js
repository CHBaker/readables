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
            <div className='row new-post-row'>
                <form>
                    <div className='row form-row'>
                        <div className='col'>
                            <label>
                                Title
                                <input type='text' value='' />
                            </label>
                        </div>
                        <div className='col'>
                            <label>
                                Category
                                <select value={category} onChange={this.changeCategory}>
                                    <option value='react'>React</option>
                                    <option value='redux'>Redux</option>
                                    <option value='udacity'>Udacity</option>
                                    <option value='node'>Node</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className='row form-row'>
                        <div className='col post-body'>
                            <textarea type='text' value=''>
                            </textarea>
                        </div>
                    </div>
                    <button type='submit' className='submit-new-post'>
                        Post
                    </button>
                </form>
            </div>
        )
    }
}

export default NewPost
