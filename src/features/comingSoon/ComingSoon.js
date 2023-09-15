

import React from 'react'
import AppBanner from '../../components/appBanner/AppBanner'
import Header from '../../components/header/Header'

const ComingSoon = () => {
  return (
    <div>
        <Header />
        <AppBanner />
        <h3 style={{ display: "flex", justifyContent: "center" }}> Coming Soon</h3>
    </div>
  )
}

export default ComingSoon