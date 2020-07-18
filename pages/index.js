import Head from 'next/head'
import Link from 'next/link'

let isMusicUp = true;

const handleMusicUp = ()  =>{
  const audio = document.getElementById('bgc');
  // const audio = document.getElementsByTagName('source')
  if(audio != null) {
    if(audio.paused) {
      audio.play();
      isMusicUp = false;
      console.log("sasasasa",isMusicUp)
    } else {
      audio.pause();
      console.log("sasasasa")
    }
  }
}



const Home = () => (
  <div className="container">
    <Head>
      <title>Matti</title>
      <link rel="icon" href="/matti.png" />
    </Head>

    <main>
        {/* <h1>
          <Link href="/post/first-post"><a>old</a></Link> */}
        {/* </h1> */}
        
        <header>
            <div className="info">
              <img src="/matti.png" className="icon"></img>
            </div>
            <div className="name">
              <span>Matti</span>
            </div>
            <div className="music" onClick={() => handleMusicUp()}>
            <audio autoPlay  loop id="bgc">
              <source src="/bgm.mp3" type="audio/mpeg"></source>
            </audio>
            {isMusicUp === false ? 
             <img src="/bg.jpg" className="music-img"></img> : 
             <img src="/timg.jpeg" className="music-img"></img>
            }
          </div>
        </header>
        <div className="body-main">
          <div className="body-main-page">
            <div className="body-main-page-one">
              <div className="body-main-page-one-bottom">
                <div className="body-main-page-one-bottomDown">
                <div className="body-main-page-one-bottomUp">
                  <div className="body-main-page-one-bottomUp-logo">
                    <img src="/mattti.png"></img>
                  </div>
                  <div className="body-main-page-one-bottomUp-title">
                    <p>Hello I‘m Matti</p>
                    <p>正在努力成为一名前端开发工程师</p>
                    <p>@2020.07.18,星期六</p>
                  </div>
                </div>
                </div>
                
              </div>
            </div>
            <div className="body-main-page-two"></div>
            <div className="body-main-page-three"></div>
            <div className="body-main-page-four"></div>
            <div className="body-main-page-five"></div>
          </div>
          {/* <div className="main-one">
          <div className="main-one-first">
                {/* <img src=""></img> */}
                {/* <h1>Hello I.am Matti</h1>
              </div> */}
          {/* </div> */} */}
        </div>
        
            
    </main>

    <footer>
      
    </footer>
    <style jsx>
      {`
        // h1 {
        //   font-size: 10em;
        //   line-height: 1em;
        //   color: #FFFFFF;
        //   background-color: transparent;
        // }
        header {
          // position:fixed;
          width: 100%;
          height: 10%;
          margin-top: 30px
        }
        header div {
          display: inline-block;
        }
        header img {
          height: 50px;
          border: 1px solid #FFF;
          border-radius: 50%;
          box-shadow: 0 0 5px #FFF;
        }
        .info {
          float: left;
          margin-left: 3%;
          margin-right: 10px;
          height: 100%;
        }
        .name {
          background-color: #FFF;
          font-size: 20px;
          font-weight: 500;
          padding: 5px 15px;
          border-radius: 10px;
          margin-top: 10px;
        }
        .music {
          float: right;
          margin-right: 3%;
          cursor: pointer;
          -webkit-animation: rotate 11s linear infinite;
          animation: rotate 11s linear infinite;
          // background-color: #FFF;
        }
        .music img {
          margin: 0 auto;
        }
        .music span {
          color: #FFFFFF;
        }
        .body-main {
          width: 100%;
          height: calc(100vh - 10%);
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0px;
          z-index: 1;
        }
        .body-main-page {
          transition-duration: 0ms;
          transform: translate3d(0px, 0px, 0px);
          // flex-direction: colum;
          position: relative;
          width: 100%;
          height: 100%;
          transition-property: transform,-webkit-transform;
          box-sizing: content-box;
        }
        .body-main-page-one {
          height: 100%;
          width: 100%;
          position: relative;
        }
        .body-main-page-one-bottom {
          width: 100%;
          height: 100%;
          margin-right: 5%;
          z-index: 1;

        }
        .body-main-page-one-bottomDown {
          // background-color: #6F00D2;
          width: 50%;
          height: 70%;
          margin: 15vh auto;
          padding: 30px;
          border-radius: 17px;
          z-index: 1;
        }
        .body-main-page-one-bottomUp {
          margin: 0 auto;
          border-radius: 21px;
          transition: border .4s ease;
        }
        .body-main-page-one-bottomUp-logo {
          position: relative;
          margin: 10px auto 30px;
          width: 170px;
          height: 170px;
          text-align: center;
          background-color: transparent;
          padding: 20px;
          box-shadow: 8px 8px 11px -11px rgba(255,255,255,0.3),
            -8px -8px 31px -10px rgba(255,255,255,.15);
          transition: all 1s;
          overflow: hidden;
          border-radius: 50%;
          cursor: pointer;
        }
        .body-main-page-one-bottomUp-logo img {
          width: 100%;
          margin: 5px;
          border-radius: 50%;
        }
        .body-main-page-one-bottomUp-logo:after {
          content: "";
          position: absolute;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          background-image: linear-gradient(-40deg,transparent,transparent 70px,
            rgba(255,255,255,0.5) 90px,rgba(255,255,255,0.5) 110px,transparent 130px);
          background-position: -170px -170px;
          background-repeat: no-repeat;
          -webkit-transition: all 1s;
          transition: all 1s;
        }
        .body-main-page-one-bottomUp-logo:hover {
          box-shadow: 0 0px 20px rgba(255,255,255,0.5);
          background-color: #FFFF;
          transition: all 1.7s;
        }
        .body-main-page-one-bottomUp-logo:hover::after { 
          background-position: 170px 170px;
        }
        
        .body-main-page-one-bottomUp-title p:first-child {
          font-size: 7em;
          color: transparent;
          background: linear-gradient(30deg, #3388EE, #fff, #3388EE);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-animation: textMove 6s linear infinite;
          animation: textMove 6s linear infinite;
        }
        .body-main-page-one-bottomUp-title {
          margin: auto;
          width: 70%;
          text-align: center;
          font-size: 0.5em;
          // background-color: transparent;
          color: transparent;
          background: linear-gradient(30deg, #3388EE, #fff, #3388EE);
          background-clip: text;
          -webkit-background-clip: text;
          // -webkit-animation: textMove 6s linear infinite;
          // animation: textMove 6s linear infinite;
        }
        @keyframes textMove
          {
            from {
              background-position: 0 0;
          }
          to {
              background-position: 2000px 0;
          }
          }

        @-webkit-keyframes textMove /*Safari and Chrome*/
        {
          from {
            background-position: 0 0;
        }
        to {
            background-position: 2000px 0;
        }
        }
        @-webkit-keyframes rotate {
          0% {
              -webkit-transform: rotate(0deg);
          }
          50% {
              -webkit-transform: rotate(180deg);
          }
          100% {
              -webkit-transform: rotate(360deg);
          }
      }
      @keyframes rotate {
          0% {
              transform: rotate(0deg);
          }
          50% {
              transform: rotate(180deg);
          }
          100% {
              transform: rotate(360deg);
          }
      }
      `}
    </style>
    <style jsx global>
      {`
      html,body,div,h1 {
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #000000;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        height: 100%;
      }
      * {
        box-sizing: border-box;
      }
      `}
    </style>
  </div>
)

export default Home
