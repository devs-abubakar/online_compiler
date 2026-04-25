import { RunCode } from "@/app/lib/executor/index"
import { NextResponse } from "next/server"

export async function POST(req){
    if(!code){
        return
    }
    try{
        const {language , code } = await req.json()
        console.log(language,code)
        const output = await RunCode(code,language)
        return NextResponse.json({message : "success"},{status:200})
    }catch (error){
        return NextResponse.json({message:`error occured ${error.message}`},{status:500})
    }
}