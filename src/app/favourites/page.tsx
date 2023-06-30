"use client";
import React, { useEffect, useState } from 'react';
import Items2 from './Components/Items2';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RiDeleteBin3Fill } from "react-icons/ri";


function page() {
  const [items, setItems]:any = useState([]);
  const [shows, setShows] = useState<string>("visible");

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const myFunc = ()=>{
    let final: string[] = [];
    let data: any = localStorage.getItem("favourites");
    if (data) {
        final = data.split(',');
      }
      setItems(final);
      console.log(final)
};

  useEffect(() => {
    const get = ()=>{
      myFunc();
    };
    get();
  }, []);
  
  const handleClear = (method:number)=>{
    if(method===0){
      setShows("hidden");
      localStorage.clear();
      handleClose();
    }
    else{
      handleClose();
    }
  };

  return (
    <div className='flex-column overflow-hidden'>

      <div className="flex flex-row text-white items-center justify-center my-3">
      <div className='text-lg text-center '> <i>Welcome here are your all favourite songs</i> </div>
      <div className='items-center justify-center mx-3'>   <Button className="text-2xl text-red-800" onClick={handleShow}>
        <i><RiDeleteBin3Fill/></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Clear list </Modal.Title>
        </Modal.Header>
        <Modal.Body>This action will delete all your favourite songs and this action can not be undone</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='bg-gray-800 text-white' onClick={()=>{handleClear(1)}}>
            Close
          </Button>
          <Button variant="danger" className='bg-red-800 text-white' onClick={()=>{handleClear(0)}}>
            Clear Anyway
          </Button>
        </Modal.Footer>
      </Modal> </div>
      </div>
<section className={shows}>
<div className='flex-col'>
      <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3 p-3'>
          {items.map((item:any,index:number)=>(
            <Items2 key={index} local={item} />
          ))}
        </div></div>
        </section>
    </div>
  )
}

export default page;