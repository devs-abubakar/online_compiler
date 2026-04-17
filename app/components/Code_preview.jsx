import React from 'react'
import useEditorStore from '../store/useEditorStore'

const Code_preview = () => {
  const output = useEditorStore((state)=> state.output)

  if (!output){
    return (
      <div> try adding some code </div>
    )
  };
  return (
    <div className='w-5xl h-5xl'><iframe className='w-full h-full border-none bg-white' srcDoc={output} sandbox='allow-scripts'></iframe></div>
  )
}

export default Code_preview