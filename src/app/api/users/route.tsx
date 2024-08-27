// import prisma from "@/prisma/prisma";
import prisma from "../../../../prisma/migrations/prisma";
import { NextRequest, NextResponse } from "next/server";
import UserSChema from "./schema";

// create user
export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = UserSChema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  const isAlreadyExit = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (isAlreadyExit) {
    return NextResponse.json(
      { error: "User is already eisxt" },
      { status: 400 }
    );
  }

  const newUSer = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });

  return NextResponse.json(newUSer);
}

// get all user
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
