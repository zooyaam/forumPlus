import Card from "@/src/components/ui/card";
import { connectDB } from "@/src/util/db";

export default async function List() {
  let client = await connectDB;
  const db = client.db("dotory");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="flex m-10 flex-col gap-6">
      {result.map((item) => (
        <Card title={item.title} />
      ))}
    </div>
  );
}
