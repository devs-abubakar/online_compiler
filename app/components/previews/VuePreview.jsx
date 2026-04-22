import React,{useMemo }from 'react'
import { SandpackPreview,SandpackProvider } from '@codesandbox/sandpack-react'
import useEditorStore from '@/app/store/useEditorStore';

const VuePreview = () => {
      const files = useEditorStore((s) => s.files.vue);
    const activeProject = useEditorStore ((s)=>s.activeProject)
    // const version = JSON.stringify(files);
  const sandpackFiles = useMemo(() => {
    console.log(files)
    return Object.fromEntries(
      Object.entries(files || {}).map(([name, file]) => [
        `/${name}`,
        { code: file.code || "" }
      ])
    );
  }, [files]);
  return (
        <SandpackProvider
  template="vue"
  key={Date.now()}
  entry="/main.js"
  files={{
    "/App.vue": {
      code: `<template>
  <h1>Hello Vue 🚀</h1>
</template>

<script>
export default {};
</script>

<style>
h1 {
  color: green;
}
</style>`
    },

    "/main.js": {
      code: `import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");`
    },

    "/style.css": {
      code: `body {
  margin: 0;
  font-family: sans-serif;
}`
    }
  }}
  options={{
    recompileMode: "immediate",
    recompileDelay: 500
  }}
>
  <SandpackPreview />
</SandpackProvider>
  )
}

export default VuePreview