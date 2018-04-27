import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './category.css';

class Category extends Component {
    state = {
        title: ''
    }

    componentDidMount() {
        this.setState({ title: this.props.title })
    }

    render() {
        const { title } = this.state

        return (
            <div className='row'>
                <div className='title'>
                    { this.props.title }
                </div>
            </div>
        )
    }
}

export default Category;
