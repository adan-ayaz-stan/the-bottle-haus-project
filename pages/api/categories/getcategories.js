import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  try {
    const data = await prisma.category.findMany({});
    res.status(200).json(data);
  } catch {
    res.status(200).json([]);
  }
}
