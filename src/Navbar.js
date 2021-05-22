import React, { Component } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {GrCart} from 'react-icons/gr'

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <h1 className="Navbar-head">Navbar</h1>

                <div className="Navbar-center">

                    <div className="Navbar-center-links">
                        <Link className="Navbar-center-links Navbar-center-links-cat" to="#">Men</Link>
                        <Link className="Navbar-center-links Navbar-center-links-cat" to="#">Women</Link>
                        <Link className="Navbar-center-links Navbar-center-links-cat" to="#">Kids</Link>
                        <Link className="Navbar-center-links Navbar-center-links-cat" to="#">Beauty</Link>
                        <Link className="Navbar-center-links Navbar-center-links-cat" to="#">Home & Living</Link>
                    </div>

                    <div className="Navbar-search">
                        <input className="search-txt" type="text" name="" placeholder="Type to search" />
                        <Link className="search-btn" to="#"><BiSearch /></Link>
                    </div>

                </div>
                <div className="Navbar-link">
                    <Link className="Navbar-link Navbar-link-cart" to="#"><GrCart/> Cart</Link>
                    <Link className="Navbar-link Navbar-link-login" to="/login">Login</Link>
                    <Link className="Navbar-link Navbar-link-signup" to="#">Sign Up</Link>
                </div>
            </div>
        )
    }
}

