import React from 'react'
import './detail.css'
import { auth, db } from '../../lib/firebase'
import { useChatStore } from '../../lib/chatStore'
import { useUserStore } from '../../lib/userStore'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Detail = () => {

  const {chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock} = useChatStore();

  const {currentUser} = useUserStore();


  const handleBlock = async()=>{
    if(!user) return;
    if(isCurrentUserBlocked || isReceiverBlocked) return;

    const userDocRef = doc(db, "users", currentUser.id)

    try{
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      })
      changeBlock();
      }catch(err){
        console.log(err)
      }
  }


  return (
    <div className='detail'>
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>User description User description</p>
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
        <button onClick={handleBlock} disabled={isCurrentUserBlocked || isReceiverBlocked}>{
          
          isCurrentUserBlocked ? "You are blocked" : isReceiverBlocked ? "User blocked" : "Block User"
          }</button>
        <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail