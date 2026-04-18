import {useRef,React} from 'react'
import { Editor } from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import useEditorStore from '@/app/store/useEditorStore'


const HtmlEditor = () => {
    const editorRef=useRef(null)
    const handleDidMount = (editor) => {
        editorRef.current = editor
    }
    const handleSave = () =>{
        const css = editorRef.current.getValue()
        console.log(css)
    }
  return (
    <div>
        <Editor width={'50vw'} height={'100vh'} onMount={handleDidMount} defaultValue='<--Enter html code for inside the body--> '/>
    <button onClick={handleSave}>Save file</button>
    </div>
  )
}

export default HtmlEditor