import ListCard from "@/src/components/ui/card/list-card";
import { connectDB } from "@/src/util/db";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Image from "next/image";

export default async function List() {
  let session = await getServerSession(authOptions);

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
      <div className="border col-span-2 rounded-lg p-8">
        <div className="flex gap-6 items-center pb-5 border-b">
          <Image
            src={session?.user?.image}
            alt="내 프로필 사진"
            width={60}
            height={60}
            className="rounded-full bg-slate-400"
          />
          <div>
            <p className="font-bold text-lg">{session?.user?.name}</p>
            <p className="text-gray-500/80 font-medium">
              {session?.user?.email}
            </p>
          </div>
        </div>
        <div className="py-5">
          <p>내가 쓴 게시글</p>
          <p>내가 쓴 댓글</p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="/write"
            className="bg-secondary-200 text-center whitespace-nowrap py-2 hover:bg-secondary-200/80 duration-200 rounded-xl"
          >
            새 게시글
          </Link>
          <Link
            href="/profile"
            className="bg-secondary-200 text-center whitespace-nowrap py-2 hover:bg-secondary-200/80 duration-200 rounded-xl"
          >
            프로필 수정
          </Link>
        </div>
      </div>
    </div>
  );
}
