import React from 'react'
import Editor_UI from './Editor_UI';
import Code_preview from './Code_preview';
import Navbar from './Navbar';
import Tabs from './Tabs';

const Screen = () => {
  return (
    <div className='w-full h-full flex flex-row'>
      <Navbar className='absolute top-0 right-0 w-full h-12'/>
      <div > 
        <Tabs />
        <Editor_UI/>
      </div>
      <Code_preview/>
    </div>
  )
}

export default Screen