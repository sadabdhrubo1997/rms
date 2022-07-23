import React from 'react';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import AdminPasswordChange from './AdminPasswordChange';
import './AdminSetting.scss';

const AdminSetting = () => {
    return (
        <div>
            <title>Admin | Setting</title>
            <Sidebar/>
            <Topbar pageName="Setting"/>
            <div className="admin_main_body">
            <AdminPasswordChange/>
            </div>
        </div>
    );
}

export default AdminSetting;
