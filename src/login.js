import React , {useState,useEffect}from 'react'
import './index.css';

export default function LoginForm() {
    const [imageUrl,setImageUrl] = useState('');

    useEffect(()=>{
        const fetchImage = async()=>{
            try{
                const response =await fetch('https://source.unsplash.com/random/1920x1080');
                const url= response.url;
                setImageUrl(url);
            }catch(error){
                console.error('Background getirilemedi.',error)
            }

        }
        fetchImage();
    },[]);

  return (
    <div>
        <img src={imageUrl} style={{zIndex:-999,position:'absolute'}}></img>
       <div className='ProjeBaslik'>Janken Oyunu</div> 

    </div>
  )
}