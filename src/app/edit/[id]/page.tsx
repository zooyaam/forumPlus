import EditCard from "@/src/components/ui/card/edit-card";

import { connectDB } from "@/src/util/db";
import { ObjectId } from "mongodb";

type PostId = {
  params: {
    id: string;
  };
};

export default async function EditPage(postId: PostId) {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(postId.params.id) });

  return (
    <div className="pt-10">
      <EditCard
        id={result?._id}
        title={result?.title}
        content={result?.content}
      />
    </div>
  );
}
