import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './main.css';

class Main extends Component {

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        col 1
                    </div>
                    <div className='col'>
                        col 2
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        col 3
                    </div>
                    <div className='col'>
                        col 4
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
