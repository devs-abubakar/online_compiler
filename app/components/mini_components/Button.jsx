import React from 'react'

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className='bg-stone-600 w-auto rounded-2xl p-2 h-10 hover:bg-stone-800 hover:shadow-2xl cursor-pointer text-white border-none flex items-center justify-center transition-all'
    >
      {children}
    </button>
  )
}

export default Button