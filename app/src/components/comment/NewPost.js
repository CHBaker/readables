import React, { Component } from 'react';
import './newPost.css';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { newPost } from '../../actions/index';
import { NewPostType } from '../../types/types';

class NewPost extends Component {

    state = {
        category: 'react'
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true});
        values.category = this.state.category;

        const newPost = new NewPostType(
            this.newUID(), Date.now(), values.title,
            values.body, 'bob', values.category
        );

        this.props.newPost(newPost);
        this.props.closeModal();
    }

    newUID = () => {
        return Math.floor(Math.random()*8999999999999999+1000000000000000);
    }

    changeCategory = (e) => {
        this.setState({ category: e.target.value })
    }

    render() {
        const { category } = this.state;
        const { closeModal } = this.props;

        return (
            <div>
                <div
                    onClick={ () => closeModal() }
                    className='veil'
                ></div>
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
                            <div className='col post-body-input'>
                                <textarea className='content-input' type='text' name='body'>
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

const mapDispatchToProps = dispatch => ({
    newPost: (post) => dispatch(newPost(post))
});

const mapStateToProps = state => ({
    posts: state.allPosts.posts
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
