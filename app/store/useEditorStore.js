import { create } from "zustand";

const useEditorStore =create((set)=>({
    htmlCode : ``,
    cssCode : ``,
    jsCode : ``,
    srcDoc : ``,
    
    setHtmlCode :(value)=>set({htmlCode: value}),
    setCssCode :(value)=>set({cssCode: value}),
    setJsCode :(value)=>set({jsCode: value}),

    runCode : () => set((state)=>({
        srcDoc:`
        <!DOCTYPE html>
        <html>
        <head>
        <style>${state.cssCode}</style>
        </head>
        <body>
        ${state.htmlCode}
        <script>${state.jsCode}<\/script>
        </body>
        </html>
        `,
    })),
    activeTab: "html",
    setActiveTab : (tab)=>set({activeTab : tab})

    
}))
export default useEditorStore