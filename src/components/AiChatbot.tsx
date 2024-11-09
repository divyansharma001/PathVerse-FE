"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

type Message = {
  id: string;
  content: string;
  type: "user" | "bot";
  timestamp: Date;
};

// Simple function to format the message content
const FormatMessage = ({ content }: { content: string }) => {
  // Split content into lines
  const lines = content.split('\n');
  
  return (
    <div className="whitespace-pre-wrap">
      {lines.map((line, index) => {
        // Check if line is a bullet point
        if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
          return (
            <div key={index} className="ml-4 mb-1">
              {line}
            </div>
          );
        }
        
        // Check if line is part of a code block
        if (line.trim().startsWith('```')) {
          return (
            <div key={index} className="bg-gray-800 p-2 rounded-md my-2 font-mono text-sm overflow-x-auto">
              {line.replace(/```/g, '')}
            </div>
          );
        }
        
        // Regular text line
        return (
          <div key={index} className="mb-1">
            {line}
          </div>
        );
      })}
    </div>
  );
};

export function AiChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const placeholders = [
    "What's the best way to start investing?",
    "How do I diversify my investment portfolio?",
    "Can you explain the difference between stocks and bonds?",
    "What are the tax implications of selling investments?",
    "How can I plan for retirement using PathVest?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchBotResponse = async (userMessage: string) => {
    try {
      setIsTyping(true);
      setError(null);
      
      const conversationHistory = messages.map(msg => ({
        role: msg.type === "user" ? "user" : "assistant",
        content: msg.content
      }));

      const response = await fetch('https://fintechchatbot.onrender.com/api/v1/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInput: userMessage,
          conversationHistory: conversationHistory
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        content: data.response,
        type: "bot",
        timestamp: new Date()
      }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get response');
      console.error('Error fetching bot response:', err);
    } finally {
      setIsTyping(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    const message = input.value.trim();
    
    if (!message) return;

    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      content: message,
      type: "user",
      timestamp: new Date()
    }]);

    input.value = '';
    await fetchBotResponse(message);
  };

  return (
    <div className="h-[40rem] flex flex-col justify-start items-center px-4 w-full max-w-4xl mx-auto">
      <h2 className="mb-6 sm:mb-10 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask PathVest AI Anything
      </h2>
      
      <div className="w-full flex-1 overflow-y-auto mb-6 rounded-lg bg-white dark:bg-zinc-900 shadow-lg">
        <div className="p-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-black text-white dark:bg-zinc-800"
                      : "bg-gray-100 dark:bg-zinc-700"
                  }`}
                >
                  {message.type === "user" ? (
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  ) : (
                    <FormatMessage content={message.content} />
                  )}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex justify-start"
              >
                <div className="bg-gray-100 dark:bg-zinc-700 p-3 rounded-lg flex space-x-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-center p-2"
            >
              {error}
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="w-full">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AiChatbot;