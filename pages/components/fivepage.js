import React, { Component } from 'react'
import Link from 'next/link'

class FivePage extends Component {
    
    constructor() {
      super();

      this.state = {
        icon : {
          0 : 'weixin',
          1 : 'github',
          2 : 'weibo-circle',
          3 : 'qq-circle',
          4 : 'twitter-circle',
          5 : 'alipay-circle',
        },
        iconImg : '/wc.jpeg',
      }
    }
    componentDidMount() {
    }

    handleIcon = (iconImg) => {
      const iconImgIsUp = document.getElementById('iconImgUp')
      iconImgIsUp.style.display="block"
      if(iconImg == this.state.icon[0]) {
        this.setState({
          iconImg: '/we.jpeg'
        })
      } else if(iconImg == this.state.icon[1]) {
        window.open("https://github.com/blackomilk")
      } else if(iconImg == this.state.icon[2]) {
        window.open("https://weibo.com/5495186523/profile?topnav=1&wvr=6&is_all=1")
      } else if(iconImg == this.state.icon[3]) {
        window.open("/components/qqTalk")
      } else if(iconImg == this.state.icon[4]) {
        window.open("https://twitter.com/Siolackofisln")
      } else {
        this.setState({
          iconImg: '/zfb.png'
        })
      }
    }

    handleIconImg = () => {
      
    }

