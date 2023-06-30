"use client";
import React, { useState, useEffect } from 'react';
import Items from './Items';
import Form from 'react-bootstrap/Form';
import { BsSearchHeartFill } from "react-icons/bs";
import Image from 'next/legacy/image';

function HomePage() {
    //    const visual = useAppSelector((state) => state.visual.value);
    const [query, setQuery] = useState("Taylor swift");
    const [result, setResult]: any = useState([]);
    const [token, setToken]: any = useState("");

    useEffect(() => {
        const run = () => {
            func();
        };
        run();
    }, [token]);



    //fetch api function for getting the data from the spotify server.
    const func = async () => {
        const url: string = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=50`
        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const results = await response.json();
            setResult(results.tracks.items);
            console.log(results);
        } catch (error) {
            let response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                body: new URLSearchParams({
                    'grant_type': 'client_credentials',
                    'client_id': 'cfe908cfd25248a7b6267307777f70ac',
                    'client_secret': '1757e91391b547659b8c76ae2f48dd42'
                })
            });
            let res = await response.json();
            setToken(res.access_token);
            console.error(error);
        }
    };

    // the return statement for  render
    return (
        <>
            <div className='flex-column overflow-hidden'>
                <section id='Quote-section'>
                    <div className=' flex-col flex'>
                        <Image
                            layout='intrinsic'
                            src={'/images/Taylormylove.jpg'}
                            height={2400}
                            width={3840}
                            alt='Taylor Swift'
                        />
                        <div className=' text-white  p-3 text-6xl flex md:text-9xl relative bottom-40 md:bottom-80 font-mono italic right-0 self-end'> Music is Love </div></div>
                </section>

                <section id='tracks-section'>
                    <div className='row mb-3 flex items-center justify-center'>

                        <div className="px-5 mx-auto flex flex-row items-center justify-center">


                            <Form.Control type="text" placeholder="search artist, track, album" value={query} onChange={(e) => { setQuery(e.target.value) }} className=' w-5/6 text-sm sm:text-base p-3 border border-white rounded-xl ' />

                            <button className=' btn-sm bg-dark w-1/6 px-3 flex flex-row items-start justify-center' onClick={func}>
                                <i className="text-3xl text-danger mx-auto"><BsSearchHeartFill /></i>
                            </button>

                        </div>

                    </div>

                    <div className="flex-col">
                        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 p-3">

                            {
                                result.map((item: any, index: number) => (
                                    <Items key={index} name={item.artists[0].name} spotifyArtist={item.artists[0].external_urls.spotify} spotifyTrack={item.external_urls.spotify} poster={item.album.images[1].url} trackName={item.name} local={item.href} visual0={'hidden'} />
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