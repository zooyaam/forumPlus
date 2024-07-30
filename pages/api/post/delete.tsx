import { ObjectId } from "mongodb";
import { connectDB } from "@/src/util/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

// TODO: user validation -> button show-hide

export default async function handler(req: any, res: any) {
  let client = await connectDB;
  const db = client.db("forum");

  if (req.method === "DELETE") {
    let session = await getServerSession(req, res, authOptions);
    let result = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });

    // TODO: json -> modal alert message
    if (result?.author === session?.user?.email) {
      await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
      return res.status(200).json({ message: "삭제되었습니다." });
    } else {
      return res.status(500).json({ message: "권한이 없습니다." });
    }
  }
}
