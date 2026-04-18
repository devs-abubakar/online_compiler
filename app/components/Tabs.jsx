import React from 'react'
import useEditorStore from '../store/useEditorStore'
import Button from './mini_components/Button'

const Tabs = () => {
    const setActiveTab = useEditorStore((s)=>s.setActiveTab) 
    return (

    <div className='bg-gray-500 mb-2 flex items-center justify-around w-full h-15 z-50'>
        <Button onClick={()=>{setActiveTab('html')}}>index.html</Button>
        <Button onClick={()=>{setActiveTab('css')}}>style.css</Button>
        <Button onClick={()=>{setActiveTab('js')}}>script.js</Button>
    </div>
  )
}

export default Tabs