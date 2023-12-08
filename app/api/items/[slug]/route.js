import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

//get single post
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const item = await prisma.item.findMany({
      where: { seller: slug },
    });

    return new NextResponse(JSON.stringify({ item }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};


