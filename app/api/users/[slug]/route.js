import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { name: slug },
    });

    // Count how many times 'slug' appears in the referredby field
    const referredByCount = await prisma.user.count({
      where: {
        referredby: slug,
      },
    });

    return new NextResponse(JSON.stringify({ user, referredByCount }), {
      status: 200,
    });
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