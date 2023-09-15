

import React from 'react';
import { Routes, Route ,Navigate } from "react-router-dom"
import HomePage from '../features/homePage/HomePage';
import ErrrorPage from '../components/errorPages/ErrorPage';
import NowShowing from '../features/nowShowing/NowShowing';
import ComingSoon from '../features/comingSoon/ComingSoon';

const AppRoutes = () => {
  return (
    <div>
        
        <Routes basename="/MovieTickets">
          <Route path="/" element={ <HomePage/> } />
            <Route path="/nowShowing" element={ <NowShowing/> } />
              <Route path="/comingSoon" element={ <ComingSoon /> } />
            <Route path="/error-404"  element={<ErrrorPage />} />
         <Route path="/*" element={<Navigate to="/error-404" />} />
         </Routes>
    </div>
  )
}

export default AppRoutes