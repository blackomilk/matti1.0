import React, { Component } from 'react'

class twoPage extends Component {
    
    componentDidMount() {
      this.PageText()
    }

    PageText = () => {
      const option = {
        strings: ["-您好，我叫司勇行"],
        typeSpeed: 80,
        showCursor: false,
      }
      const options = {
        strings: ["一名行走在前端路上的程序猿，自然交互，恰当视觉，渴望打造一款还不错的产品与您分享"],
        typeSpeed: 80,
        showCursor: false,
        startDelay: 1000 // 延时一秒后在执行
      }
      const optionss = {
        strings: ["目前就职于国内知名儿童健康管理公司，从事网络运维相关工作，闲暇之余学习前端知识"],
        typeSpeed: 80,
        showCursor: false,
        startDelay: 5500 // 延时一秒后在执行
    
      }
      const optionsss = {
        strings: ["曾经使用React+es6+TypeScrip+Ant Desgin负责某红人项目的管理后台搭建工作"],
        typeSpeed: 80,
        showCursor: false,
        startDelay: 9500 // 延时一秒后在执行
      }
      const optionssss = {
        strings: ["此项目使用Next.js+React搭建"],
        typeSpeed: 80,
        showCursor: false,
        startDelay: 15000 // 延时一秒后在执行
      }
      // const typed = new Typed(".text", option);
      // const typed2 = new Typed(".text2", options);
      // const typed3 = new Typed(".text3", optionss);
      // const typed4 = new Typed(".text4", optionsss);
      // const typed5 = new Typed(".text5", optionssss);
    }
   render() {
       return (
           <>
            <div className="body-main-page-two-bottom">
                  <div className="body-main-page-two-bottomUp-about">
                    <strong>关于我</strong>
                    <br></br>
                    <strong>- ABOUT ME -</strong>
                  </div>
                  <div className="body-main-page-two-bottomUp-title">
                    <p className="text"></p>
                    <p className="text2"></p>
                    <p className="text3"></p>
                    <p className="text4"></p>
                    <p className="text5"></p>
                  </div>
              </div>
           </>
       )
   }
}

export default twoPage;