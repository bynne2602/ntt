import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Chào bạn! Mình là AI của Thành. Mình có thể giúp gì cho bạn?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const text = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setLoading(true);

    const reply = await sendMessageToGemini(text);
    setMessages(prev => [...prev, { role: 'model', text: reply }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white w-[350px] h-[500px] rounded-2xl shadow-2xl shadow-black/20 flex flex-col mb-4 overflow-hidden border border-border animate-fade-in-up">
           <div className="bg-accent p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                 <Sparkles size={16} className="text-white" />
                 <span className="font-bold text-sm">Trợ lý ảo</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-white/80"><X size={18} /></button>
           </div>
           
           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 custom-scrollbar">
              {messages.map((m, i) => (
                 <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      m.role === 'user' 
                        ? 'bg-primary text-white rounded-br-none font-medium' 
                        : 'bg-white border border-gray-200 text-primary rounded-bl-none shadow-sm'
                    }`}>
                       {m.text}
                    </div>
                 </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                   <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-none text-xs text-secondary italic animate-pulse">
                     Đang nhập...
                   </div>
                </div>
              )}
              <div ref={scrollRef}></div>
           </div>

           <div className="p-3 bg-white border-t border-border flex gap-2">
              <input 
                 className="flex-1 bg-gray-100 text-primary border border-gray-200 rounded-full px-4 text-sm outline-none focus:border-accent transition-colors placeholder:text-gray-400"
                 placeholder="Nhập tin nhắn..."
                 value={input}
                 onChange={e => setInput(e.target.value)}
                 onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend} 
                disabled={loading} 
                className="p-2 bg-primary text-white rounded-full hover:bg-accent hover:text-white transition-colors disabled:opacity-50"
              >
                <Send size={16} />
              </button>
           </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-accent/20 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
      >
         {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};