import ListCard from "@/src/components/ui/card/list-card";
import ProfileCard from "@/src/components/ui/card/profile-card";
import { connectDB } from "@/src/util/db";
import Image from "next/image";

export default async function List() {
  let client = await connectDB;
  const db = client.db("dotory");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="grid grid-cols-7 gap-10 m-10">
      <div className="flex flex-col col-span-5 gap-6">
        {result.length === 0 && (
          <div className="flex justify-center items-center gap-4 opacity-65">
            <Image
              src={"/empty-icon.svg"}
              alt="이모지"
              width={50}
              height={50}
            />
            <p className="text-gray-500/80 text-2xl">
              표시할 게시글이 없습니다.
            </p>
          </div>
        )}

        {result.reverse().map((item, index) => (
          <ListCard
            key={index}
            title={item.title}
            id={item._id.toString()}
            author={item.author}
            name={item.name}
            user_profile={item.user_profile}
          />
        ))}
      </div>
      <div className="col-span-2">
        <ProfileCard />
      </div>
    </div>
  );
}
