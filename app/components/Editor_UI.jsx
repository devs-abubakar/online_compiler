import React from 'react'
import useEditorStore from '../store/useEditorStore'
import HtmlEditor from './editors/HtmlEditor'
import CssEditor from './editors/CssEditor'
import JsEditor from './editors/JsEditor'

const Editor_UI = () => {
  const activeTab = useEditorStore((s)=>s.activeTab)  
  return (
    <div>
      {activeTab === "html" && <HtmlEditor/>}
      {activeTab === "css" && <CssEditor/>}
      {activeTab === "js" && <JsEditor/>}
    </div>
  )
}

export default Editor_UI