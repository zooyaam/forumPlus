import ListCard from "@/src/components/ui/card/list-card";
import ProfileCard from "@/src/components/ui/card/profile-card";
import { connectDB } from "@/src/util/db";

export default async function List() {
  let client = await connectDB;
  const db = client.db("dotory");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="grid grid-cols-7 m-10">
      <div className="flex flex-col col-span-5 gap-6">
        {result.reverse().map((item, index) => (
          <ListCard key={index} title={item.title} id={item._id.toString()} />
        ))}
      </div>
      <div className="col-span-2">
        <ProfileCard />
      </div>
    </div>
  );
}
