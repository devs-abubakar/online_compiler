import { NextResponse } from "next/server"

export async function POST(req){
    const {language , code } = await req.json()
    console.log(language,code)
    return NextResponse.json({message : "success"})
}