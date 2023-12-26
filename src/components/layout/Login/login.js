import React , {useState,useEffect}from 'react'
import './login.css';
import faceIcon from '../../../assets/images/face.png';
import twitIcon from '../../../assets/images/twit.png';
import instaIcon from '../../../assets/images/insta.png';
import ProjectHeader from '../../common/projectHeader/projectHeader';
import LoginInputRegex from '../../../utils/loginInputRegex/loginInputRegex'

export default function LoginForm() { 
    const [imageUrl,setImageUrl] = useState('');
    const [coupleUsername,setCoupleUsername] = useState('');
    const [coupleSecondUsername,setCoupleSecondUsername] = useState('');
    const [onlyUsername,setOnlyUsername] = useState('');
    const [oyunTipiVisible, setOyunTipiVisible] = useState(true);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState('');

    useEffect(()=>{ //Random background getirilmesi
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

    const SetOyunTipiVisible = (value) => { //Oyun tipi seçimi 
        setOnlyUsername('');
        setCoupleSecondUsername('');
        setCoupleUsername('');
        setOyunTipiVisible(value);
    };

    const handleLogin= () => { //oyuna geçiş işlemleri
        console.log('Kullanıcı Adı:', onlyUsername);
    };

    const handleValidationChange = (isValid) => { // Login buton kontrol
      setIsSubmitDisabled(!isValid);
    };
  return (
    <div>
        <ProjectHeader />  
        <img src={imageUrl} style={{ zIndex: -999, position: 'absolute' }} alt="background" />
        <div className="loginForm">
        <div className="button-box">
          <button type="button" className="toggle-button only" onClick={() => SetOyunTipiVisible(true)}>
            Bilgisayara Karşı
          </button>
          <button type="button" className="toggle-button couple" onClick={() => SetOyunTipiVisible(false)} >
            İkili Oyun
          </button>
        </div>
        
        <form id="only" style={{ display: oyunTipiVisible ? 'block' : 'none' }}>
          <input
            type="text"
            className="input-field username"
            id="inptOnlyUsername"
            placeholder="Kullanıcı adınızı giriniz"
            value={onlyUsername}
            onChange={(e) => {
              setOnlyUsername(e.target.value);
            }}
            required
          />
          <LoginInputRegex value={onlyUsername} onValidationChange={handleValidationChange} />
          <button onClick={handleLogin} type="submit" disabled={isSubmitDisabled} id="submit-tek-btn" className="submit-btn-login">
            HADİ OYNA
          </button>
        </form>
        <form id="couple" style={{ display: !oyunTipiVisible ? 'block' : 'none' }} >
          <input
            type="text"
            className="input-field username"
            id="inptCpleFirstUsername"
            placeholder="Birinci Kullanıcı adınızı giriniz"
            value={coupleUsername}
            onChange={(e) => setCoupleUsername(e.target.value)}
            required
          />
          <LoginInputRegex value={coupleUsername} onValidationChange={handleValidationChange} />
          <input
            type="text"
            className="input-field username"
            id="inptCpleSecUsername"
            placeholder="İkinci Kullanıcı adınızı giriniz"
            value={coupleSecondUsername}
            onChange={(e) => setCoupleSecondUsername(e.target.value)}
            required
          />
          <LoginInputRegex value={coupleSecondUsername} onValidationChange={handleValidationChange} />
          <button type="submit" disabled={isSubmitDisabled} id="submit-couple-btn" className="submit-btn-login">
            HADİ OYNAYALIM
          </button>
        </form>
        <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img className="icons face" src={faceIcon} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <img className="icons twit" src={twitIcon} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img className="icons insta" src={instaIcon} alt="Instagram" />
          </a>
        </div>
      </div>
        
</div>
  )
}