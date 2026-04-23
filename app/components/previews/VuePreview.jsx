import React, { useMemo, useState, useEffect } from 'react';
import { SandpackProvider, SandpackPreview } from '@codesandbox/sandpack-react';
import useEditorStore from '@/app/store/useEditorStore';

const VuePreview = () => {
  const files = useEditorStore((s) => s.files.vue);
  const activeProject = useEditorStore((s) => s.activeProject);
  
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVersion(v => v + 1), 600);
    return () => clearTimeout(timer);
  }, [files]);

  //Explicitly defining the files and their structure
  const sandpackFiles = useMemo(() => ({
    // Using the /src/ prefix as Vue templates are often Vite-based
    "/src/App.vue": files["App.vue"].code,
    "/src/main.js": files["main.js"].code,
    "/src/style.css": files["style.css"].code,
    // Adding an explicit index.html to force the module type in the script tag
    "/index.html": `
      <!DOCTYPE html>
      <html>
        <body>
          <div id="app"></div>
          <script type="module" src="/src/main.js"></script>
        </body>
      </html>
    `
  }), [files]);

  return (
    <SandpackProvider
      template="vue"
      key={`${activeProject}-${version}`}
      files={sandpackFiles}
      customSetup={{
        entry: "/src/main.js",
        dependencies: { "vue": "^3.2.0" }
      }}
    >
      <SandpackPreview />
    </SandpackProvider>
  );
};

export default VuePreview;