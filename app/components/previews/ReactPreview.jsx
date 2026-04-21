"use client"
import { SandpackProvider, SandpackPreview } from "@codesandbox/sandpack-react";
import useEditorStore from "@/app/store/useEditorStore";
import { useMemo } from "react";

const ReactPreview = () => {
  const files = useEditorStore((s) => s.files.react);
  console.log(files)

  const codeTracker = JSON.stringify(files);

const sandpackFiles = useMemo(() => {
    return Object.fromEntries(
      Object.entries(files).map(([fileName, file]) => [
        `/${fileName}`,
        file.code || ""
      ])
    );
  }, [codeTracker]);


  return (
<SandpackProvider
      // REMOVE the 'key' prop if you want smooth updates! 
      // If the 'key' stays, the whole preview flashes/reloads on every keystroke.
      template="react"
      files={sandpackFiles}
      options={{
        recompileMode: "immediate",
        recompileDelay: 500, // Wait 500ms after typing to refresh
      }}
    >
      <SandpackPreview />
    </SandpackProvider>
  );
};

export default ReactPreview;