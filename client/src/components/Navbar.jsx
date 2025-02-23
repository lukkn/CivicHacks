
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar">
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
            </ul>
        </div>
        <button onClick={props.logout}>Log Out</button>
    </nav>
  );
};

export default Navbar;

