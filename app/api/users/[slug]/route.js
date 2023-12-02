import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

//get single post
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { name: slug },
    });

    return new NextResponse(JSON.stringify({ user }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};
