import React, { useEffect, useRef, useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'


const Chat = () => {

  let [open, setOpen] = useState(false)
  let [text, setText] = useState("")
  let endRef = useRef(null)

  useEffect(()=>{
    endRef.current.scrollIntoView({behavior: "smooth"})
  }, []);


  const handleEmoji = (e) =>{
    setText((pre) => pre + e.emoji)
    setOpen(false)
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png"/>
          <div className="texts">
            <span>User name</span>
            <p>User description User description User description </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        {/* message start */}
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsam quo est, laborum vero incidunt neque, assumenda explicabo consectetur fuga, consequatur hic suscipit! Quae necessitatibus velit accusantium tenetur numquam commodi!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        {/* mesage end */}
        {/* message start */}
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsam quo est, laborum vero incidunt neque, assumenda explicabo consectetur fuga, consequatur hic suscipit! Quae necessitatibus velit accusantium tenetur numquam commodi!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        {/* mesage end */}
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsam quo est, laborum vero incidunt neque, assumenda explicabo consectetur fuga, consequatur hic suscipit! Quae necessitatibus velit accusantium tenetur numquam commodi!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        {/* mesage end */}
        {/* message start */}
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsam quo est, laborum vero incidunt neque, assumenda explicabo consectetur fuga, consequatur hic suscipit! Quae necessitatibus velit accusantium tenetur numquam commodi!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        {/* mesage end */}
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsam quo est, laborum vero incidunt neque, assumenda explicabo consectetur fuga, consequatur hic suscipit! Quae necessitatibus velit accusantium tenetur numquam commodi!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        {/* mesage end */}
        {/* message start */}
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ipsam quo est, laborum vero incidunt neque, assumenda explicabo consectetur fuga, consequatur hic suscipit! Quae necessitatibus velit accusantium tenetur numquam commodi!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        {/* mesage end */}
        <div ref={endRef}></div>

      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input 
        type="text" 
        placeholder='Type a message...'
        onChange={(e)=> setText(e.target.value)}
        value={text}
        />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={()=>setOpen(!open)}/>
          <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat