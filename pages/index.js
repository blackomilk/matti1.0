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
                    <p>@2020</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="body-main-page-two">
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
            <div className="body-main-page-three">
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
            <div className="body-main-page-four">
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
            <div className="body-main-page-five">
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
          </div>
        </div>          
    </main>
    <footer>
    </footer>
  </div>
)

export default Home
