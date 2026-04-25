
import { runPythonCode } from "./python"
import { runNodeCode } from "./node"
export async function RunCode(code,language){
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