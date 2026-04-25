
import { runPythonCode } from "./python"
import { runNodeCode } from "./node"
export async function RunCode(language,code){
    console.log(`language : ${language}=== code :${code}`)
    switch(language){
        case "python" : {
            return await runPythonCode(code)
        }
        case "node" : {
            return await runNodeCode(code)
        }
        default :{
            throw new Error("unsupported language")
        }
    }
}