import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import UserSChema from "../schema";

interface Params{
    params: {
        id: string
    }
}

// get single user
export async function GET(request: NextRequest,{ params: { id}}: Params){
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if(!user){
        return NextResponse.json(
            { error: "User doest exit"}, { status: 404})
    }

    return NextResponse.json(user);
}

// update
export async function PUT(request: NextRequest,{ params: { id}}: Params){
    const body = await request.json();

    const validation = UserSChema.safeParse(body);

    if(!validation.success){
        return NextResponse.json({error: validation.error.errors}, { status: 400})
    }

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if(!user){ 
        return NextResponse.json(
            { error: "User doest exit"}, { status: 404})
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data: {
            email: body.email,
            name: body.name
        }
    })

    return NextResponse.json(updatedUser);
}

// delete 
export async function DELETE(request: NextRequest,{ params: { id}}: Params){
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if(!user){ 
        return NextResponse.json(
            { error: "User doest exit"}, { status: 404})
    }

    const deletedUse = await prisma.user.delete({
        where: {
            id: parseInt(id)
        }
    })

    // delted from db;
    return NextResponse.json(deletedUse);
}