import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './category.css';
import { deletePost } from '../../actions/index';
import * as capitalize from '../../utils/capitalize.js';
import EditPost from '../edit_post/EditPost';
import Post from '../post/Post';

class Category extends Component {

    state = {
        category: '',
        editModalOpen: false,
        editPost: null
    }

    componentWillMount() {
        this.setState({ category: this.props.category })
    }

    deletePost(post) {
        console.log(post);
        this.props.deletePost(post);
    }

    openEditModal(post) {
        this.setState({ editPost: post });
        this.setState({ editModalOpen: true });
    }

    closeEditModal() {
        this.setState({ editModalOpen: false });
    }

    render() {

        const { category, editPost, editModalOpen } = this.state;
        const { allPosts } = this.props;

        return (
            <div className='category-wrapper'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col title'>
                        { capitalize.capitalize(category) }
                    </div>
                    <div className='col'></div>
                </div>
                <div className='posts-container'>
                    {
                        allPosts[category].map((post) => (
                            <Post
                                key={post.id}
                                post={post}
                                openEditModal={this.openEditModal.bind(this)}
                                deletePost={this.deletePost.bind(this)}
                            />
                        )
                    )}
                </div>
                {
                    editModalOpen &&
                    <EditPost
                        post={editPost}
                        closeModal={this.closeEditModal.bind(this)}
                    />
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    deletePost: (post) => dispatch(deletePost(post))
});

const mapStateToProps = state => ({
    allPosts: state.allPosts
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
