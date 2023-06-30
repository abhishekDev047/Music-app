import Items from '@/app/Components/Items';
import React,{useEffect,useState} from 'react';

function Items2(props:any) {

    const [item, setItem]:any = useState(null);
    // let item:any = {};

const myFunc = async ()=>{
    try {
        let res0:any = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            body: new URLSearchParams({
                'grant_type': 'client_credentials',
                'client_id': 'cfe908cfd25248a7b6267307777f70ac',
                'client_secret': '1757e91391b547659b8c76ae2f48dd42'
            })
        });
        let resx = await res0.json();
        let token = resx.access_token;
        let url= props.local;
        let res = await fetch(url, {
          headers: {
              'Authorization': `Bearer  ${token}`
          }
      });
      let data = await res.json();
      setItem(data);
        
      console.log(data);
      console.log(data.artists[0].name);
    } catch (error) {
        console.log(error);
    }
// item = data;
//   console.log(item.artists[0].name);
};

useEffect(() => {
    myFunc();
  }, []);

if(!item){
    return(
        <div>
            nothing here 
        </div>
    )
}
else{
  return (
    <>
        <Items name={item.artists[0].name} spotifyArtist={item.artists[0].external_urls.spotify} spotifyTrack={item.external_urls.spotify} poster={item.album.images[1].url} trackName={item.name} local={item.href} alts={item.artists[0].name} visual={"hidden"} />
    </>
  )}
};

export default Items2;