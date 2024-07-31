import { connectDB } from "@/src/util/db";
import { ObjectId } from "mongodb";

export default async function handler(req: any, res: any) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("comment")
    .find({ post_id: new ObjectId(req.query.id) })
    .toArray();

  res.status(200).json(result);
}
