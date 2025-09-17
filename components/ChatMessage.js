"use client";

import { auth } from "../lib/firebase";

export default function ChatMessage({ message }) {
  const currentUserEmail = auth.currentUser?.email;
  const isCurrentUser = message.user === currentUserEmail;

  return (
    <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-lg p-3 max-w-xs break-words
          ${isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}
          shadow-md
        `}
      >
        {!isCurrentUser && (
          <p className="text-xs font-semibold mb-1">{message.user}</p>
        )}
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
}
