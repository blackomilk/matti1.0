import Swiper from 'swiper/swiper-bundle.min.js'
import React, { Component } from 'react'
import { render } from 'react-dom';

class hrzs extends Component {
    
    componentDidMount() {
        // if (this.swiper) {
        //     this.swiper.slideTo(0, 0)
        //     this.swiper.destroy()
        //     this.swiper = null;
        // }
        this.swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            speed:2500,
            effect: 'coverflow',
            autoplay: {
                // delay: 3000,
                // waitForTransition: false,
            },//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true,
        });
    }

   render() {
       return (
           <>
           <div className="swiper-container">
               <div className="swiper-wrapper">
                   <div className="swiper-slide">
                   <img src="../hrzs.png"></img>
                   </div>
                   <div className="swiper-slide">
                       <img src="../hrzs2.png"></img>
                   </div>
               </div> 
               {/* <div className="swiper-pagination"></div>  */}
           </div>

       <style jsx global>{`
           html,body {
               padding: 0;
               margin: 0;
               font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
               Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
               background-color: azure;
           }
           * {
               box-sizing: border-box;
           }
       `}</style>
       <style jsx>{`
           .swiper-container {
               position: absolute;
               width: 100%;
               height: 100%;
           }
           .swiper-slide img {
               position: absolute;
               margin: 3% 5%;
               border-radius: 10px;
               width: 90%;
               height: 90%;
           }
       `}</style>
           </>
       )
   }
}
// const Hrzs = () => {
// }
export default hrzs;