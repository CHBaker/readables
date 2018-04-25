import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

class Nav extends Component {

    render() {
        return (
            <div className='nav'>
                <div className='container'>
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
