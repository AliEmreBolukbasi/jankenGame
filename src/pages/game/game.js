import React, {useState,useEffect} from 'react'
import './game.css'
import ProjectHeader from '../../components/layout/projectHeader/projectHeader' 
import ResultCalculate from '../../utils/resultCalculate/resultCalculate.js';
import RootStore from '../../store/rootStore.ts';

export default function Game() {
    const [firstUserImageIndex, setFUserImageIndex] = useState(0);
    const [firstUserImage, setFirstUserImage] = useState('');
    const [secUserImageIndex, setSUserImageIndex] = useState(0);
    const [secUserImage, setSecUserImage] = useState('');
    const [firstUserDisable, setFirstUserDisable] = useState(false);
    const [secUserDisable, setSecUserDisable] = useState(false);    
    const pngNameList = RootStore.ContentStore.pngName;
       
    useEffect(() => {
        // Sayfa yüklendiğinde veya firstUserImageIndex veya secUserImageIndex değiştiğinde çalışır
        const firstUserImageName = pngNameList[firstUserImageIndex]?.name || '';
        const secUserImageName = pngNameList[secUserImageIndex]?.name || '';
    
        setFirstUserImage(require(`../../assets/images/${firstUserImageName}.png`));
        setSecUserImage(require(`../../assets/images/${secUserImageName}.png`));
    }, [firstUserImageIndex, secUserImageIndex]);
    
    const handleFirstUserImage = () => {
        // Bir sonraki resme geç
        setFUserImageIndex((prevIndex) => (prevIndex + 1) % pngNameList.length);
    };

    const handleSecUserImage = () => {
        // Bir sonraki resme geç
        setSUserImageIndex((prevIndex) => (prevIndex + 1) % pngNameList.length);
    };

    const selectImgUser = (value) =>{
        if(value == "First"){
            setFirstUserDisable(true)
        }else{
            setSecUserDisable(true)
        }       
    };

    const newGame = () => {
        setFUserImageIndex(0);
        setSUserImageIndex(0);
        setFirstUserDisable(false)
        setSecUserDisable(false)
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
                    <button disabled={firstUserDisable} className='nextImgButton' onClick={handleFirstUserImage}>Sonraki Resim</button>
                    <button className='gameImgButton' onClick={e => selectImgUser("First")}>Seçim Yap</button>
                </div>
                <div className='sonucBox'>
                    <button className='nextImgButton'  onClick={newGame}>Tekrar Oyna</button>  
                    {firstUserDisable && secUserDisable && <ResultCalculate firstValue={firstUserImageIndex} secValue={secUserImageIndex} pngNameList={pngNameList}/>   }
                </div>                   
                <div className='secPlayerBox'>
                    <img className='gameImg' src={secUserImage} alt={`Image ${secUserImageIndex}`} />
                    <button disabled={secUserDisable} className='nextImgButton' onClick={handleSecUserImage}>Sonraki Resim</button>
                    <button className='gameImgButton' onClick={e => selectImgUser("Second")}>Seçim Yap</button>
                </div>                
            </div>   
        </div>
    </div>
  )
}
