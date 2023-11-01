import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Links.css'

const Links = ({menu}) => {
    const {name, path} = menu;
  return (
    <Link>
      <NavLink 
      to={path}
      className={`font-bold text-gray-600 ${({ isActive}) =>isActive ? "active" : ""}`
    }
      >
      {name}
      </NavLink>
    </Link>
  )
}

export default Links
