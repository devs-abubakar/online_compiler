import React from 'react'
import Editor from '@monaco-editor/react'; 
import Editor_UI from './Editor_UI';
import Code_preview from './Code_preview';
import Navbar from './Navbar';

const Screen = () => {
  return (
    <div className='w-full h-full flex flex-row'>
      <Navbar className='absolute top-0 right-0 w-full h-12'/>
      <Editor_UI/>
      <Code_preview/>
    </div>
  )
}

export default Screen