import { connectDB } from "@/src/util/db";
import { ObjectId } from "mongodb";

export default async function handler(req: any, res: any) {
  console.log(req);
  let client = await connectDB;
  const db = client.db("dotory");

  if (req.method === "POST") {
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
  }
}
