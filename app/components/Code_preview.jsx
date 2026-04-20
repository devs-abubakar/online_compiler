import { useEffect } from "react"
import useEditorStore from "../store/useEditorStore"

const CodePreview = () => {
  const runCode = useEditorStore((s) => s.runCode)
  const htmlCode = useEditorStore((s) => s.files["vanilla"]["index.html"].code)
  const cssCode = useEditorStore((s) => s.files["vanilla"]["style.css"].code)
  const jsCode = useEditorStore((s) => s.files["vanilla"]["script.js"].code)
  const srcDoc = useEditorStore((s) => s.srcDoc)
  const manual = useEditorStore((s) => s.manual)

  console.log(htmlCode,cssCode,jsCode)
useEffect(() => {
  if (manual){
    console.log(manual)
    return
  }
  const timer = setTimeout(() => {
    runCode()
  }, 300)

  return () => clearTimeout(timer)
}, [htmlCode, cssCode, jsCode,srcDoc])

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