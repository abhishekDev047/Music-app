"use client";
import React, { useEffect, useState } from 'react';


function page() {
  const [items, setItems]:any = useState([]);
  // const [items1, setItems1]:any = useState([]);
  // var listArr:string[] = [];
  // var add = listArr.toString();
//   const myFunc = async ()=>{
  
//       let data:any = localStorage.getItem("favourites");
// if(data){
//   let res = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     body: new URLSearchParams({
//         'grant_type': 'client_credentials',
//         'client_id': 'cfe908cfd25248a7b6267307777f70ac',
//         'client_secret': '1757e91391b547659b8c76ae2f48dd42'
//     })
// });
// let token0:any = res.json()
// const token = token0.access_token;
//   const list:string[] = data.split(',');
//   list.map(async(item, index)=>{
//     // let url= "https://api.spotify.com/v1/tracks/1BxfuPKGuaTgP7aM0Bbdwr"
//     let res0 = await fetch(item, {
//       headers: {
//           'Authorization': `Bearer  ${token}`
//       }
//   });
//       let res2:object = await res0.json();
//       // console.log(res2);
//       setItems([...items,res2])
//   });
//   console.log(items)
// }
// else{
//   setItems([]);
// }
    
//   };

  // useEffect(() => {
  // myFunc();
  // }, []);
  
  // const setLocal = ()=>{
  //   let final:string[] = [];
  //   let data:any= localStorage.getItem("favourites");
  //   if(data){
  //    final = data.split(',');
  //   }
  //   console.log(final);
  //   let listArr:string[] = final;
  //   listArr = [...listArr,"never"]
  //   let add = listArr.toString();
  //   localStorage.setItem("favourites",add);
  // }

//   const run = async ()=>{
//     let res = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       body: new URLSearchParams({
//           'grant_type': 'client_credentials',
//           'client_id': 'cfe908cfd25248a7b6267307777f70ac',
//           'client_secret': '1757e91391b547659b8c76ae2f48dd42'
//       })
//   });
//   let token0:any = res.json()
//   let token = token0.access_token;
//   console.log(token)
//   let url= "https://api.spotify.com/v1/tracks/1BxfuPKGuaTgP7aM0Bbdwr"
//   let res0 = await fetch(url, {
//     headers: {
//         'Authorization': `Bearer  ${token}`
//     }
// });

//     let res2 = await res0.json();
//     console.log(res2);
//   };
  
  return (
    <div className='flex-column'>

      <div>
        <button onClick={()=>{localStorage.clear()}}> clear </button>
        <button onClick={()=>console.log(items)}>see me</button>
      </div>
<div className='container'>
      <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3 p-3'>
      {/* {
                            items.map(async(item:any, index:number)=>(
                                <Items key={index} name={item.artists[0].name} spotifyArtist={item.artists[0].external_urls.spotify} spotifyTrack={item.external_urls.spotify} poster={item.album.images[1].url} trackName={item.name} local={item.href} like={"Disabled"}/>
                            ))
                        } */}
        </div></div>
    </div>
  )
}

export default page;