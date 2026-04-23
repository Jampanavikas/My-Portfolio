import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WELCOME = "Hi! 👋 I'm Vikas's AI assistant. Ask me anything about his skills, experience, AI projects, or availability!"

const SUGGESTIONS = [
  "What's Vikas's main expertise?",
  "Tell me about his LangGraph work",
  "What AI/LLM skills does he have?",
  "Is he available for hire?",
]

function ChatBubble({ message, isStreaming }) {
  const isUser = message.role === 'user'
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-6 h-6 rounded-full flex-shrink-0 mr-2 mt-1 flex items-center justify-center text-xs text-white font-bold"
          style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
          V
        </div>
      )}
      <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${isUser ? 'rounded-br-sm' : 'rounded-bl-sm'}`}
        style={{
          background: isUser ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : '#f8fafc',
          color: isUser ? '#fff' : '#1e293b',
          border: isUser ? 'none' : '1px solid #e2e8f0',
        }}>
        {message.content}
        {isStreaming && (
          <span className="inline-block w-0.5 h-3.5 ml-0.5 rounded-sm align-middle animate-pulse"
            style={{ background: '#2563eb' }} />
        )}
      </div>
    </motion.div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="w-6 h-6 rounded-full flex-shrink-0 mr-2 flex items-center justify-center text-xs text-white font-bold"
        style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>V</div>
      <div className="px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center"
        style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-blue-400" />
        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-blue-400" />
        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-blue-400" />
      </div>
    </div>
  )
}

export default function Chatbot() {
  const [isOpen, setIsOpen]       = useState(false)
  const [messages, setMessages]   = useState([{ role: 'assistant', content: WELCOME }])
  const [input, setInput]         = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [streamText, setStreamText]  = useState('')
  const [error, setError]         = useState(null)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, streamText])
  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 300) }, [isOpen])

  const sendMessage = async (text) => {
    const trimmed = text.trim()
    if (!trimmed || isStreaming) return
    setShowSuggestions(false)
    setError(null)
    setInput('')
    const newMessages = [...messages, { role: 'user', content: trimmed }]
    setMessages(newMessages)
    setIsStreaming(true)
    setStreamText('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      if (!res.ok) throw new Error(`Server error ${res.status}`)

      const reader  = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const lines = decoder.decode(value).split('\n').filter((l) => l.startsWith('data: '))
        for (const line of lines) {
          const data = line.slice(6).trim()
          if (data === '[DONE]') break
          try {
            const parsed = JSON.parse(data)
            if (parsed.error) throw new Error(parsed.error)
            if (parsed.text) { accumulated += parsed.text; setStreamText(accumulated) }
          } catch { /* ignore partial chunk errors */ }
        }
      }
      setMessages((prev) => [...prev, { role: 'assistant', content: accumulated }])
    } catch (err) {
      setError('Could not reach the AI service. Make sure the backend is running.')
    } finally {
      setIsStreaming(false)
      setStreamText('')
    }
  }

  return (
    <>
      {/* Toggle button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 8px 24px rgba(37,99,235,0.35)' }}
        aria-label="Toggle AI chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </motion.svg>
          ) : (
            <motion.svg key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }} width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </motion.svg>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping"
            style={{ background: '#22c55e' }} />
        )}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col rounded-2xl overflow-hidden"
            style={{ height: '480px', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)', borderBottom: '1px solid #e2e8f0' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>AI</div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-slate-800">Vikas AI Assistant</p>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Powered by Claude Sonnet
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => <ChatBubble key={i} message={m} />)}
              {isStreaming && streamText && <ChatBubble message={{ role: 'assistant', content: streamText }} isStreaming />}
              {isStreaming && !streamText && <TypingIndicator />}
              {error && (
                <div className="text-xs text-red-500 text-center px-3 py-2 rounded-lg"
                  style={{ background: '#fef2f2', border: '1px solid #fecaca' }}>
                  {error}
                </div>
              )}
              {showSuggestions && !isStreaming && (
                <div className="space-y-2 pt-1">
                  <p className="text-xs font-mono text-slate-400 text-center">suggested questions</p>
                  {SUGGESTIONS.map((s) => (
                    <button key={s} onClick={() => sendMessage(s)}
                      className="w-full text-left text-xs px-3 py-2 rounded-xl transition-colors hover:bg-blue-50"
                      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#64748b' }}>
                      {s}
                    </button>
                  ))}
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-end gap-2 px-3 py-3 flex-shrink-0"
              style={{ borderTop: '1px solid #f1f5f9' }}>
              <textarea ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input) } }}
                placeholder="Ask about Vikas..." rows={1} disabled={isStreaming}
                className="flex-1 text-sm text-slate-700 px-3 py-2.5 rounded-xl resize-none outline-none transition-all placeholder-slate-400 disabled:opacity-50"
                style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', maxHeight: '80px' }}
                onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')} />
              <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                onClick={() => sendMessage(input)} disabled={!input.trim() || isStreaming}
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 disabled:opacity-40 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
