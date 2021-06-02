import React, { Component } from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <ul className="nav">
                <li className="nav__item">
                    <Link to="#" className="nav__link">About us</Link>
                </li>
                <li className="nav__item">
                    <Link to="#" className="nav__link">In news</Link>
                </li>
                <li className="nav__item">
                    <Link to="#" className="nav__link">mail us</Link>
                </li>
                <li className="nav__item">
                    <Link to="#" className="nav__link">Contact us</Link>
                </li>
                <li className="nav__item">
                    <Link to="#" className="nav__link">Help!</Link>
                </li>
                </ul>
                <p className="copyright">
                &copy; Copyright 2020 by Vedant Shah and Esha Shetty. This is made for our personal
                project. You all are Welcome here
                </p>
      </footer>
        )
    }
}
