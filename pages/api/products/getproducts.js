import dbclient from "../../../prisma/client";

export default async function handler(req, res) {
  try {
    const data = await dbclient.products.findMany();
    res.status(200).json(data);
  } catch {
    res.status(200).json([]);
  }
}
