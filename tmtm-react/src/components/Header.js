import React, { Component } from 'react';
import '../style/header.css';

class Header extends Component {
    render() {
        return (
            <div className={'header'}>
                <ul className={'navbar'}>
                    <li><a>Welcome</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Applications</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
