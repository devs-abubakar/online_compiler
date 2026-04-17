import React from 'react'
import Editor from '@monaco-editor/react'; 
import Editor_UI from './Editor_UI';
import Code_preview from './Code_preview';

const Screen = () => {
  return (
    <div className='w-full h-full flex flex-row'><Editor_UI/>
    <Code_preview/></div>
  )
}

export default Screen