import React, { Component } from 'react'
import Link from 'next/link'

class fourPage extends Component {
    
    componentDidMount() {
    
    }

   render() {
       return (
           <>
            <div className="body-main-page-four-bottom">
              <div className="body-main-page-four-title">
                <div>
                <strong>前端项目</strong>
                <br></br>
                <strong>- MY PROJECTS -</strong>
                </div>
              </div>
              <div className="body-main-page-four-projects">
                <ul className="projects-ul">
                  <Link href="/components/hrzs">
                  <a target='_block'>
                  <li className="projects">
                    <div className="projectsDiv">
                        <p>红创助手</p>
                    </div>
                  </li>
                  </a>
                  </Link>
                  <a href="https://nextjs-one-hazel.vercel.app/" target='_block'>
                  <li className="projects">
                  <div className="projectsDiv">
                      <p>我的简历网站</p>
                  </div>
                  </li>
                  </a>
                  <a href="#" target='_block'>
                  <li className="projects">
                  <div className="projectsDiv">
                      <p>敬请期待</p>
                  </div>
                  </li>
                  </a>
                </ul>
              </div>
              <div className="body-main-page-four-footer">
                <div>
                <strong>-----更多项目 正在进行-----</strong>
                </div>
              </div>
            </div>
           </>
       )
   }
}

export default fourPage;