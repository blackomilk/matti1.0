import Head from 'next/head'
import React, { Component } from 'react'
import Swiper from 'swiper/swiper-bundle.min.js'
import OnePage from './components/onepage'
import TwoPage from './components/twopage'
import ThreePage from './components/threepage'
import FourPage from './components/fourpage'
import FivePage from './components/fivepage'

class Home extends Component {
  constructor() {
    super();
    this.twoPage = React.createRef();
    this.state = {
      isUp : true,
      bgmImg : '/timg.jpeg',
    }
  }

  componentDidMount() {

    let a=this;
    
    this.swiper = new Swiper('.swiper-container', {
        grabCursor : true,
        direction: 'vertical',
            speed:777,//切换速度
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                dynamicMainBullets: 2,
            },
            roundLengths : true, //宽高取整
            mousewheel: true,//开启鼠标切换
            sensitivity: 5,//鼠标滚轮的灵敏度
            rouchRatio: 1,
            disableOnInteraction: true,
            on: {
              slideChangeTransitionEnd: function(){
                if(this.activeIndex === 1 && a.state.isUp === true) {
                  a.textIsUp()
                }
              },
              // progress: function(swiper,progress){
              //   console.log(progress);
              // },  
            },
            breakpoints: { 
              320: {  //当屏幕宽度大于等于320
                // slidesPerView: 2,
                // spaceBetween: 10
              },
              768: {  //当屏幕宽度大于等于768 
                // slidesPerView: 3,
                // spaceBetween: 20
              },
              1409: {  //当屏幕宽度大于等于1280
                // slidesPerView: 4,
                // spaceBetween: 30
              }
            }

    });
}
    textIsUp() {
      this.twoPage.current.PageText();
      this.setState({
        isUp:false
      })
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
    // setmusicImg('/timg.jpeg')
    audio.play();
    img.style.animationPlayState = "running"
    this.setState({
      bgmImg: '/timg.jpeg'
    })
  } else {
    audio.pause();
    this.setState({
      bgmImg: '/zttimg.jpg'
    })
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
        <div className="music" id="bgcm" onClick={() => this.handleMusicUp()}>
          <audio autoPlay  loop id="bgc">
            <source src="/MJ.mp3" type="audio/mpeg"></source>
          </audio>
          <img src={this.state.bgmImg} className="music-img"></img> 
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
                <TwoPage ref={this.twoPage}/>
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
