import prisma from "@/lib/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const tier = searchParams.get("tier"); // Assuming you want to filter by resource
  const ench = searchParams.get("ench");
  const quality = searchParams.get("quality");

  const ITEM_PER_PAGE = 8;

  const search = searchParams.get("search") || "";

  const query = {
    take: ITEM_PER_PAGE,
    skip: ITEM_PER_PAGE * (page - 1),
    where: {
      ...(tier && { tier: tier }),
      ...(ench && { ench: ench }),
      ...(quality && { quality: quality }),
      ...(search && {
        title: {
          contains: search,
          mode: "insensitive", // if you want case-insensitive search
        },
      }),
    },
  };

  try {
    const [items, count] = await prisma.$transaction([
      prisma.item.findMany(query),
      prisma.item.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ items, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }),
      { status: 401 } // Setting the status here
    );
  }

  try {
    const itemCount = await prisma.item.count({
      where: { seller: session.user.name },
    });
    if (itemCount >= 10) {
      return new NextResponse(
        JSON.stringify({ message: "Item limit reached" }),
      {status: 400});
    }
    const body = await req.json();
    const item = await prisma.item.create({
      data: {
        ...body,
        discordId: session.user.discordId,
      },
    });
   return new NextResponse(JSON.stringify(item), { status: 200 });
  } catch (err) {
    console.log(err);
 return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), {
   status: 500,
 });
  }
};



export const DELETE = async (req) => {
  const session = await getAuthSession(req);

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const itemId = body.itemId; // Assuming the item ID is passed in the request body

    const item = await prisma.item.findUnique({ where: { id: itemId } });

    if (item && item.seller === session.user.name) {
      await prisma.item.delete({ where: { id: itemId } });
      return new NextResponse(
        JSON.stringify({ message: "Item removed successfully" }),
        { status: 200 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: "Item not found or not authorized to delete",
        }),
        { status: 404 }
      );
    }
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
