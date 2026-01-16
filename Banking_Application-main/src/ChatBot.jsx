import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send } from "lucide-react";

const ChatBot = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([
    { sender: "assistant", text: "Hello! I’m GenZBank AI. How can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { sender: "user", text: input }]);
    const msg = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Server error");
      }

      const aiResponse = data.reply || "I didn't get a response.";

      setMessages(prev => [
        ...prev,
        { sender: "assistant", text: aiResponse }
      ]);

    } catch (err) {
      console.error("Chat error:", err);
      setMessages(prev => [
        ...prev,
        { sender: "assistant", text: `⚠️ ${err.message || "Server error. Try again."}` }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div style={styles.chat}>
          <div style={styles.header}>
            <Bot /> GenZBank AI
            <X onClick={() => setIsOpen(false)} style={{ cursor: "pointer" }} />
          </div>

          <div style={styles.body}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  ...styles.msg,
                  alignSelf: m.sender === "user" ? "flex-end" : "flex-start",
                  background: m.sender === "user" ? "#4a00e0" : "#fff",
                  color: m.sender === "user" ? "#fff" : "#000"
                }}
              >
                {m.text}
              </div>
            ))}
            {loading && <p>Typing...</p>}
            <div ref={bottomRef} />
          </div>

          <div style={styles.inputArea}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Ask about banking..."
              style={styles.input}
            />
            <button onClick={sendMessage} style={styles.send}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(true)} style={styles.openBtn}>
        <Bot /> Banking Help
      </button>
    </>
  );
};

const styles = {
  chat: {
    position: "fixed",
    bottom: "90px",
    right: "30px",
    width: "360px",
    height: "500px",
    background: "#f8fafc",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
  },
  header: {
    background: "#4a00e0",
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between"
  },
  body: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  msg: {
    padding: "10px 15px",
    borderRadius: "14px",
    maxWidth: "80%"
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    gap: "10px"
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc"
  },
  send: {
    background: "#4a00e0",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "10px"
  },
  openBtn: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    background: "#4a00e0",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "30px",
    display: "flex",
    gap: "10px"
  }
};

export default ChatBot;
