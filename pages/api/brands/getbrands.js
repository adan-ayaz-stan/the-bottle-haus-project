import dbclient from "../../../prisma/client";

export default async function handler(req, res) {
  try {
    const data = await dbclient.brands.findMany();
    res.status(200).json(data);
  } catch {
    res.status(404).json([]);
  }
}
