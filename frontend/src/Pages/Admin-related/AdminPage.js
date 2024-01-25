import React from 'react'
import {Link} from 'react-router-dom'

export default function AdminPage() {
  return (
    <div className='flex  flex-col  items-center h-screen   w-full lg:w-2/3 xl:w-1/2 mx-auto'>
    <Link to="/admin/athletesManagment" className='m-12 max-w-3/6'>
      <button className="bg-red-500 text-white p-2 rounded px-8 md:px-12 lg:px-16 xl:px-20 hover:bg-black">
      Manage Athletes
      </button>
    </Link>
    <Link to="/admin/athletesManagment" className='m-12 max-w-3/6'>
      <button className="bg-red-500  text-white p-2 rounded px-8 md:px-12 lg:px-16 xl:px-20 hover:bg-black">
      Manage Products
      </button>
    </Link>
    <Link to="/admin/athletesManagment" className='m-12 max-w-3/6'>
      <button className="bg-red-500 text-white p-2 rounded px-8 md:px-12 lg:px-16 xl:px-20 hover:bg-black">
      Manage Events
      </button>
    </Link>
    <Link to="/admin/athletesManagment" className='m-12 max-w-3/6'>
      <button className="bg-red-500 text-white p-2 rounded px-8 md:px-12 lg:px-16 xl:px-20 hover:bg-black">
      Manage Blog   
      </button>
    </Link>
  </div>
  )
}
