import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './category.css';

class Category extends Component {
    state = {
        title: ''
    }

    componentDidMount() {
        this.setState({
            title: this.props.title
        })
    }

    render() {
        const { title, category } = this.state

        return (
            <div className='row'>
                <div className='col'></div>
                <div className='col title'>
                    { title }
                </div>
                <div className='col'></div>
            </div>
        )
    }
}

export default Category;