   render() {
       return (
           <>
           <div className="body-main-page-five-bottom">
           <div className="body-main-page-five-title">
             <div>
             <strong>联系我</strong>
             <br></br>
             <strong>- CONTACT ME -</strong>
             </div>
           </div>
           <div className="body-main-page-five-connect">
               <div className="pr">
                 <div className="con_bg">
                   <div className="section3">
                     <div className="onClickAfterImage" id="iconImgUp">
                       <img src={this.state.iconImg}></img>
                     </div>
                     <div className="u_fr">
                       <div className="ui_base u_p3d">
                         <div className="ball_c"></div>
                         <div className="base u_p3d">
                           <div className="ball_base u_p3d ball_1">
                             <div className="ball" onClick={()=> this.handleIcon('weixin')}>
                             <svg viewBox="64 64 896 896" 
                                  focusable="false" 
                                  className="" 
                                  data-icon="wechat" 
                                  width="1em" 
                                  height="1em" 
                                  fill="currentColor" 
                                  aria-hidden="true">
                                    <path d="M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 
                                    150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 019.1 17.6c0 2.4-.5 
                                    4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 
                                    10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 
                                    68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 
                                    295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 
                                    0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 
                                    43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 
                                    0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 
                                    88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 
                                    006.4-2.6 9 9 0 002.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 
                                    3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 
                                    19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 
                                    36.08 0 01-36 35.9z">
                                    </path>
                              </svg>
                             </div>
                           </div>
                           <div className="ball_base u_p3d ball_2">
                           <div className="ball" onClick={()=> this.handleIcon('github')}>
                             {/* <img src=""> */}
                             <svg viewBox="64 64 896 896" 
                                  focusable="false" 
                                  className="" 
                                  data-icon="github" 
                                  width="1em" 
                                  height="1em" 
                                  fill="currentColor" 
                                  aria-hidden="true">
                                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 
                                    885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 
                                    15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 
                                    62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 
                                    17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 
                                    48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 
                                    45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 
                                    67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 
                                    48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 
                                    9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z">
                                    </path>
                              </svg>
                             {/* </img> */}
                             </div>
                           </div>
                           <div className="ball_base u_p3d ball_3">
                           <div className="ball" onClick={()=> this.handleIcon('weibo-circle')}>
                           <svg viewBox="64 64 896 896" 
                                focusable="false" 
                                className="" 
                                data-icon="weibo-circle" 
                                width="1em" 
                                height="1em" 
                                fill="currentColor" 
                                aria-hidden="true">
                                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 
                                  448 448 448 448-200.6 448-448S759.4 64 512 64zm-44.4 
                                  672C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 
                                  82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 
                                  14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 
                                  105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 
                                  11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 
                                  156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 00-7.2-34.1 
                                  34.68 34.68 0 00-33.1-10.7 18.24 18.24 0 01-7.6-35.7c24.1-5.1 
                                  50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 
                                  01-22.9 11.7 18.18 18.18 0 01-11.8-22.9zm106 34.3s0 .1 0 0a21.1 
                                  21.1 0 01-26.6 13.7 21.19 21.19 0 01-13.6-26.7c11-34.2 
                                  4-73.2-21.7-101.8a104.04 104.04 0 00-98.9-32.1 21.14 21.14 0 
                                  01-25.1-16.3 21.07 21.07 0 0116.2-25.1c49.4-10.5 102.8 4.8 139.1 
                                  45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 
                                  125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 
                                  154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 
                                  42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 
                                  68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-93-32.2c-14.2-5.9-32.4.2-41.2 
                                  13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 
                                  8.8-14.3 4.2-30.6-10.1-36.7zm34.9-14.5c-5.4-2.2-12.2.5-15.4 
                                  5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 
                                  1-11.8-4.5-13.8z">
                                  </path>
                              </svg>
                             </div>
                           </div>
                           <div className="ball_base u_p3d ball_4">
                           <div className="ball" onClick={()=> this.handleIcon('qq-circle')}>
                           <svg viewBox="64 64 896 896" 
                                focusable="false" 
                                className="" 
                                data-icon="qq-circle" 
                                width="1em" 
                                height="1em" 
                                fill="currentColor" 
                                aria-hidden="true">
                                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 
                                  448 448-200.6 448-448S759.4 64 512 64zm210.5 612.4c-11.5 
                                  1.4-44.9-52.7-44.9-52.7 0 31.3-16.2 72.2-51.1 101.8 16.9 
                                  5.2 54.9 19.2 45.9 34.4-7.3 12.3-125.6 7.9-159.8 4-34.2 
                                  3.8-152.5 8.3-159.8-4-9.1-15.2 28.9-29.2 
                                  45.8-34.4-35-29.5-51.1-70.4-51.1-101.8 0 
                                  0-33.4 54.1-44.9 52.7-5.4-.7-12.4-29.6 9.4-99.7 
                                  10.3-33 22-60.5 40.2-105.8-3.1-116.9 45.3-215 160.4-215 113.9 0 
                                  163.3 96.1 160.4 215 18.1 45.2 29.9 72.8 40.2 105.8 21.7 70.1 
                                  14.6 99.1 9.3 99.7z">
                                  </path>
                            </svg>
                             </div>
                           </div>
                           <div className="ball_base u_p3d ball_5">
                           <div className="ball" onClick={()=> this.handleIcon('twitter-circle')}>
                           <svg viewBox="64 64 896 896" 
                                focusable="false" 
                                className="" 
                                data-icon="twitter-circle" 
                                width="1em" 
                                height="1em" 
                                fill="currentColor" 
                                aria-hidden="true">
                                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 
                                  448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 
                                  337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 
                                  315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 
                                  1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 
                                  17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 
                                  8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 
                                  5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 
                                  548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 
                                  70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 
                                  64-17.3-15.1 22.2-34 41.9-55.7 57.6z">
                                  </path>
                            </svg>
                             </div>
                           </div>
                           <div className="ball_base u_p3d ball_6">
                           <div className="ball" onClick={()=> this.handleIcon('alipay-circle')}>
                           <svg viewBox="64 64 896 896" 
                                focusable="false" 
                                className="" 
                                data-icon="alipay-circle" 
                                width="1em" 
                                height="1em" 
                                fill="currentColor" 
                                aria-hidden="true">
                                  <path d="M308.6 545.7c-19.8 2-57.1 10.7-77.4 
                                  28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 
                                  199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zm460.5 
                                  67c100.1 33.4 154.7 43 166.7 44.8A445.9 445.9 0 
                                  00960 512c0-247.4-200.6-448-448-448S64 264.6 64 
                                  512s200.6 448 448 448c155.9 0 293.2-79.7 
                                  373.5-200.5-75.6-29.8-213.6-85-286.8-120.1-69.9 
                                  85.7-160.1 137.8-253.7 137.8-158.4 0-212.1-138.1-137.2-229 
                                  16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 
                                  18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 
                                  13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 
                                  47.5 17.1 90.1 33.3 121.8 43.9z">
                                  </path>
                            </svg>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
           </div>
           <div className="body-main-page-five-footer">
             <div>
             <strong>© Matti | 正在路上</strong>
             </div>
           </div>
         </div>
           </>
       )
   }
}

export default FivePage;