"use client";

import { useState } from "react";
import { db, auth } from "../lib/firebase";
import { ref, push } from "firebase/database";

export default function ChatInput() {
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;
    push(ref(db, "messages"), {
      text,
      user: auth.currentUser?.email || "Anonymous",
      timestamp: Date.now(),
    });
    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
}
