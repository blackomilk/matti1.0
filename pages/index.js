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
              <source src="/MJ.mp3" type="audio/mpeg"></source>
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
                  <div className="body-main-page-two-bottomUp-about">
                    <strong>关于我</strong>
                    <br></br>
                    <strong>- ABOUT ME -</strong>
                  </div>
                  <div className="body-main-page-two-bottomUp-title">
                    <strong>-您好，我叫司勇行</strong>
                    <p>一名行走在前端路上的程序猿，拥有对技术和视觉的双重兴趣，渴望打造一款还不错的产品与您分享</p>
                    <p>目前就职于国内知名儿童健康管理公司，从事网络技术相关工作，闲暇之余学习前端知识</p>
                    <p>曾经使用React+es6+TypeScrip+Ant Desgin负责某红人项目的管理后台搭建工作</p>
                  </div>
              </div>
            </div>
            <div className="swiper-slide" className="body-main-page-three">
            <div className="body-main-page-three-bottom">
            <div className="body-main-page-three-title">
                <strong>前端技能</strong>
                <br></br>
                <strong>- MY SKILLS -</strong>
              </div>
              <div className="body-main-page-three-skills">
                <ul className="skills-ul">
                <li className="skills">
                  <div className="skillsDiv">
                    <div className="skills-icon">
                        <img src="/next.jpg"></img>
                      </div>
                      <div className="skills-hide">
                        <h2>next.js</h2>
                        <p>本项目基于next.js搭建</p>
                      </div>
                  </div>
                  </li>
                  <li className="skills">
                    <div className="skillsDiv">
                      <div className="skills-icon">
                        <img src="/react.png"></img>
                      </div>
                      <div className="skills-hide">
                        <h2>React</h2>
                        <p>熟悉React，做过基于React项目</p>
                      </div>
                    </div>
                  
                  </li>
                  <li className="skills">
                    <div className="skillsDiv"> 
                    <div className="skills-icon">
                      <img src="/jquery.png"></img>
                    </div>
                    <div className="skills-hide">
                      <h2>jQuery</h2>
                      <p>熟悉jQuery常用属性和方法</p>
                    </div>
                    </div>
                    
                  </li>
                  <li className="skills">
                    <div className="skillsDiv"> 
                    <div className="skills-icon">
                      <img src="/html5.jpg"></img>
                    </div>
                    <div className="skills-hide">
                      <h2>HTML5</h2>
                      <p>熟悉HTML5的标签，了解HTML5的新标签</p>
                    </div>
                    </div>
                    
                  </li>
                  <li className="skills">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/css3.jpg"></img>
                    </div>
                    <div className="skills-hide">
                      <h2>CSS3</h2>
                      <p>熟悉CSS3属性，会用3D动画打造COOl的页面交互</p>
                    </div>
                    </div>
                  
                  </li>
                  <li className="skills">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/es6.jpg"></img>
                    </div>
                    <div className="skills-hide">
                      <h2>ES6</h2>
                      <p>熟悉ES6语法，理解原型、作用域和this</p>
                    </div>
                    </div>
                 
                  </li>
                  <li className="skills">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/vue.png"></img>
                    </div>
                    <div className="skills-hide">
                      <h2>VUE</h2>
                      <p>了解VUE写法，正在充电</p>
                    </div>
                    </div>
                  
                  </li>
                  <li className="skills">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/git.png"></img>
                    </div>
                    <div className="skills-hide">
                      <h2>Git</h2>
                      <p>熟悉并经常使用Git管理代码</p>
                    </div>
                    </div>
                  
                  </li>
                  <li className="skills">
                    <div className="skillsDiv"> 
                    <div className="skills-icon">
                      <img src="/bootstrap.png"></img>
                    </div>
                    <div className="skills-hide">
                      <h2>BootStrap</h2>
                      <p>正在充电</p>
                    </div>
                    </div>
                  
                  </li>
                  <li className="skills">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/xiaochengxu.jpg"></img>
                    </div>
                    <div className="skills-hide">
                      <h2>微信小程序</h2>
                      <p>持续充电</p>
                    </div>
                    </div>
                  
                  </li>
                  <li className="skills">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/node.png"></img>
                    </div>
                    <div className="skills-hide">
                      <h2>Node.js</h2>
                      <p>电爆了</p>
                    </div>
                    </div>
                  
                  </li>
                  <li className="skills">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/webpack.png"></img>
                    </div>
                    <div className="skills-hide">
                      <h2>Webpack</h2>
                      <p>。。。</p>
                    </div>
                    </div>
                  
                  </li>
                </ul>
              </div>
              <div>
                <strong>更多技能 正在充电</strong>
              </div>
            </div>
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
