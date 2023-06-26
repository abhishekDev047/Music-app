"use client";
import React, { useState,useEffect } from 'react';
import Items from './Items';
// import Image from 'next/image';
import { useSelector } from 'react-redux';

function HomePage() {
    const searchValue = useSelector((state:any)=>state.query.value);
    const [query, setQuery] = useState(searchValue);
    const [result, setResult]:any = useState([]);
   
    const token = "BQBQO2xDvB_e734mKX15qAq_72ALIcdjNGR_aie7oYGBKnNzoG4pR9Szd_I1kJx5fLPBUV5jAWEnSXR38wCZqE0KGJdTgeAScJlOlQglGZ-Hlrcz9pM";

    useEffect(() => {
      const run = ()=>{
        func();
      setQuery(searchValue);
    };
    run();
    }, [searchValue,query]);
    
    //fetch api function for getting the data from the spotify server.
    const func = async () => {
        const url: string = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=20`
        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const results = await response.json();
            setResult(results.tracks.items);
            console.log(results.tracks.items);
        } catch (error) {
            console.error(error);
        }
    };

    // the return statement for  render
    return (
        <>
            <div className='flex-column'>
                <section id='Quote-section'>
                    <div className='h-25 w-100 bg-danger text-white  text-end p-3 fs-1'> Music is Love </div>
</section>
                
                <section id='tracks-section'>
 
                <div className="container">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 p-3">
                    
                        {
                            result.map((item:any, index:number)=>(
                                <Items key={index} name={item.artists[0].name} spotifyArtist={item.artists[0].external_urls.spotify} spotifyTrack={item.external_urls.spotify} poster={item.album.images[1].url} trackName={item.name} />
                            ))
                        }
                    </div>


                </div>
                </section>
            </div>

        </>
    )
}

export default HomePage;