import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './main.css';

class Main extends Component {

    render() {
        return (
            <div className='main'>
                <div className='row top-row'>
                    <Link className='col option top-left' to='/react'>
                        React
                    </Link>
                    <Link className='col option top-right' to='/redux'>
                        Redux
                    </Link>
                </div>
                <div className='row bottom-row'>
                    <Link className='col option bottom-left' to='Udacity'>
                        Udacity
                    </Link>
                    <Link className='col option bottom-right' to='Node'>
                        Node
                    </Link>
                </div>
            </div>
        )
    }
}

export default Main;
