import { create } from "zustand";

const useEditorStore = create((set, get) => ({
  srcDoc: "",
  manual: true,

  files: {"vanilla" : {
    "index.html": { code: "", language: "html" },
    "style.css": { code: "", language: "css" },
    "script.js": { code: "", language: "javascript" },
  },
  "React":{
    "App.jsx" :{code:"",language : "javascript"},
    "index.js" :{code:"",language : "javascript"},
    "style.css" :{code:"",language : "css"},
  }
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

  if (activeProject === "react") {
    // later: Sandpack runtime handles this
    console.log("React mode - handled by Sandpack");
  }
},
  
}));

export default useEditorStore;