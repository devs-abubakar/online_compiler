import React from 'react'
import { Dropdownselection } from '../hero_ui/Dropdown'
import useEditorStore from '../store/useEditorStore'

const Navbar = () => {
    const runCode = useEditorStore((s)=> s.runCode)
    const HandleRun = () =>{
        runCode()
    }

  return (
    <div>
        <button className="bg-green-800 w-8 h-6 " onClick={HandleRun}>Run</button>
        <Dropdownselection/>
    </div>
  )
}

export default Navbar