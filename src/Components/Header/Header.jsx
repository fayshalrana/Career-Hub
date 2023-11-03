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
          name: "Applied Jobs",
          id: 2,
          path: "/my-jobs"
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
            <button className='font-bold bg-blue-500 text-white border  py-1 px-2 rounded-md'>Login</button>
      </div>
    </div>
  )
}

export default Header
