
"use client";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

function Sidebar() {
  //  const dispatch = useAppDispatch();

  return (
    <>

      <Navbar expand="lg" className="bg-black container-fluid text-white h-20 fs-3" fixed="top" variant='dark'>
        <Container>
          <div className="mx-4"><Link href={'/'} className=' hover:text-red-700 '>Home</Link></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white' />
          <Navbar.Collapse id="basic-navbar-nav" className='text-white bg-black py-3 w-full'>
            <Nav className="me-auto">
              <div className="mx-4"> <Link href={'/favourites'} className=' hover:text-red-700 '>Favourites</Link></div>
              <div className="mx-4"> <Link href={'/favourites'} className=' hover:text-red-700 '>Playlist
              </Link></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Sidebar;