import { connectDB } from "@/src/util/db";

export default async function handler(req: any, res: any) {
  let client = await connectDB;
  const db = client.db("dotory");

  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content === "") {
      return res.status(400).json({ message: "제목과 내용을 입력해주세요" });
    }

    let result = await db.collection("post").insertOne(req.body);
    return res.status(200).redirect("/list");
  }
}
