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

export const PUT = async (req, { params }) => {
  const { slug } = params;
  const data = await req.json(); // Get data sent in the request body

  try {
    const updatedUser = await prisma.user.update({
      where: { name: slug },
      data: {
        referredby: data.referredby,
      },
    });

    return new NextResponse(JSON.stringify({ user: updatedUser }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};