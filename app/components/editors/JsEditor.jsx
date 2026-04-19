import { Editor } from '@monaco-editor/react'
import {useRef,React} from 'react'
import useEditorStore from '@/app/store/useEditorStore'

const JsEditor = () => {
      const editorRef=useRef(null)
      const jsCode =useEditorStore((s)=>s.jsCode) 
      const setJsCode =useEditorStore((s)=>s.setJsCode) 
      const handleDidMount = (editor) => {
          editorRef.current = editor
      }

      
  return (
    <div>
      <Editor value={jsCode} language='javascript' onChange={(value)=>setJsCode(value || '')} width={'50vw'} height={'100%'} onMount={handleDidMount} />
    </div>
  )
}

export default JsEditor