"use client";
import React, { useEffect, useState } from 'react';
import Items2 from './Components/Items2';


function page() {
  const [items, setItems]:any = useState([]);
  // const [token, setToken]:any = useState();
  const getToken = async ()=>{
  
  let res:any = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': 'cfe908cfd25248a7b6267307777f70ac',
        'client_secret': '1757e91391b547659b8c76ae2f48dd42'
    })
});
let resx = await res.json();
// setToken(resx.access_token)
  };

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
      getToken();
      myFunc();
    };
    get();
  }, []);
  
  return (
    <div className='flex-column overflow-hidden'>
<div className='flex-col'>
      <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3 p-3'>
          {items.map((item:any,index:number)=>(
            <Items2 key={index} local={item} />
          ))}
        </div></div>
    </div>
  )
}

export default page;