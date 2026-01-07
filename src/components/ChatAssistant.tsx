"use client";
import React from "react";
import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

export default function FloatingChatAssistant() {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState<
    { role: "user" | "model"; parts: { text: string }[] }[]
  >([]);
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const systemPrompt = `Muhammad Uzair is a Cloud‑Native, Agentic AI Developer, Full Stack & DevOps Learner currently based in New Karachi Town, Sindh, Pakistan. He works as a Web Developer at Orionsols (a Dubai‑based IT services company) since December 2024. He completed his Intermediate education in Commerce and is currently pursuing a **Bachelor of Business** from **Allama Iqbal University**.

Uzair is proficient in modern web development, cloud‑native technologies, and Agentic AI. His skills include JavaScript frameworks (React.js, Next.js), Node.js, RESTful APIs, React Native, databases (like MongoDB), backend tools (like Git and VSCode), Docker, Kubernetes, Python, and AI integration tools (including OpenAI Agents SDK and ChatKit). He is actively learning advanced cloud‑native engineering and agentic AI development.

In his free time, Uzair is an avid cricket fan and particularly admires Virat Kohli.

- You are an AI assistant created by Muhammad Uzair. Your tone should be friendly, professional, and technically accurate, reflecting Uzair’s knowledge.
- Your primary purpose is to answer questions about **Muhammad Uzair’s background, skills, tools, technologies he is learning, and his interests**.
- If the user asks about **technical topics related to cloud‑native development, agentic AI, full‑stack/web development, or tools and languages Uzair works with**, you should answer with helpful, accurate info related to those topics.
- If the user asks anything **unrelated to Uzair’s profile or interests**, you should politely respond:  
  “I’m sorry, I can only answer questions about Muhammad Uzair’s background, skills, and learning areas.”
- If asked “Who made you?” reply exactly:  
  “I was made by Muhammad Uzair.”
`;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newUserMessage = { role: "user", parts: [{ text: input }] };
    const newDisplayMsg = { type: "user" as const, text: input };
    setMessages((prev) => [...prev, newDisplayMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: [...chatHistory, newUserMessage],
          systemPrompt,
        }),
      });

      const data = await res.json();
      const newBotMessage = {
        role: "model",
        parts: [{ text: data.text }],
      };
      setChatHistory((prev: any) => [...prev, newUserMessage, newBotMessage]);
      setMessages((prev) => [...prev, { type: "bot", text: data.text }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 flex h-96 w-80 flex-col rounded-lg border border-border bg-background shadow-xl backdrop-blur-md">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-lg bg-accent p-3 text-accent-foreground">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="font-medium">
                Uzair&apos;s Personal Assistant
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded p-1 text-accent-foreground transition-colors duration-150 hover:bg-accent/80"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-2 overflow-y-auto bg-muted/30 p-3">
            {messages.length === 0 && (
              <div className="py-8 text-center text-muted-foreground">
                <Bot className="mx-auto mb-2 h-8 w-8 text-muted-foreground/60" />
                <p className="text-sm">Hi! Uzair&apos;s personal assistant.</p>
                <p className="text-xs">How can I help you today?</p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex max-w-xs items-start gap-2 ${
                    msg.type === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                      msg.type === "user"
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {msg.type === "user" ? (
                      <User className="h-3 w-3" />
                    ) : (
                      <Bot className="h-3 w-3" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg px-3 py-2 text-sm ${
                      msg.type === "user"
                        ? "bg-accent text-accent-foreground"
                        : "border border-border bg-background text-foreground shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex max-w-xs items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <Bot className="h-3 w-3" />
                  </div>
                  <div className="rounded-lg border border-border bg-background px-3 py-2 text-foreground shadow-sm">
                    <div className="flex gap-1">
                      <div className="h-1 w-1 animate-bounce rounded-full bg-muted-foreground"></div>
                      <div className="h-1 w-1 animate-bounce rounded-full bg-muted-foreground delay-100"></div>
                      <div className="h-1 w-1 animate-bounce rounded-full bg-muted-foreground delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="rounded-b-lg border-t border-border bg-background p-3">
            <div className="flex gap-2">
              <input
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors duration-150 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-colors duration-150 hover:bg-accent/80 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-all duration-200 hover:bg-accent/80 hover:shadow-xl"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>

        {/* Tooltip */}
        {!isOpen && (
          <div className="pointer-events-none absolute bottom-full right-0 mb-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="whitespace-nowrap rounded bg-foreground px-2 py-1 text-sm text-background shadow-lg">
              Try my assistant
              <div className="absolute right-2 top-full h-0 w-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
