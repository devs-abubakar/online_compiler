import React from 'react'
import { Dropdownselection } from '../hero_ui/Dropdown'
import useEditorStore from '../store/useEditorStore'

const Navbar = () => {
  const runCode = useEditorStore((s) => s.runCode)
  const toggleManual = useEditorStore((s)=> s.toggleManual)
  const manual = useEditorStore((s)=> s.manual)
  const activeProject = useEditorStore((s)=>s.activeProject)
  const activeFile = useEditorStore((s)=>s.activeFile)
  const setActiveProject = useEditorStore((s)=>s.setActiveProject)
  const setActiveFile = useEditorStore((s)=>s.setActiveFile)



  const handleToggleProject = ()=>{
    if (activeProject==='vanilla'){
      setActiveProject('react')
      setActiveFile('App.js')
      
      console.log(activeFile)
    }else if (activeProject === 'react'){
      setActiveProject('vanilla')
      setActiveFile('index.html')
      console.log(activeFile)
    }
  }


  const handleToggle = ()=>{
    console.log(manual)
    toggleManual()
    console.log('toggled')


  }

  const handleRun = () => {
    runCode()
  }

  return (
    <div className="w-full h-14 bg-[#1e1e1e] border-b border-gray-700 px-4 flex items-center justify-between">
      
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <h1 className="text-sm md:text-base font-medium text-white">
          Code Editor
        </h1>

        <button
          onClick={handleRun}
          className="px-4 py-1.5 rounded-md bg-green-600 hover:bg-green-500 text-white text-sm transition"
        >
          Run
        </button>
        <button
          onClick={handleToggle}
          className="px-4 py-1.5 rounded-md bg-green-600 hover:bg-green-500 text-white text-sm transition"
        >
          Auto-update
        </button>
        <button
          onClick={handleToggleProject}
          className="px-4 py-1.5 rounded-md bg-green-600 hover:bg-green-500 text-white text-sm transition"
        >
          {activeProject}
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center">
        <Dropdownselection />
      </div>

    </div>
  )
}

export default Navbar