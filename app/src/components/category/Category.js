import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './category.css';
import * as Api from '../../utils/api';
import * as capitalize from '../../utils/capitalize.js';

class Category extends Component {
    state = {
        category: '',
        posts: []
    }

    componentDidMount() {
        Api.getPostByCategory(this.props.category)
            .then(
                (posts) => {
                    this.setState({
                        category: this.props.category,
                        posts: posts
                    })
                    console.log('state, ', this.state.posts)
                }
        )
    }

    render() {
        const { category, posts } = this.state

        return (
            <div className='category-wrapper'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col title'>
                        { capitalize.capitalize(category) }
                    </div>
                    <div className='col'></div>
                </div>
                <div className='row'>
                    {
                        posts.map((post) => (
                            <div className='row content-row' key={ post.id }>
                                <div className='col'></div>
                                <div className='col-10 post'>
                                    <div className='row'>
                                        <div className='post-title'>
                                            { post.title }
                                        </div>
                                    </div>
                                    <hr className='hr-title' />
                                    <div className='row'>
                                        <div className='post-body'>
                                            { post.body }
                                        </div>
                                    </div>
                                </div>
                                <div className='col'></div>
                            </div>
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default Category;
