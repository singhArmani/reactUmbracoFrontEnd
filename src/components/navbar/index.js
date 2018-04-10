import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        // <div>
        //     <Link to='/'>Home</Link>&nbsp;
        //     <Link to='/contact'>Contact Us</Link>
        // </div>

        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><a href="/articles">Articles</a></li>
            </ul>
		</nav>
    );
};

export default Nav;