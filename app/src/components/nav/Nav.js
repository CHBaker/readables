import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

class Nav extends Component {

    render() {
        return (
            <div className='nav'>
                <div className='container'>
                    <div className='row menu-header'>
                        Threads | <Link to='/'>Home</Link>
                    </div>
                    <hr />
                    <div className='container menu-options-row'>
                        <Link to='/react' className='row menu-option'>
                            React
                        </Link>
                        <Link to='/redux' className='row menu-option'>
                            Redux
                        </Link>
                        <Link to='/udacity' className='row menu-option'>
                            Udacity
                        </Link>
                        <Link to='/node' className='row menu-option'>
                            Node
                        </Link>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            nav 1
                        </div>
                        <div className='col'>
                            nav 2
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            nav 3
                        </div>
                        <div className='col'>
                            nav 4
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
