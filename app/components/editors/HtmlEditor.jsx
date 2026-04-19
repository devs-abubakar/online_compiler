import {useRef,React} from 'react'
import { Editor } from '@monaco-editor/react'
import useEditorStore from '@/app/store/useEditorStore'


const HtmlEditor = () => {
    const editorRef=useRef(null)
    const htmlCode =useEditorStore((s)=>s.htmlCode) 
    const setHtmlCode =useEditorStore((s)=>s.setHtmlCode) 
    const handleDidMount = (editor) => {
        editorRef.current = editor
    }
  return (
    <div>
        <Editor value={htmlCode} language='html' onChange={(value)=>setHtmlCode(value || '')} width={'50vw'} height={'100%'} onMount={handleDidMount} />
    </div>
  )
}

export default HtmlEditor