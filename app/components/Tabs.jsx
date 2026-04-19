import React from 'react'
import useEditorStore from '../store/useEditorStore'

const Tabs = () => {
  const activeTab = useEditorStore((s) => s.activeTab)
  const setActiveTab = useEditorStore((s) => s.setActiveTab)

  const tabs = [
    { id: 'html', label: 'index.html' },
    { id: 'css', label: 'style.css' },
    { id: 'js', label: 'script.js' },
  ]

  return (
    <div className="w-full h-12 bg-[#1e1e1e] border-b border-gray-700 flex items-end px-2 gap-1 overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 h-10 text-sm rounded-t-md transition-all duration-200
              border border-b-0
              ${
                isActive
                  ? 'bg-[#252526] text-white border-gray-600'
                  : 'bg-[#2d2d2d] text-gray-400 border-transparent hover:text-white hover:bg-[#333]'
              }
            `}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs