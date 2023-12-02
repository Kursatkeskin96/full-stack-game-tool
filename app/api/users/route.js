import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const users = await prisma.user.findMany();
    return new NextResponse(JSON.stringify(users, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};
