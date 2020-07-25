import Head from 'next/head'
import React, { useState } from 'react'


const Home = () => {
  const [musicImg,setmusicImg] = useState('/timg.jpeg');

  // a()
  const handleMusicUp = ()  =>{
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

  return (
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
              <source src="/bgm.mp3" type="audio/mpeg"></source>
            </audio>
             <img src={musicImg} className="music-img"></img> 
          </div>
        </header>
        <div className='swiper-container' className="body-main" id="swiper-pc" >
          <div className='swiper-wrapper' className="body-main-page" >
            <div className="swiper-slide" className="body-main-page-one" >
              <div className="body-main-page-one-bottom">
                <div className="body-main-page-one-bottomDown">
                <div className="body-main-page-one-bottomUp">
                  <div className="body-main-page-one-bottomUp-logo">
                    <img src="/mattti.png"></img>
                  </div>
                  <div className="body-main-page-one-bottomUp-title">
                    <p>Hello I‘m Matti</p>
                    <p>正在努力成为一名前端开发工程师</p>
                    <p>@2020</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" className="body-main-page-two">
            <div className="body-main-page-two-bottom">
                <div className="body-main-page-two-bottomDown">
                <div className="body-main-page-two-bottomUp">
                  <div className="body-main-page-two-bottomUp-logo">
                    <img src="/mattti.png"></img>
                  </div>
                  <div className="body-main-page-two-bottomUp-title">
                    <p>Hello I‘m Matti</p>
                    <p>正在努力成为一名前端开发工程师</p>
                    <p>@2020</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" className="body-main-page-three">
            
            </div>
            <div className="swiper-slide" className="body-main-page-four">
            </div>
            <div className="swiper-slide" className="body-main-page-five">
            
            </div>
          </div>
        </div>
        {/* <div className="swiper-pagination">
            <span className="swiper-pagination-bullet">aaa</span>
            <span className="swiper-pagination-bullet">aaa</span>
            <span className="swiper-pagination-bullet">aaa</span>
            <span className="swiper-pagination-bullet">aaa</span>
            <span className="swiper-pagination-bullet">aaa</span>
        </div>    */}
    </main>
    <footer></footer>     

   </>
  )
}

export default Home
