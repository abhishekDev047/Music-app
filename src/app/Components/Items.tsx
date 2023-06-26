import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsSpotify,BsBookmarkHeartFill } from "react-icons/bs";

function Items(props:any) {
  const [isLike, setLike] = useState("bg-success");
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
    <p className='text-white'><button className='btn btn-success'><i className={isLike}><BsBookmarkHeartFill/></i></button> </p>
  </div>
</div>
</div>
  </>
  )
}

export default Items;