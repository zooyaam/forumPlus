import { connectDB } from "@/src/util/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: any, res: any) {
  let client = await connectDB;
  const db = client.db("dotory");

  let session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user?.email;
  }

  if (req.method === "DELETE") {
    try {
      await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
    } catch (e) {
      res.status(500);
    }
  }
}
