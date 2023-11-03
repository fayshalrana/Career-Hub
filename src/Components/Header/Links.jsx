import React from 'react'
import {NavLink } from 'react-router-dom';
import './Links.css'

const Links = ({menu}) => {
    const {name, path} = menu;
  return (
      <NavLink 
      to={path}
      className={`font-bold text-gray-600 ${({ isActive}) =>isActive ? "active" : ""}`
    }
      >
      {name}
      </NavLink>
  )
}

export default Links
