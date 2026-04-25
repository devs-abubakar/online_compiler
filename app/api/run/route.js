import { RunCode } from "@/app/lib/executor/index"
import { NextResponse } from "next/server"

export async function POST(req){
    const {language , code } = await req.json()
    try{
        console.log(language,code)
        const output = await RunCode(language,code)
        console.log(output)
        return NextResponse.json({ output }, { status: 200 });
    }catch (error){
        return NextResponse.json({message:`error occured ${error.message}`},{status:500})
    }
}