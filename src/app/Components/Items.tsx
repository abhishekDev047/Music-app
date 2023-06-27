import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsSpotify,BsBookmarkHeartFill } from "react-icons/bs";

function Items(props:any) {
  const [isLike, setisLike] = useState("bg-success");
  const [like, setLike] = useState(" ");
  const setLocal = ()=>{
    let final:string[] = [];
    let data:any= localStorage.getItem("favourites");
    if(data){
     final = data.split(',');
    }
    console.log(final);
    let listArr:string[] = final;
    listArr = [...listArr,props.local]
    let add = listArr.toString();
    localStorage.setItem("favourites",add);
  }
  return (
<>
<div className="col">
<div className="card text-white bg-success mb-3">
  <Link href={props.spotifyTrack} target='blank'>
  <Image src={props.poster} height={200} width={200} className="card-img-top" alt="Artist"/></Link>
  <div className="card-body">
    <h5 className="card-title">
    <Link href={props.spotifyTrack} target='blank' className="text-white" data-bs-toggle="tooltip" data-bs-placement="top" title="Listen on Spotify">
   {props.trackName} <i> <BsSpotify/> </i>
</Link>
     </h5>
    <Link target='blank' href={props.spotifyArtist} className=" fs-4 text-black">{props.name}</Link>
    <p className='text-white'><button aria-label={like} className='btn btn-success' onClick={()=>{setLocal;setisLike("text-danger");setLike("Close")}}><i className={isLike}><BsBookmarkHeartFill/></i></button> </p>
  </div>
</div>
</div>
  </>
  )
}

export default Items;