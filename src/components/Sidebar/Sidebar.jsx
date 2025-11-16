import "./Sidebar.css";
import { assets } from "../../assets/images/assets";
import { useState, useContext } from "react";
import { PrevChatsContext } from "../../context/ChatContext";

const Sidebar = ({ startNewChat, restoreChat }) => {
  const { prevChats } = useContext(PrevChatsContext);
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar" style={{ width: extended ? "250px" : "80px" }}>
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="Menu"
          onClick={()=>setExtended(prev => !prev)}
        />

        <div className="new-chat" onClick={startNewChat}>
          <img src={assets.plus_icon} alt="" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevChats.map(chat => (
              <div
                key={chat.id}
                className="recent-entry"
                onClick={() => restoreChat(chat)}
              >
                <img src={assets.message_icon} alt="" />
                <p>{chat.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>

       
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended?<p>Help</p> :null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
           {extended?<p>Activity</p> :null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended?<p>Settings</p> :null}
          </div>
        </div>
      
    </div>
  );
};

export default Sidebar;
