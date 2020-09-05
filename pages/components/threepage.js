import React, { Component } from 'react'

class threePage extends Component {
    
  // componentDidMount() {
  //   window.addEventListener('resize',this.handleResize.bind(this))

  // }
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.handleResize.bind(this))
  // }

  // handleResize = e => {
  //   if(e.target.innerWidth <700) {
  //     const icon = document.getElementsByClassName('skills')
  //     icon.style.innerWidth="50px"
  //     // icon.style.heigh="50px"
  //     // icon.style.margin="3px"
  //     // icon.style.perspective="100px"
  //   }
  // }

   render() {
       return (
           <>
            <div className="body-main-page-three-bottom">
              <div className="body-main-page-three-title">
                <div>
                <strong>前端技能</strong>
                <br></br>
                <strong>- MY SKILLS -</strong>
                </div>
              </div>
              <div className="body-main-page-three-skills">
                <ul className="skills-ul">
                <li className="skills" id="icon">
                  <div className="skillsDiv">
                    <div className="skills-icon">
                        <img src="/next.jpg"></img>
                      </div>
                      <div className="skills-hide" style={{ background: '#000'}}>
                        <h2>next.js</h2>
                        <p>本项目基于next.js搭建</p>
                      </div>
                  </div>
                  </li>
                  <li className="skills" id="icon">
                    <div className="skillsDiv">
                      <div className="skills-icon">
                        <img src="/react.png"></img>
                      </div>
                      <div className="skills-hide" style={{background: '#282c34'}}>
                        <h2>React</h2>
                        <p>熟悉React，做过基于React项目</p>
                      </div>
                    </div>
                  
                  </li>
                  <li className="skills" id="icon">
                    <div className="skillsDiv"> 
                    <div className="skills-icon">
                      <img src="/jquery.png"></img>
                    </div>
                    <div className="skills-hide" style={{background: '#0769ad'}}>
                      <h2>jQuery</h2>
                      <p>小白。。</p>
                    </div>
                    </div>
                    
                  </li>
                  <li className="skills" id="icon">
                    <div className="skillsDiv"> 
                    <div className="skills-icon">
                      <img src="/html5.jpg"></img>
                    </div>
                    <div className="skills-hide" style={{background: '#fff', color: '#000'}}>
                      <h2>HTML5</h2>
                      <p>熟悉HTML5标签，了解HTML5新标签</p>
                    </div>
                    </div>
                    
                  </li>
                  <li className="skills" id="icon">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/css3.jpg"></img>
                    </div>
                    <div className="skills-hide" style={{background: '#fff', color: '#000'}}>
                      <h2>CSS3</h2>
                      <p>CSS小白，努力学习中</p>
                    </div>
                    </div>
                  
                  </li>
                  <li className="skills" id="icon">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/es6.jpg"></img>
                    </div>
                    <div className="skills-hide" style={{background: 'rgb(240,219,78)'}}>
                      <h2>ES6</h2>
                      <p>熟悉ES6语法，理解原型、作用域和this</p>
                    </div>
                    </div>
                 
                  </li>
                  <li className="skills" id="icon">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/vue.png"></img>
                    </div>
                    <div className="skills-hide" style={{background: '#808080'}}>
                      <h2>VUE</h2>
                      <p>了解VUE写法，正在充电</p>
                    </div>
                    </div>
                  
                  </li>
                  <li className="skills" id="icon">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/git.png"></img>
                    </div>
                    <div className="skills-hide" style={{background: '#f2be45'}}>
                      <h2>Git</h2>
                      <p>熟悉并经常使用Git管理代码</p>
                    </div>
                    </div>
                  
                  </li>
                  <li className="skills" id="icon">
                    <div className="skillsDiv"> 
                    <div className="skills-icon">
                      <img src="/bootstrap.png"></img>
                    </div>
                    <div className="skills-hide" style={{background: '#758a99'}}>
                      <h2>BootStrap</h2>
                      <p>正在充电</p>
                    </div>
                    </div>
                  
                  </li>
                  <li className="skills" id="icon">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/xiaochengxu.jpg"></img>
                    </div>
                    <div className="skills-hide" style={{background: 'rgb(170,239,133)'}}>
                      <h2>微信小程序</h2>
                      <p>持续充电</p>
                    </div>
                    </div>
                  
                  </li>
                  <li className="skills" id="icon">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/node.png"></img>
                    </div>
                    <div className="skills-hide" style={{background: '#333'}}>
                      <h2>Node.js</h2>
                      <p>电爆了</p>
                    </div>
                    </div>
                  
                  </li>
                  <li className="skills" id="icon">
                    <div className="skillsDiv">
                    <div className="skills-icon">
                      <img src="/webpack.png"></img>
                    </div>
                    <div className="skills-hide" style={{background: '#2b3a42'}}>
                      <h2>Webpack</h2>
                      <p>。。。</p>
                    </div>
                    </div>
                  
                  </li>
                </ul>
              </div>
              <div className="body-main-page-three-footer">
                <div>
                <strong>-----更多技能 正在充电-----</strong>
                </div>
              </div>
            </div>
           </>
       )
   }
}

export default threePage;