import React, { Component } from 'react'
import './Home.css'
import Navbar from './Navbar'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Navbar />
                <h1>Home page</h1>
            </div>
        )
    }
}

export default Home