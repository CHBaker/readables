import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './category.css';
import * as Api from '../../utils/api';

class Category extends Component {
    state = {
        category: ''
    }

    componentDidMount() {
        Api.getPostByCategory(this.props.category)
            .then(posts => console.log('posts : ', posts))

        this.setState({
            category: this.props.category
        });
    }

    render() {
        const { category } = this.state

        return (
            <div className='category-wrapper'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col title'>
                        { category }
                    </div>
                    <div className='col'></div>
                </div>
                <div className='row content-row'>

                </div>
            </div>
        )
    }
}

export default Category;
