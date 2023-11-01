import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Home from './Components/HomePage/Home'

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
