import React from 'react';
import Footer from '../components/layout/Footer';

const LayoutNoHeader = ({ children }) => (
  <>
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutNoHeader;  