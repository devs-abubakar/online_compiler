import React from 'react'
import useEditorStore from '../store/useEditorStore'

const Tabs = () => {
  const activeFile = useEditorStore((s) => s.activeFile)
  const setActiveFile = useEditorStore((s) => s.setActiveFile)
  const activeProject = useEditorStore((s) => s.activeProject);
  const projectFiles = useEditorStore((s)=> s.files[activeProject])

  console.log(activeProject)
  const filesList = Object.entries(projectFiles).map(([item])=>{return item})


  return (
    <div className="w-full h-12 bg-[#1e1e1e] border-b border-gray-700 flex items-end px-2 gap-1 overflow-x-auto">
      {filesList.map((file) => {
        const isActive = activeFile === file

        return (
          <button
            key={file}
            onClick={() => {setActiveFile(file)
              console.log(file)}}
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
            {file}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs