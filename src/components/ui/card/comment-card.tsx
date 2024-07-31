import { connectDB } from "@/src/util/db";
import { ReactNode } from "react";

export default async function CommentCard() {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("comment").find().toArray();
  console.log(result);

  return (
    <div className="border rounded-3xl px-8 py-4">
      <p className="font-semibold text-lg pb-3">댓글</p>
      {result.map((item, index) => (
        <div key={index} className="py-3 border-b">
          <div>{item.content}</div>
          <span>{item.author}</span>
        </div>
      ))}
    </div>
  );
}
