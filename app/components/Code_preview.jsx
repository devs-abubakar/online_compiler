import { useEffect } from "react"
import useEditorStore from "../store/useEditorStore"

const CodePreview = () => {
  const runCode = useEditorStore((s) => s.runCode)
  const htmlCode = useEditorStore((s) => s.htmlCode)
  const cssCode = useEditorStore((s) => s.cssCode)
  const jsCode = useEditorStore((s) => s.jsCode)
  const srcDoc = useEditorStore((s) => s.srcDoc)
  const manual = useEditorStore((s) => s.manual)

useEffect(() => {
  const timer = setTimeout(() => {
    runCode()
  }, 300)

  return () => clearTimeout(timer)
}, [htmlCode, cssCode, jsCode])

  if (!srcDoc) {
    return <div>try adding some code</div>
  }

  return (
    <div className="w-full h-full">
      <iframe
        className="w-full h-full border-none bg-white"
        srcDoc={srcDoc}
        sandbox="allow-scripts"
      />
    </div>
  )
}

export default CodePreview