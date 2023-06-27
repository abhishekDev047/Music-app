// import Link from 'next/link';
"use client";
import React from 'react';
// import {useAppDispatch } from "../../Redux/hooks";
// import { handleChange } from '@/Redux/features/querySlice';
import Link from 'next/link';

function Sidebar() {
  //  const dispatch = useAppDispatch();

  return (
    <>
        <div className=" justify-content-center align-items-center nav nav-pills nav-fill flex-sm-column p-3 flex-wrap w-100 ">
            <div className='nav-item mx-1'><Link href={'/'} className='text-decoration-none text-white'>Home</Link></div>
            <div className='nav-item mx-1'><Link href={'/favourites'} className='text-decoration-none text-white'>Favourites</Link> </div>
            <div className='nav-item mx-1 '>Search</div>
            <div className='nav-item mx-1'>Playlist</div>
        </div>
    </>
  )
}

export default Sidebar;