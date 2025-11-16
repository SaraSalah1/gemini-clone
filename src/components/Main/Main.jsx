import { useState, useContext } from "react";
import { assets } from "../../assets/images/assets";
import { PrevChatsContext } from "../../context/ChatContext";
import './Main.css';

const Main = () => {
  const {
    messages,
    setMessages,
    text,
    setText,
    showResult,
    setShowResult
  } = useContext(PrevChatsContext);

  const handleSend = async () => {
    if (!text.trim()) return;

    const newMessage = { type: "user", text };
    setMessages(prev => [...prev, newMessage]);
    setShowResult(true);
    setText("");

    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      const botMessage = { type: "bot", text: `Advice: ${data.slip.advice}` };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { type: "bot", text: "Error fetching advice." }]);
    }
  };

  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="great">
              <p><span>Hello, Dev.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on our trip</p>
                <img src={assets.compass_icon} alt="Compass" />
              </div>
              <div className="card">
                <p>Briefly summarize concept: planning</p>
                <img src={assets.bulb_icon} alt="Bulb" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities</p>
                <img src={assets.message_icon} alt="Message" />
              </div>
              <div className="card">
                <p>Improve the readability of code</p>
                <img src={assets.code_icon} alt="Code" />
              </div>
            </div>
          </>
        ) : (
          <div className='result'>
            {messages.map((msg, index) => (
              <p className={msg.type === 'user' ? 'user-mg' : 'bot-msg'} key={index}>{msg.text}</p>
            ))}
          </div>
        )}

        <div className='main-bottom'>
          <div className="search-box">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              type="text"
              placeholder='Enter a prompt here'
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              <img src={assets.send_icon} onClick={handleSend} alt="Send" />
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
