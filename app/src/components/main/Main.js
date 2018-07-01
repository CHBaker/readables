import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './main.css';
import EditPost from '../edit_post/EditPost';
import Post from '../post/Post';
import { deletePost } from '../../actions/index';

class Main extends Component {

    state = {
        editModalOpen: false,
        editPost: null
    }

    deletePost(post) {
        this.props.deletePost(post);
    }

    openEditModal(post) {
        this.setState({ editPost: post });
        this.setState({ editModalOpen: true });
    }

    closeEditModal() {
        this.setState({ editModalOpen: false });
    }

    sortByScore() {
        this.props.allPosts.allPosts.sort((a, b) => b.voteScore - a.voteScore );
        this.setState(this.state);
    }

    sortByDate() {
        this.props.allPosts.allPosts.sort((a, b) => b.timestamp - a.timestamp );
        this.setState(this.state);
    }

    render() {

        const { category, editPost, editModalOpen } = this.state;
        const { allPosts, sortByScore } = this.props;

        return (
            <div className='category-wrapper'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col title'>
                        All Posts
                    </div>
                    <div className='col'></div>
                </div>
                <div className='sort-container'>
                    <button
                        onClick={ () => this.sortByScore() }
                        className='btn-group btn-primary btn'
                    >
                        sort by score
                    </button>
                    <button
                        onClick={ () => this.sortByDate() }
                        className='btn-group btn-primary btn'>
                        sort by date
                    </button>
                </div>
                <div className='posts-container'>
                    {
                        allPosts.allPosts.map((post) => (
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
            
            // <div className='main'>
            //     <div className='row top-row'>
            //         <Link className='col option top-left' to='/react'>
            //             React
            //         </Link>
            //         <Link className='col option top-right' to='/redux'>
            //             Redux
            //         </Link>
            //     </div>
            //     <div className='row bottom-row'>
            //         <Link className='col option bottom-left' to='Udacity'>
            //             Udacity
            //         </Link>
            //         <Link className='col option bottom-right' to='Node'>
            //             Node
            //         </Link>
            //     </div>
            // </div>
