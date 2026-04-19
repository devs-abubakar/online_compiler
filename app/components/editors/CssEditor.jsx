import { Editor } from '@monaco-editor/react'
import {useRef,React} from 'react'
import useEditorStore from '@/app/store/useEditorStore'

const CssEditor = () => {
      const editorRef=useRef(null)
      const cssCode =useEditorStore((s)=>s.cssCode) 
      const setCssCode =useEditorStore((s)=>s.setCssCode) 
      const handleDidMount = (editor) => {
          editorRef.current = editor
      }

  return (
    <div>
      <Editor value={cssCode} language='css' onChange={(value)=>setCssCode(value || '')} width={'50vw'} height={'100%'} onMount={handleDidMount} />
    </div>
  )
}

export default CssEditor