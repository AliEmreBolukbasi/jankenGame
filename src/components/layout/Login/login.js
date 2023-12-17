import React , {useState,useEffect}from 'react'
import './login.css';
import ProjectHeader from '../../common/projectHeader/projectHeader'

export default function LoginForm() {
    const [imageUrl,setImageUrl] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

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

    const handleLogin= () => {
        console.log('Kullanıcı Adı:', username);
        console.log('Şifre:', password);
    }
  return (
    <div>
        <ProjectHeader />  
        <img src={imageUrl} style={{ zIndex: -999, position: 'absolute' }} alt="background" />
        <div  className='loginForm'>            
            <form className="login-form">
            <label>
            Kullanıcı Adı:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
        <label>
            Şifre:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button type="button" onClick={handleLogin}>Giriş Yap</button>
        </form>        
    </div>    
</div>
  )
}