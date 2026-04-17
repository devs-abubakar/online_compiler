import {  Editor } from '@monaco-editor/react';
import { useRef } from 'react'
import useEditorStore from '../store/useEditorStore'
import { Dropdownselection } from '../hero_ui/Dropdown';
const Editor_UI = () => {
  const editorRef= useRef(null) //to manipulate the editor
  const setOutput = useEditorStore((state)=> state.setOutput)

  const handleEditorMount =(editor)=>{
    editorRef.current=editor
  }
  const handleRun=()=>{
  if(editorRef.current){
    const code = editorRef.current.getValue()
    const htmlDoc = `<html>
          <body>
            <script>${code}<\/script>
          </body>
        </html>`
    setOutput(htmlDoc)
  }}

  
  return (
  <div>
    <button className="bg-green-800 w-8 h-6 " onClick={handleRun}>Run</button>
    <Dropdownselection/>
      <Editor height="90vh" width='50vw' defaultLanguage="javascript" defaultValue="// some comment" onMount={handleEditorMount}  />
    </div>
  )
}

export default Editor_UI