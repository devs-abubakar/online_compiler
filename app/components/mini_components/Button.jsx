import React from 'react'

const Button = ({
  children,
  onClick,
  type = 'button',
  active = false,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-4 h-9 text-sm font-medium
        rounded-md
        border border-gray-700
        transition-colors duration-150
        focus:outline-none focus:ring-2 focus:ring-gray-500
        ${
          active
            ? 'bg-[#252526] text-white'
            : 'bg-[#2d2d2d] text-gray-300 hover:bg-[#37373d] hover:text-white'
        }
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button