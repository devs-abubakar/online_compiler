import React from 'react'
import Editor from '@monaco-editor/react'
const Editor_UI = () => {
  return (
    <div><Editor height="100vh" width='50vh' defaultLanguage="javascript" defaultValue="// some comment"  /></div>
  )
}

export default Editor_UI