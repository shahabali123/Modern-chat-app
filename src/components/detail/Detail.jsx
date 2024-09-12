import React from 'react'
import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>User name</h2>
        <p>User description User description User de</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            {/* photo item starts */}
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
              <span>pgoto-20233.png</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>
            </div>
            {/* photo item end */}
            {/* photo item starts */}
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
              <span>pgoto-20233.png</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>
            </div>
            {/* photo item end */}
            {/* photo item starts */}
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
              <span>pgoto-20233.png</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>
            </div>
            {/* photo item end */}
           {/* photo item starts */}
           <div className="photoItem">
              <div className="photoDetail">
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
              <span>pgoto-20233.png</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>
            </div>
            {/* photo item end */}
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  )
}

export default Detail