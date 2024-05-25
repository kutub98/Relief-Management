import { Outlet } from 'react-router-dom'; // Assuming you're using React Router
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import React from 'react';

const RootLayout: React.FC = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
