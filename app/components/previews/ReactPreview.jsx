"use client";

import { SandpackProvider, SandpackPreview } from "@codesandbox/sandpack-react";
import useEditorStore from "@/app/store/useEditorStore";
import { useMemo } from "react";

const ReactPreview = () => {
  const files = useEditorStore((s) => s.files.react);
  const activeProject = useEditorStore ((s)=>s.activeProject)
  const version = useMemo(() => Date.now(), [files]);

  const sandpackFiles = useMemo(() => {
    return Object.fromEntries(
      Object.entries(files || {}).map(([name, file]) => [
        `/${name}`,
        { code: file.code || "" }
      ])
    );
  }, [files]);


  return (
    <SandpackProvider
      template="react"
      key={`${activeProject}-${version}`}
      files={sandpackFiles}
      options={{
        recompileMode: "delayed",
        recompileDelay: 300,
      }}
    >
      <SandpackPreview />
    </SandpackProvider>
  );
};

export default ReactPreview;