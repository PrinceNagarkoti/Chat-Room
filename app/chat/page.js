"use client";

import { useState, useEffect, useRef } from "react";
import { auth, db } from "../../lib/firebase";
import { ref, push, onValue } from "firebase/database";
import { signOut } from "firebase/auth";
import ChatInput from "../../components/ChatInput";
import ChatMessage from "../../components/ChatMessage";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const messagesRef = ref(db, "messages");

    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const msgs = data ? Object.values(data) : [];
      msgs.sort((a, b) => a.timestamp - b.timestamp);  
      setMessages(msgs);

      // Auto-scroll 
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Global Chat Room</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-500 px-3 py-1 rounded hover:bg-gray-200"
        >
          Logout
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
        <div ref={scrollRef}></div>
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t">
        <ChatInput />
      </div>
    </div>
  );
}
