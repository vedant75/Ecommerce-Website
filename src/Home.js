import React, { Component } from 'react'
import './Home.css'
import Navbar from './Navbar'
import Cards from "./Cards"

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Navbar />
                <Cards />
            </div>
        )
    }
}

export default Home