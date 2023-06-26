// import Link from 'next/link';
"use client";
import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange } from '@/Redux/features/querySlice';

function Sidebar() {
   const query = useSelector((state:any)=>state.query.value);
    const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('Taylor Swift');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className=" justify-content-center align-items-center nav nav-pills nav-fill flex-sm-column p-3 flex-wrap w-100">
            <div className='nav-item mx-1 '>Home</div>
            <div className='nav-item mx-1 '>Favourites</div>
            <div className='nav-item mx-1 '><button onClick={handleShow}>Search</button></div>
            <div className='nav-item mx-1 '>Playlist</div>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>We both love Music</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Search by artists,tracks,albums"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="search artist, track, album" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
      </FloatingLabel>
      <button onClick={()=>{dispatch(handleChange(search));console.log(query)}} className='btn btn-dark'> Search</button>
        </Offcanvas.Body>
      </Offcanvas>
    
    </>
  )
}

export default Sidebar;