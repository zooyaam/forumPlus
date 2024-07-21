import ListCard from "@/src/components/ui/card/list-card";
import { connectDB } from "@/src/util/db";
import Link from "next/link";

export default async function List() {
  let client = await connectDB;
  const db = client.db("dotory");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="flex m-10 flex-col gap-6">
      <Link href="/write">
        <span className="bg-secondary-200 hover:bg-secondary-200/80 duration-200 py-3 px-4 rounded-xl">
          WRITE
        </span>
      </Link>
      {result.reverse().map((item, index) => (
        <Link href={`/detail/${item._id.toString()}`} key={index}>
          <ListCard title={item.title} id={item._id.toString()} />
        </Link>
      ))}
    </div>
  );
}
