import { handleChange } from '@/Redux/features/querySlice';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState,useEffect } from 'react';
import { BsSpotify, BsBookmarkHeartFill } from "react-icons/bs";
import { IoIosRemoveCircle } from "react-icons/io";

function Items(props: any) {
  
  const [isLike, setisLike] = useState<string>();
  const [like, setLike] = useState<boolean>();
  const [show, setshow] = useState<string>("visible");

  const setLocal = (method: string) => {

    let final: string[] = [];
    let data: any = localStorage.getItem("favourites");
    if (method === "add") {
      if (data) {
        final = data.split(',');
      }
      // console.log(final);
      let listArr: string[] = final;
      listArr = [...listArr, props.local]
      let add = listArr.toString();
      localStorage.setItem("favourites", add);
    }
    else {
      if (data) {
        final = data.split(',');
      }
      // console.log(final);
      let listArr: string[] = final;
      let listArr2: string[] = listArr.filter((item) => item !== props.local);
      let add = listArr2.toString();
      localStorage.clear();
      localStorage.setItem("favourites", add);
    }
  }
  const handleLike = () => {
    if (!like) {
      setLocal("add");
      setisLike("text-danger");
      setLike(true)
    }
    else {
      setLocal("delete")
      setisLike("text-white");
      setLike(false);
    }
  };

  const handleDelete = ()=>{
    setLocal("delete");
    setshow("hidden");
  };

  useEffect(() => {
    const run = ()=>{
     let final: string[] = [];
     let data: any = localStorage.getItem("favourites");
     if (data) {
       final = data.split(',');
     }
     if(final.includes(props.local)){
       setLike(true);
       setisLike("text-danger");
     }
     else{
       setLike(false);
       setisLike("text-white")
     }
    }; 
    run();
   }, []);
   
  return (
    <>
      <div className={show}>
        <div className="card text-white bg-green-700 mb-3">
          <Link href={props.spotifyTrack} target='blank'>
            <Image src={props.poster} height={200} width={200} className="card-img-top" alt={props.name} /></Link>
          <div className="card-body">
            <h5 className="card-title">
              <Link href={props.spotifyTrack} target='blank' className=" flex flex-row items-center justify-center text-white " data-bs-toggle="tooltip" data-bs-placement="top" title="Listen on Spotify">
                <i className="mx-1 hover:text-black hover:underline"> {props.trackName} </i>  <i className='hover:text-green-400 mx-1'> <BsSpotify /> </i>
              </Link>
            </h5>
            <Link target='blank' href={props.spotifyArtist} className=" hover:underline text-black hover:text-slate-600 fs-4 ">{props.name}</Link>
            <p className={props.visual}><button className='btn btn-success  text-white' onClick={handleLike}><i className={isLike}><BsBookmarkHeartFill /></i></button> </p>
            <p className={props.visual0}><button className='btn btn-success  text-white' onClick={handleDelete}><i className=''><IoIosRemoveCircle /></i></button> </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Items;