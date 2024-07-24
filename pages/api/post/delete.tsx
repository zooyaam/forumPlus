import { connectDB } from "@/src/util/db";
import { ObjectId } from "mongodb";

export default async function handler(req: any, res: any) {
  if (req.method === "DELETE") {
    try {
      let client = await connectDB;
      const db = client.db("dotory");
      await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
    } catch (e) {
      res.status(500);
    }
  }
}
