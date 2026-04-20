import React, { useRef } from 'react'
import useEditorStore from '@/app/store/useEditorStore'
import { Editor } from '@monaco-editor/react'

const CodeEditor = () => {
    const editorRef = useRef(null)
    const activeProject = useEditorStore((s)=>s.activeProject)
    const activeFile = useEditorStore((s)=>s.activeFile)
    const files = useEditorStore((s)=>s.files)
    const updateFile = useEditorStore((s)=>s.updateFile)
    const handleDidMount = (editor) => {
        editorRef.current = editor 
    }

  return (
    <div>
        <Editor value={files[activeProject][activeFile].code} 
        language={files[activeProject][activeFile].language} 
        onChange={(value)=>{updateFile(activeProject,activeFile,value||'')}} 
        width={'50vw'} height={'100%'} onMount={handleDidMount} 
        theme="vs-dark"
        options={{ automaticLayout: true }} />
    </div>
  )
}

export default CodeEditor