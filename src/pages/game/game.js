import React, {useState,useEffect} from 'react'
import './game.css'
import ProjectHeader from '../../components/layout/projectHeader/projectHeader' 

export default function Game() {
    const secim = [
        "air", "water", "dragon", "devil", "lightning",
        "gun", "rock", "fire", "scissors", "snake", "human", "tree", "wolf", "sponge", "paper"
      ];
    
      const [firstUserImageIndex, setFUserImageIndex] = useState(0);
      const [firstUserImage, setFirstUserImage] = useState('');
      const [secUserImageIndex, setSUserImageIndex] = useState(0);
      const [secUserImage, setSecUserImage] = useState('');
    
      useEffect(() => {
        // Sayfa yüklendiğinde veya firstUserImageIndex veya secUserImageIndex değiştiğinde çalışır
        setFirstUserImage(require(`../../assets/images/${secim[firstUserImageIndex]}.png`));
        setSecUserImage(require(`../../assets/images/${secim[secUserImageIndex]}.png`));
    }, [firstUserImageIndex, secUserImageIndex]);
    
      const handleFirstUserImage = () => {
        // Bir sonraki resme geç
        setFUserImageIndex((prevIndex) => (prevIndex + 1) % secim.length);
      };

      const handleSecUserImage = () => {
        // Bir sonraki resme geç
        setSUserImageIndex((prevIndex) => (prevIndex + 1) % secim.length);
      };


  return (
    <div className='body'>
        <ProjectHeader /> 
        <div className='gameScreen'>
            <div className='userNameBox'>
                <span className='firstUserName'>{localStorage.getItem("firstUserName")}</span>
                <span className='secondUserName'>{localStorage.getItem("SecondUserName")}</span>
            </div>         
            <div className='gameBox'>
                <div className='firstPlayerBox'>
                    <img className='gameImg' src={firstUserImage} alt={`Image ${firstUserImageIndex}`} />
                    <button className='nextImgButton' onClick={handleFirstUserImage}>Sonraki Resim</button>
                    <button className='gameImgButton' onClick={handleFirstUserImage}>Seçim Yap</button>
                </div>
                <div className='sonucBox'>
                    {/* <img className='gameImg' style={{marginLeft:0}} src={currentImage} alt={`Image ${currentImageIndex}`} />   */}
                    {/* <button className='nextImgButton'  onClick={handleSecUserImage}>Tekrar Oyna</button>                   */}
                    {/* <span>Sonuç</span> */}
                </div>                   
                <div className='secPlayerBox'>
                    <img className='gameImg' src={secUserImage} alt={`Image ${secUserImageIndex}`} />
                    <button className='nextImgButton' onClick={handleSecUserImage}>Sonraki Resim</button>
                    <button className='gameImgButton' onClick={handleSecUserImage}>Seçim Yap</button>
                </div>                
            </div>   
        </div>
    </div>
  )
}
