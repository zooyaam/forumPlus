import { connectDB } from "@/src/util/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req: any, res: any) {
  const db = (await connectDB).db("forum");
  let session = await getServerSession(req, res, authOptions);

  req.body = JSON.parse(req.body);

  let comment = {
    content: req.body.comment,
    author: session?.user?.email,
    post_id: new ObjectId(req.body.postId),
  };

  if (req.method === "POST") {
    await db.collection("comment").insertOne(comment);
    res.status(200).json({ message: "댓글 작성완료", author: comment.author });
  }
}
