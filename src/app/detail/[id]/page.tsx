import DetailCard from "@/src/components/ui/detail";

import { connectDB } from "@/src/util/db";
import { ObjectId } from "mongodb";

type PostId = {
  params: {
    id: string;
  };
};

export default async function DetailPage(postId: PostId) {
  let client = await connectDB;
  const db = client.db("dotory");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(postId.params.id) });
  return (
    <div className="bg-gray-100 h-[10000px]">
      <div className="pt-10">
        <DetailCard title={result?.title} content={result?.content} />
      </div>
    </div>
  );
}
