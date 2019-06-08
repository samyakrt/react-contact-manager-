import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props) {
    const {pageTitle} = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-3 py-0">

            <div className="container">
            <a href="/" className="navbar-brand">{pageTitle}</a>
            
            </div>
            <ul className="navbar-nav">

                <li className="nav-item">
                    <Link to="/" className="nav-link">
                    <i className="fas fa-home"></i>
                    Home</Link>
                    
                </li>
                <li className="nav-item">
                <Link to="/contacts/add" className="nav-link"> <i className="fas fa-plus"></i> Add</Link>
                    
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link" > <i className="fas fa-question"></i> About</Link>
                </li>
            </ul>
        </nav>
        
    )
}
