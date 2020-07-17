import Head from 'next/head'
import Link from 'next/link'

let isMusicUp = 0;
const handleMusicUp = ()  =>{
  const audio = document.getElementById('bgc');
  // const audio = document.getElementsByTagName('source')
  if(audio != null) {
    if(audio.paused) {
      audio.play();
      isMusicUp = isMusicUp+1;
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
      <audio autoPlay loop id="bgc">
        <source src="/bgm.mp3" type="audio/mpeg"></source>
      </audio>
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
              <img src={isMusicUp==0? "/bg.jpg" : ""} className="music-img"></img>
            </div>
        </header>
        <div>
          <div>
            <div className="first-main">
              <img src=""></img>
              <h1>Hello I.am Matti</h1>
            </div>
          </div>
        </div>
    </main>

    <footer>
      
    </footer>
    <style jsx>
      {`
        h1 {
          font-size: 70px;
          color: #FFFFFF;
          background-color: #000;
        }
        header {
          width: 100%;
          height: 100px;
          padding-top: 20px
        }
        header div {
          display: inline-block;
        }
        .info {
          float: left;
          margin-left: 5%;
          height: 100%;
        }
        header img {
          height: 50px;
          border: 1px solid #FFF;
          border-radius: 50%;
          box-shadow: 0 0 15px #FFF;
          margin: 0px 10px 0px 0px;
        }
        .name {
          position: absolute;
          background-color: #FFF;
          font-size: 20px;
          font-width: 500;
          padding: 5px 15px;
          border-radius: 10px;
          margin-top: 10px;
        }
        .music {
          float: right;
          margin-right: 5%;
          cursor: pointer;

        }
        .first-main {
          background-color: #f0f0f0;
          width: 800px;
          margin: 10vh auto;
        }
      `}
    </style>
    <style jsx global>
      {`
      html,body {
        margin: 0;
        padding: 0;
        background-color: #000000;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      * {
        box-sizing: border-box;
      }
      `}
    </style>
  </div>
)

export default Home
