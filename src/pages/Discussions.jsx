import React, { useState, useEffect, useRef } from "react";

const Discussions = () => {
  const subjects = [
    "DBMS",
    "DSA",
    "Python",
    "Operating Systems",
    "Machine Learning",
    "Computer Networks",
    "OOPS",
    "Data Science",
    "React",
    "Java"
  ];

  const defaultMessages = {
    DBMS: [
      { text: "Can someone explain normalization?", user: "Rahul" },
      { text: "3NF removes transitive dependency.", user: "Sneha" }
    ],
    DSA: [
      { text: "What is merge sort complexity?", user: "Arjun" }
    ],
    Python: [],
    "Operating Systems": [],
    "Machine Learning": [],
    "Computer Networks": [],
    OOPS: [],
    "Data Science": [],
    React: [],
    Java: []
  };

  const [activeSubject, setActiveSubject] = useState("DBMS");

  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem("peerbridge_chats");
    return stored ? JSON.parse(stored) : defaultMessages;
  });

  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);

  // Save chats
  useEffect(() => {
    localStorage.setItem("peerbridge_chats", JSON.stringify(messages));
  }, [messages]);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeSubject]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages({
      ...messages,
      [activeSubject]: [
        ...messages[activeSubject],
        { text: input, user: "You" }
      ]
    });

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] bg-black text-white flex">

      {/* Sidebar */}
      <div className="w-64 bg-slate-900 p-6 border-r border-gray-800">
        <h2 className="text-xl font-semibold mb-6 text-indigo-500">
          Subjects
        </h2>

        <div className="space-y-3">
          {subjects.map((subject, index) => (
            <div
              key={index}
              onClick={() => setActiveSubject(subject)}
              className={`cursor-pointer px-4 py-2 rounded-lg transition ${
                activeSubject === subject
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800"
              }`}
            >
              {subject}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold">
            {activeSubject} Discussion
          </h2>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">

          {messages[activeSubject]?.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end gap-3 ${
                msg.user === "You" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.user !== "You" && (
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                  {msg.user.charAt(0)}
                </div>
              )}

              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.user === "You"
                    ? "bg-indigo-600"
                    : "bg-slate-800 text-gray-300"
                }`}
              >
                {msg.user !== "You" && (
                  <p className="text-xs text-gray-400 mb-1">
                    {msg.user}
                  </p>
                )}
                {msg.text}
              </div>

              {msg.user === "You" && (
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm">
                  Y
                </div>
              )}
            </div>
          ))}

          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-gray-800 flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={`Message ${activeSubject}...`}
            className="flex-1 bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
          />

          <button
            onClick={handleSend}
            className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
};

export default Discussions;