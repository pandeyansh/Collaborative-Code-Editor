import React, { useState, useEffect } from 'react';
const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const addMessage = (text, isUser = false) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text, isUser, timestamp: new Date().toLocaleTimeString() },
    ]);
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    addMessage(input, true);
    setInput('');
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  useEffect(() => {
    const fetchBotResponse = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });
        const data = await response.json();
        addMessage(data.message);
      } catch (error) {
        console.error('Error fetching bot response:', error);
        addMessage('Error communicating with the chatbot.');
      }
    };
    if (messages.length > 0 && !messages[messages.length - 1].isUser) {
      fetchBotResponse();
    }
  }, [messages, input]);
  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            {message.isUser ? (
              <div>
                <strong>You:</strong> {message.text}
              </div>
            ) : (
              <div>
                <strong>Bot ({message.timestamp}):</strong> {message.text}
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};
export default ChatBot;