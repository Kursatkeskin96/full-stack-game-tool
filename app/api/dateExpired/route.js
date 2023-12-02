import prisma from "@/lib/connect";

const handler = async (req, res) => {
  try {
    // Calculate the time 24 hours ago
    const twentyFourHoursAgo = new Date(
      new Date().getTime() - 24 * 60 * 60 * 1000
    );

    // Delete items that were created more than 24 hours ago
    const result = await prisma.item.deleteMany({
      where: {
        createdAt: {
          lte: twentyFourHoursAgo,
        },
      },
    });

    // Send a response back
    res
      .status(200)
      .json({ message: "Expired items deleted", count: result.count });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting expired items" });
  }
};

export default handler;
