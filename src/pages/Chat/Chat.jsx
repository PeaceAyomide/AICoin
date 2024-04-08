import React, { useLayoutEffect }  from 'react'
import Envelop from '../Chat/envelop.png'
import './Chat.css'
const Chat = () => {


    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);


  return (
      <div className='chatservice'><div className="chatwall">
          <div className="chatimg"><img src={Envelop} alt="" /></div>
          <div className="chatcontent">
          <h1>Contact  <span>Us</span></h1>
              <div className="namechat">
                  
                  <input type="text" placeholder='Name' style={{ outline: 'none' }}/>
              </div>
              <div className="emailchat">
                  <input type="text" placeholder='Email' style={{ outline: 'none' }}/>
              </div>
              <div className="messagechat">
              <textarea class="form-control" rows="10" placeholder="Message" name="message" required style={{ outline: 'none' }}></textarea>
              </div>
              <button>Send</button>
      </div>
      </div></div>
  )
}

export default Chat