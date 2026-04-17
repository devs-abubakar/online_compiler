import { create } from "zustand";

const useEditorStore =create((set)=>({
    output : ``,
    setOutput : (newOutput) => set({output : newOutput})
}))
export default useEditorStore