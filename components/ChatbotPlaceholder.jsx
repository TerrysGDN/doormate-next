'use client'
// REAL CHATBOT WIRED IN SEPARATELY
import { useState } from 'react'

export default function ChatbotPlaceholder() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 bg-white border border-gray-200 shadow-2xl">
          <div className="bg-brand-navy px-4 py-3 flex items-center justify-between">
            <span className="text-white text-xs font-bold tracking-widest uppercase">Chat with DoorMate</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/60 hover:text-white text-lg leading-none"
            >
              ×
            </button>
          </div>
          <div className="px-5 py-8 text-center">
            <div className="text-brand-gold text-4xl mb-3">💬</div>
            <p className="text-brand-navy font-bold text-sm mb-1">Coming Soon</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Our live chat is on its way. In the meantime, call us on{' '}
              <a href="tel:02921660393" className="text-brand-gold font-bold">029 2166 0393</a>{' '}
              or email{' '}
              <a href="mailto:info@doormate.co.uk" className="text-brand-gold font-bold">info@doormate.co.uk</a>
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
        className="w-14 h-14 bg-brand-gold text-brand-navy flex items-center justify-center shadow-lg hover:bg-brand-navy hover:text-brand-gold transition-colors"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="square" strokeLinejoin="miter" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  )
}
