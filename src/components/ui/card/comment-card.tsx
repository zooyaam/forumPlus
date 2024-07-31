import { connectDB } from "@/src/util/db";

// TODO: add user profile & creation time

interface CommentCardProps {
  post_id: string;
}

export default async function CommentCard({ post_id }: CommentCardProps) {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("comment").find().toArray();
  console.log("post : ", post_id);
  console.log("comment-post : ", result[0].post_id.toString());

  return (
    <div className="border rounded-3xl px-8 py-4">
      <p className="font-semibold text-lg pb-3">댓글</p>
      {result
        .filter((cmt) => post_id === cmt.post_id.toString())
        .map((item, index) => (
          <div key={index} className="py-3 border-b">
            <div>{item.content}</div>
            <span>{item.author}</span>
          </div>
        ))}
    </div>
  );
}
