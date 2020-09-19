import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import './style.scss';





export default function Header() {

    const [isExpanded, setIsExpanded] = useState(false)

    const handleToggle = (e) => {
        e.preventDefault();
        setIsExpanded(!isExpanded)
    }


    return (
        <header>
            <div className="header-inner">
                <div className="logo">
                    <Link to="/">
                        Zeta
                    </Link>
                </div>
                <nav className="main-nav">
                    <i
                        className="fa fa-bars"
                        aria-hidden="true"
                        onClick={e => handleToggle(e)}
                    />
                    <ul className={`header-right collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <li>
                            <NavLink exact activeClassName="active" to="/">
                                HOME
                        </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/services">
                                SERVICES
                        </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/elements">
                                ELEMENTS
                        </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/blog">
                                BLOG
                        </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active" to="/contact">
                                CONTACT
                        </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}




