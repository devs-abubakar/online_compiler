"use client";

import { useEffect } from "react";
import useEditorStore from "../store/useEditorStore";
import ReactPreview from "./previews/ReactPreview";

const CodePreview = () => {
  const activeProject = useEditorStore((s) => s.activeProject);

  const runCode = useEditorStore((s) => s.runCode);
  const vanillaFiles = useEditorStore((s) => s.files["vanilla"]);
  const srcDoc = useEditorStore((s) => s.srcDoc);
  const manual = useEditorStore((s) => s.manual);

  const { "index.html": html, "style.css": css, "script.js": js } = vanillaFiles;

  useEffect(() => {
    if (manual || activeProject !== "vanilla") return;
    
    const timer = setTimeout(() => {
      runCode();
    }, 300);
    
    return () => clearTimeout(timer);
  }, [html.code, css.code, js.code, runCode, manual]);
  
  if (activeProject === "react") {
    return <ReactPreview />;
  }
  if (!srcDoc) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Write some code to see the preview</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <iframe
        title="Vanilla Preview"
        className="w-full h-full border-none bg-white"
        srcDoc={srcDoc}
        sandbox="allow-scripts"
      />
    </div>
  );
};

export default CodePreview;