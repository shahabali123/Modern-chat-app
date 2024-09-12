import { useState } from 'react'
import './chatList.css'

const ChatList = () => {

  const [addMode, setAddMode] = useState(false)


  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className='add'
        onClick={() => setAddMode(!addMode)} />
      </div>
      {/* item starts */}
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User name</span>
          <p>Latest message</p>
        </div>
      </div>
      {/* item ends */}
      {/* item starts */}
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User name</span>
          <p>Latest message</p>
        </div>
      </div>
      {/* item ends */}
      {/* item starts */}
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User name</span>
          <p>Latest message</p>
        </div>
      </div>
      {/* item ends */}
      {/* item starts */}
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User name</span>
          <p>Latest message</p>
        </div>
      </div>
      {/* item ends */}
      {/* item starts */}
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User name</span>
          <p>Latest message</p>
        </div>
      </div>
      {/* item ends */}
      {/* item starts */}
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User name</span>
          <p>Latest message</p>
        </div>
      </div>
      {/* item ends */}
    </div>
  )
}

export default ChatList