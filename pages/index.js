import Head from 'next/head'
import React, { Component } from 'react'
import Swiper from 'swiper/swiper-bundle.min.js'
import OnePage from './components/onepage'
import TwoPage from './components/twopage'
import ThreePage from './components/threepage'
import FourPage from './components/fourpage'
import FivePage from './components/fivepage'

class Home extends Component {

  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {
        grabCursor : true,
        direction: 'vertical',
            speed:2500,
            // autoplay: {
            //     // delay: 3000,
            //     // waitForTransition: false,
            // },//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                dynamicMainBullets: 2,
            },
            mousewheel: true,
            sensitivity: 5,
            disableOnInteraction: true,
            // effect : 'fade',
            // fadeEffect: {
            //   crossFade: true,
            // }

    });
}

  handleMusicUp = ()  =>{
  const audio = document.getElementById('bgc');
  const img = document.getElementById('bgcm');
  console.log("初始状态",img.style.animationPlayState)
  if(img.style.animationPlayState = "running") {
  img.style.animationPlayState = "paused"
  img.style.webkitAnimationPlayState = "paused"
  // console.log("暂停状态",img.style.animationPlayState)
  } 
  if(audio != null) {
  if(audio.paused) {
    setmusicImg('/timg.jpeg')
    audio.play();
    img.style.animationPlayState = "running"
  } else {
    setmusicImg('/bg.jpg')
    audio.pause();
    }
  }
}


  render() {
    return (
      // const [musicImg,setmusicImg] = useState('/timg.jpeg');
    <>
    <Head>
      <title>Matti</title>
      <link rel="icon" href="/matti.png" />
    </Head>
    <main>
      <header>
        <div className="info">
          <img src="/matti.png" className="icon"></img>
        </div>
        <div className="name">
          <span>Matti</span>
        </div>
        <div className="music" id="bgcm" onClick={() => handleMusicUp()}>
          <audio autoPlay  loop id="bgc">
            {/* <source src="/MJ.mp3" type="audio/mpeg"></source> */}
          </audio>
          {/* <img src={musicImg} className="music-img"></img>  */}
        </div>
      </header>
        <div className='swiper-container'>
        {/* // className="body-main" 
        // id="swiper-pc"  */}
          <div className='swiper-wrapper'>
          {/* className="body-main-page"  */}
            <div className="swiper-slide">
              <div className="body-main-page-one">
                <OnePage />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="body-main-page-two">
                <TwoPage />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="body-main-page-three">
                <ThreePage />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="body-main-page-four">
               <FourPage />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="body-main-page-five">
                <FivePage />
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>   
        </div>
    </main>
   </>
    )
  }
}  
export default Home
