import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import BannerHome from 'components/banner/bannerHome'

export default function Layout({children}) {
  return (
    <div className='md:container'>
        <Navbar />
        <BannerHome />
        {children}
        <Footer />
    </div>
  )
}
