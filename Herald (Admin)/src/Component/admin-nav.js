import React, { Component } from 'react';
import style from '../stylesheet/admin-nav.module.css';
import { Link } from 'react-router-dom';

export default class AdminNav extends Component {
    render() {
        return (
            <div>
                <nav className={style.nav}>
                    <ul className={style.ul}>
                        <li className={style.li}><Link to="/admin">Add Contain</Link></li>
                        <li className={style.li}><Link to="/delete-contain-admin">Delete Contain</Link></li>

                    </ul>
                </nav>
            </div>
        )
    }
}
