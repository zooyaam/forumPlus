import { connectDB } from "@/src/util/db";

export default async function List() {
  let client = await connectDB;
  const db = client.db("cmnt");
  let result = await db.collection("post").find().toArray();
  return (
    <div>
      <span>{result[0].title}</span>
    </div>
  );
}
