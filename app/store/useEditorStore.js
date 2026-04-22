import { create } from "zustand";


const languages = [
    { id: 'vanilla', label: 'Vanilla' },
    { id: 'react', label: 'React' },
    { id: 'vue', label: 'Vue' },
    ];

const boilerPlates = { "vanilla":{
    "index.html" : {code : `<!DOCTYPE html>\n<html>\n<body>\n  <h1 id="app">Hello Vanilla</h1>\n</body>\n</html>`},
    "style.css" : {code : `body { font-family: sans-serif; }`},
    "script.js" : {code : `console.log("Vanilla works!");`},
  },
  "vue" :{
    "App.vue":{
    code: `
<template>
  <h1>Hello Vue</h1>
</template>

<script>
export default {}
</script>
`,
    language: "html"
  },
  "main.js":{
    code: `
import { createApp } from "vue"
import App from "./App.vue"

createApp(App).mount("#app")
`,
    language: "javascript"
  },
  "style.css" : {
    code : `
h1 {
  color: green;
}
`
  }
  },
  "react" :{
    "App.js" :{ code : `export default function App() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Hello React </h1>
      <button onClick={() => alert("React works!")}>
        Click Me
      </button>
    </div>
  );
}` },
    "index.js" :{ code : `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);` },
    "style.css" :{ code : `body { margin: 0; }` },
  }
 };

const useEditorStore = create((set, get) => ({
  
  languages,
  boilerPlates,
  
  srcDoc: "",
  manual: true,
  

  files: {
  vanilla: structuredClone(boilerPlates.vanilla),
  react: structuredClone(boilerPlates.react),
  vue: structuredClone(boilerPlates.vue),
},
    activeProject:"vanilla",
    activeFile: "index.html",
    setActiveProject : (project)=>set({ activeProject : project}),
  setActiveFile: (name) =>
    set({ activeFile: name }),

  updateFile: (project,name, newCode) =>
    set((state) => ({
      files: {
        ...state.files,
        [project]: {
          ...state.files[project],
        [name]: {
          ...state.files[project][name],
          code: newCode,
        }},
      },
    })),

  setManual: (value) =>
    set({ manual: value }),

  toggleManual: () =>
    set((state) => ({ manual: !state.manual })),

  runCode: () => {
    const { files,activeProject } = get();

    if (activeProject === "vanilla") {
    const htmlCode = files[activeProject]["index.html"].code;
    const cssCode = files[activeProject]["style.css"].code;
    const jsCode = files[activeProject]["script.js"].code;

    const srcDoc = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}<\/script>
        </body>
      </html>
    `;

    set({ srcDoc });
  }

},
  
}));

export default useEditorStore;