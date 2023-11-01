import React from 'react'
import Links from './Links';

const Header = () => {
    const menus = [
        {
          name: "Home",
          id: 1,
          path: "/"
        },
        {
          name: "About Us",
          id: 2,
          path: "/about"
        },
        {
          name: "Blog",
          id: 3,
          path: "/Blog"
        }
      ];
      
  return (
    <div className='py-4'>
      <div className='mx-12 flex justify-between items-center'>
        <div className='text-2xl font-bold text-black'>CareerHub</div>
        <ul className='flex gap-4'>
            {
                menus.map(menu => <Links key={menu.id} menu={menu}></Links>)
            }
        </ul>
            <button className='font-bold bg-blue-500 text-white border  py-1 px-2 rounded-md'>Start Apply</button>
      </div>
    </div>
  )
}

export default Header
