import { connectDB } from "@/src/util/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: any, res: any) {
  let client = await connectDB;
  const db = client.db("dotory");

  let session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user?.email;
    req.body.name = session.user?.name;
    req.body.user_profile = session.user?.image;
  }

  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content === "") {
      return res.status(400).json({ message: "제목과 내용을 입력해주세요" });
    }

    await db.collection("post").insertOne(req.body);
    return res.status(200).redirect("/list");
  }
}
