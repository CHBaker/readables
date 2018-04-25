import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './main.css';

class Main extends Component {

    render() {
        return (
            <div className='main'>
                <div className='row top-row'>
                    <div className='col top-left'>
                        col 1
                    </div>
                    <div className='col top-right'>
                        col 2
                    </div>
                </div>
                <div className='row bottom-row'>
                    <div className='col bottom-left'>
                        col 3
                    </div>
                    <div className='col bottom-right'>
                        col 4
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
