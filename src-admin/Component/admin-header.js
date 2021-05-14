import React, { Component } from 'react';

import AdminNav from '../Component/admin-nav'
import '../stylesheet/admin.css'

export default class AdminHeader extends Component {
    render() {
        return (
            <div className="admin-main-header">
                <h1>Welcome Admin Herald</h1>
                <AdminNav/>
            </div>
        )
    }
}
