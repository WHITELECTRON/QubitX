import { useRef, useEffect, useState } from "react";
import { Send, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { toggleTutor } from "../store/slices/uiSlice";
import type { ChatMessage as ChatMessageType } from "../types";
import { mockTutorReplies } from "../data/mockTutorReplies";
import SessionOverviewCard from "./SessionOverviewCard";

// ─── Seed messages ────────────────────────────────────────────────────────────

const SEED_MESSAGES: ChatMessageType[] = [
  {
    id: "seed-1",
    sender: "tutor",
    text: "Ready to try Grover's algorithm? Your entanglement score says you're set.",
  },
  {
    id: "seed-2",
    sender: "user",
    text: "Quick q first — what's phase kickback again?",
  },
  {
    id: "seed-3",
    sender: "tutor",
    text: "It's when a controlled gate imprints a phase onto the control qubit instead of the target. Want a visual?",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ChatBubble({ message }: { message: ChatMessageType }) {
  const isTutor = message.sender === "tutor";

  if (isTutor) {
    return (
      <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-2xl px-4 py-3">
        <p className="text-[14px] text-slate-700 leading-relaxed">
          {message.text}
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] bg-slate-100 rounded-2xl px-4 py-3">
        <p className="text-[14px] text-slate-800 leading-relaxed">
          {message.text}
        </p>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-2xl px-4 py-3 inline-flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

// ─── Main panel ───────────────────────────────────────────────────────────────

export default function AiTutorPanel() {
  const dispatch = useAppDispatch();
  const tutorOpen = useAppSelector((s) => s.ui.tutorOpen);

  const [messages, setMessages] = useState<ChatMessageType[]>(SEED_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const replyIndexRef = useRef(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMsg: ChatMessageType = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const replyText =
      mockTutorReplies[replyIndexRef.current % mockTutorReplies.length];
    replyIndexRef.current += 1;

    setTimeout(() => {
      const tutorMsg: ChatMessageType = {
        id: `msg-${Date.now()}-tutor`,
        sender: "tutor",
        text: replyText,
      };
      setMessages((prev) => [...prev, tutorMsg]);
      setIsTyping(false);
    }, 1100);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <aside
      className={[
        "h-full flex flex-col border-l border-slate-200 bg-white/50 overflow-hidden transition-all duration-300 ease-in-out shrink-0",
        tutorOpen ? "w-[360px]" : "w-0",
      ].join(" ")}
      aria-label="AI Tutor panel"
    >
      {/* Keep inner content at fixed width so it doesn't squish during animation */}
      <div className="w-[360px] h-full flex flex-col gap-6 p-6 overflow-hidden">
        {/* Session Overview */}
        <SessionOverviewCard />

        {/* AI Tutor Chat — fills remaining height */}
        <div className="flex-1 min-h-0 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-2.5">
              {/* Bot icon placeholder */}
              <div className="w-5 h-5 rounded-sm bg-indigo-600 flex items-center justify-center">
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none">
                  <rect x="1" y="0" width="9" height="7" rx="2" fill="white" />
                  <path d="M4 10 L5.5 7 L7 10" fill="white" />
                </svg>
              </div>
              <span className="text-[17px] font-bold text-slate-900">
                AI Tutor
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[13px] text-slate-400 font-medium">
                  online
                </span>
              </div>
              <button
                onClick={() => dispatch(toggleTutor())}
                aria-label="Close AI Tutor panel"
                className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 min-h-0 overflow-y-auto px-5 py-4 flex flex-col gap-3">
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="shrink-0 px-5 pb-5 pt-3">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask your tutor..."
                disabled={isTyping}
                aria-label="Message AI Tutor"
                className="w-full h-11 pl-4 pr-12 bg-slate-50 rounded-full border border-slate-200 text-[14px] text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-300 transition-all disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="absolute right-1.5 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
