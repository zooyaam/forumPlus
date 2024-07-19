import Card from "@/src/components/ui/card";
import { connectDB } from "@/src/util/db";
import Link from "next/link";

export default async function List() {
  let client = await connectDB;
  const db = client.db("dotory");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="flex m-10 flex-col gap-6">
      {result.map((item, index) => (
        <Link href={`/detail/${item._id.toString()}`} key={index}>
          <Card title={item.title} />
        </Link>
      ))}
    </div>
  );
}
