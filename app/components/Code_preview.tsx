import React from 'react'

const mock_code = `<html><header> hello</header></html>`

const Code_preview = () => {
  return (
    <div className='w-5xl h-5xl'><iframe src={mock_code}></iframe></div>
  )
}

export default Code_preview