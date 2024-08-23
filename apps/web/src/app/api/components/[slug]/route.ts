import { NextRequest, NextResponse } from "next/server";
import {Components} from './components'

export async function GET(request: NextRequest, {params}: { params: {slug: string}}) {
    const slug = params.slug
    return NextResponse.json(Components.find(({name}) => name === slug))
}