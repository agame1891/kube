import React from 'react'
import './header.css'
import { nav } from '../../data/data'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <section id="header">
            <div class="header container">
                <div class="nav-bar">
                    <div class="brand">
                        <a href="#home">
                            <h1>Web FrontEnd</h1>
                        </a>
                    </div>
                    <div class="nav-list">
                        <div class="hamburger">
                            <div class="bar"></div>
                        </div>
                        <ul>
                        {nav.map((list, index) => (
                            <li key={index}>
                            <Link to={list.path}>{list.text}</Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Header