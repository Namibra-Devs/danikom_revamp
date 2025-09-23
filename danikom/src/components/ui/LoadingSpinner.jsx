// components/ui/LoadingSpinner.jsx
import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="flex space-x-3">
        <div 
          className="w-4 h-4 bg-[#4b0082] rounded-full animate-[bounce_1.4s_ease-in-out_infinite]"
          style={{ animationDelay: '0s' }}
        ></div>
        <div 
          className="w-4 h-4 bg-[#4b0082] rounded-full animate-[bounce_1.4s_ease-in-out_infinite]"
          style={{ animationDelay: '0.16s' }}
        ></div>
        <div 
          className="w-4 h-4 bg-[#4b0082] rounded-full animate-[bounce_1.4s_ease-in-out_infinite]"
          style={{ animationDelay: '0.32s' }}
        ></div>
      </div>
      
      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          40% {
            transform: translateY(-25px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </div>
  )
}

export default LoadingSpinner