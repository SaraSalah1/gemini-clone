# 💬 React Chat Application

A modern, responsive React-based chat interface inspired by Gemini/ChatGPT.  
This application allows users to start new chats, send messages, receive AI-style bot replies via an API, and restore previous conversations from a sidebar.  
Built with **React Hooks**, **Context API**, and best practices for state management and UI design.

---

## 🚀 Key Features

### Chat Management
- **Start New Chat**: Automatically saves the current conversation before beginning a new one.
- **Restore Previous Chats**: Select any past conversation from the sidebar to instantly reload messages.
- **Persistent Chat History**: All conversations are stored in component state and Context API for easy restoration.

### Bot Interaction
- Fetches AI-like advice from the [Advice Slip API](https://api.adviceslip.com/).
- Dynamic response rendering with user/bot message differentiation.
- Seamless user experience with instant feedback.

### User Interface
- **Expandable Sidebar** with saved chats.
- **Scrollable Chat Area** for smooth navigation.
- **Dynamic Message Bubbles** styled for user vs bot.
- Gradient headers and clean Gemini-inspired design.
- Fully responsive for desktop and laptop screens.

---

## 🎨 Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| Frontend Framework | React.js (Hooks + Context API) | Component architecture and global state management |
| Styling | CSS3 | Layout, gradients, scrollable chat area, animations |
| Logic | JavaScript (ES6+) | Async operations, DOM handling, event management |
| API Integration | Fetch API | Fetching AI advice data from external API |
| State Management | Context + Local Component State | Manage global chat data and local inputs |

---

## 📸 Screenshots

### Main Chat Interface
<img src="https://github.com/user-attachments/assets/0b2e8a26-1588-4fdb-8c83-877525a9f1c5" alt="Main Chat Page" width="600" />

### Expanded Sidebar with Chat History
<img src="https://github.com/user-attachments/assets/48ad508f-90bb-468e-8562-2267572f5971" alt="Sidebar Expanded" width="600" height="800" />

---

## 🛠 Installation

### Clone the Repository
```bash
git clone https://github.com/SaraSalah1/gemini-clone.git
```

### Navigate to the Project Directory
```bash
cd gemini-clone
```

### Install Dependencies
```bash
# Using npm
npm install

# Using yarn
yarn install
```

### Start the Development Server
```bash
# Using npm
npm start

# Using yarn
yarn start
```

### Access in Browser
```
http://localhost:3000
```

---

## 💻 Usage Guide

1. Click **New Chat** to start a fresh conversation.
2. Enter your message in the input field and press **Enter** or click **Send**.
3. AI responses are displayed immediately below user messages.
4. Previous chats are automatically saved when starting a new conversation.
5. Open the **Sidebar** to view, restore, or switch between past chats.
6. Sidebar icons provide navigation shortcuts (Help, Activity, Settings).

---

## 🧩 Key Code Snippets

### Automatic Chat Saving
```javascript
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
```

### Restoring Previous Chat
```javascript
const restoreChat = (chat) => {
  setMessages(chat.messages);
  setShowResult(true);
  setCurrentChatSaved(true);
};
```

### Sending a Message and Bot Reply
```javascript
const newMessage = { type: "user", text };
setMessages(prev => [...prev, newMessage]);

const res = await fetch("https://api.adviceslip.com/advice");
const data = await res.json();

const botMessage = { type: "bot", text: `Advice: ${data.slip.advice}` };
setMessages(prev => [...prev, botMessage]);
```

---

## 🤝 Contributing

We welcome contributions!  

1. Fork the repository.  
2. Create a feature branch:  
```bash
git checkout -b feature/YourFeature
```  
3. Commit your changes:  
```bash
git commit -m "Add feature description"
```  
4. Push to your branch:  
```bash
git push origin feature/YourFeature
```  
5. Open a Pull Request for review.

---

👩‍💻 **Author:** [Sara Salah](https://github.com/SaraSalah1)  
📦 **Repository:** [gemini-clone](https://github.com/SaraSalah1/gemini-clone)

---

## 📝 License

This project is licensed under the MIT License.
