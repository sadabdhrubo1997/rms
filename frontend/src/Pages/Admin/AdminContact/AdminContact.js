import React from 'react';
import './AdminContact.scss';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import AdminContactWrapper from './Components/AdminContactWrapper';
import AdminEmailWrapper from './Components/AdminEmailWrapper';
import AdminAddressWrapper from './Components/AdminAddressWrapper';
import AdminFacebookWrapper from './Components/AdminFacebookWrapper';
import AdminGooglePlusWrapper from './Components/AdminGooglePlusWrapper';
import AdminTwitterWrapper from './Components/AdminTwitterWrapper';
import AdminWhatsappWrapper from './Components/AdminWhatsappWrapper';
import AdminYoutubeWrapper from './Components/AdminYoutubeWrapper';
import AdminInstagramWrapper from './Components/AdminInstagramWrapper';

const AdminContact = () => {
    return (
        <div>
            <title>Admin | Contact</title>

            <Sidebar/>
            <Topbar pageName="Contact Details"/>

            <div className="admin_main_body">
                <AdminContactWrapper/>
                <AdminEmailWrapper/>
                <AdminAddressWrapper/>
                <AdminFacebookWrapper/>
                <AdminGooglePlusWrapper/>
                <AdminTwitterWrapper/>
                <AdminWhatsappWrapper/>
                <AdminYoutubeWrapper/>
                <AdminInstagramWrapper/>
            </div>
        </div>
    );
}

export default AdminContact;
