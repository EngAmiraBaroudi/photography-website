import React from 'react';
import DashboardNav from './DashboardNav';
import UploadPhoto from './UploadPhoto';
import PhotoGallery from './PhotoGallery';
import Analytics from './Analytics';
import Footer from '../../Components/Common/Footer/Footer';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DashboardNav />
            <div className="dashboard-content">
                <UploadPhoto />
                <PhotoGallery />
                <Analytics />
                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;