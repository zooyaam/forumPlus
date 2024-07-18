import DetailCard from "@/src/components/ui/detail";
import { connectDB } from "@/src/util/db";
import { ObjectId } from "mongodb";

export default async function DetailPage() {
  let client = await connectDB;
  const db = client.db("dotory");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId("6698b9d6e6ebcca20461a567") });
  return (
    <div className="bg-gray-100 h-[10000px]">
      <div className="pt-10">
        <DetailCard title={result?.title} content={result?.content} />
      </div>
    </div>
  );
}
