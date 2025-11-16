
# 💬 React Chat Application

A modern React-based chat interface inspired by Gemini/ChatGPT.
Users can start new chats, send messages, receive bot replies through an API, and restore previous conversations from a sidebar.
The interface is clean, responsive, and built using Context API for state management.
---

## 🚀 Features

- 📁 Start New Chat
  - Automatically saves previous chats before starting a new one.


- 💾 Restore Previous Chats
  - Click any past conversation in the sidebar to reload all messages.

- 🤖 Bot Responses
  - Fetches AI-like replies from a sample API (adviceslip.com).

- 📄 Context API Setup
  - Manages all global states: messages, history, text input, and chat metadata.

- 🎨 Modern UI / UX

  - Expandable sidebar

  - Gradient title

  - Scrollable chat area

  - Dynamic message bubbles

  - Clean layout inspired by Gemini

- ⚡ Fast & Responsive
  - Fully functional on desktop/laptop screens.

---

## 🎨 Technologies Used

- **React.js (Hooks + Context API)**  
- **JavaScript (ES6+)**  
- **CSS3 for UI**  
- **Fetch API**  
- **Local component state + global context**  

---

## 📸 Screenshot
### 📌 Main Chat Page
<img src="https://github.com/user-attachments/assets/0b2e8a26-1588-4fdb-8c83-877525a9f1c5"   alt="Screenshot 1" width="600" />

### 📌 Sidebar Expanded
<img src="https://github.com/user-attachments/assets/48ad508f-90bb-468e-8562-2267572f5971" alt="Screenshot 2" width="600" />

---

## 🛠 Installation & Run


- ### Clone the repository
  git clone https://github.com/SaraSalah1/gemini-clone.git

- ###  Navigate to the project folder
      cd Tgemini-clone

- ###  Install dependencies
      npm install

- ###  Start the development server
      npm start

- ###  Open your browser at:
      http://localhost:3000

  ---

## 📦 Usage

- Click New Chat to start a fresh conversation.

- Type your message in the input field at the bottom.

- Press Enter or click the Send icon to send your message.

- The bot responds automatically with advice from the API.

- Chat messages appear in the conversation area with different styles:

    - User messages → aligned and styled as user bubbles.

    - Bot messages → styled as bot responses.

- Previous chats are automatically saved when you start a new chat.

- Open the Sidebar menu to:

   - View your saved conversations.

   - Click any conversation to restore it instantly.

- Use the icons at the bottom of the sidebar (Help, Activity, Settings) for navigation visuals.
---

## 💻 Code Example

Saving Previous Chats Automatically

```
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

Restoring a Chat

```
const restoreChat = (chat) => {
  setMessages(chat.messages);
  setShowResult(true);
  setCurrentChatSaved(true);
};

```

Sending a User Message + Bot Reply

```
const newMessage = { type: "user", text };
setMessages(prev => [...prev, newMessage]);

const res = await fetch("https://api.adviceslip.com/advice");
const data = await res.json();

const botMessage = { type: "bot", text: `Advice: ${data.slip.advice}` };
setMessages(prev => [...prev, botMessage]);

```
---

## 🤝 Contributing

Contributions are always welcome! Follow these steps:


- #### Fork the repository
  
- #### Create your feature branch
      git checkout -b feature/YourFeature

- #### Commit your changes
      git commit -m "Add some feature"

- #### Push to the branch
      git push origin feature/YourFeature

- #### Open a Pull Request


---

👩‍💻 **Created by [Sara Salah](https://github.com/SaraSalah1)**  
📦 [View the project on GitHub](https://github.com/SaraSalah1/gemini-clone)

---

## 📝 License

This project is licensed under the MIT License
