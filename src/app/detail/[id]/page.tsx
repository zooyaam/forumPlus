import Comment from "./comment";
import DetailCard from "@/src/components/ui/card/detail-card";

import { ObjectId } from "mongodb";
import { connectDB } from "@/src/util/db";

type PostId = {
  params: {
    id: string;
  };
};

export default async function DetailPage({ params }: PostId) {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id) });

  return (
    <div className="pt-10 mx-auto w-2/3">
      <DetailCard title={result?.title} content={result?.content} />
      <Comment postId={params.id} />
    </div>
  );
}
