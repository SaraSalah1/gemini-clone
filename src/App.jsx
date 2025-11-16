import { useState } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { PrevChatsContext } from './context/ChatContext';

const App = () => {

  const [currentChatSaved, setCurrentChatSaved] = useState(false);

  const [prevChats, setPrevChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [showResult, setShowResult] = useState(false);

  
  const startNewChat = () => {
  
  if (messages.length > 0 && !currentChatSaved) {
    setPrevChats(prev => [
      ...prev,
      {
        id: Date.now(),
        title: messages[0].text,
        messages: [...messages]
      }
    ]);
    setCurrentChatSaved(true); 
  }

  setMessages([]);
  setText("");
  setShowResult(false);
  setCurrentChatSaved(false); 
};


 const restoreChat = (chat) => {
  setMessages(chat.messages);
  setShowResult(true);
  setCurrentChatSaved(true); 
};

  return (
    <PrevChatsContext.Provider value={{
      prevChats,
      setPrevChats,
      currentChatId,
      setCurrentChatId,
      messages,
      setMessages,
      text,
      setText,
      showResult,
      setShowResult,
    }}>
      <Sidebar startNewChat={startNewChat} restoreChat={restoreChat} />
      <Main />
    </PrevChatsContext.Provider>
  );
};

export default App;
