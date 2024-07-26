import { connectDB } from "@/src/util/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

// TODO: user validation -> button show-hide

export default async function handler(req: any, res: any) {
  let client = await connectDB;
  const db = client.db("dotory");

  if (req.method === "POST") {
    let session = await getServerSession(req, res, authOptions);
    let result = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body._id) });

    // TODO: json -> modal alert message
    if (result?.author === session?.user?.email) {
      if (req.body.title === "" || req.body.content === "") {
        return res.status(400).json({ message: "제목과 내용을 입력해주세요" });
      }

      await db.collection("post").updateOne(
        { _id: new ObjectId(req.body._id) },
        {
          $set: {
            title: req.body.title,
            content: req.body.content,
          },
        }
      );
      return res.status(200).redirect("/detail/" + req.body._id);
    } else {
      return res.status(500).json({ message: "권한이 없습니다." });
    }
  }
}
