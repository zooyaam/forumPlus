import Link from "next/link";
import PostBtn from "../button/post-btn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Image from "next/image";

interface CardProps {
  author?: string;
  title: string;
  id?: string;
  name?: string;
  user_profile?: string;
}

export default async function ListCard({
  title,
  id,
  author,
  name,
  user_profile,
}: CardProps) {
  let session = await getServerSession(authOptions);

  return (
    <div className="relative mx-auto w-full max-w-[700px] transition-all border cursor-pointer py-4 px-4 flex flex-col gap-4 bg-white rounded-xl duration-500 hover:drop-shadow-[0_25px_25px_rgba(0,0,0,0.05)]">
      <Link href={`/detail/${id}`}>
        <div>
          <div className="flex gap-2 items-center border-b pb-3">
            <Image
              src={user_profile ? user_profile : "/black-icon.svg"}
              alt="작성자 프로필 사진"
              width={25}
              height={25}
              className="rounded-full bg-gray-300"
            />
            <p>{name}</p>
          </div>
          <h1 className="text-2xl py-3 font-semibold block">{title}</h1>
          <div className="flex justify-between">
            <p className="text-gray-600">2020년 1월 1일</p>
            <p>조회 1 좋아요 0</p>
          </div>
        </div>
      </Link>
      {author === session?.user?.email ? (
        <div className="absolute right-4 top-4 flex space-x-2">
          <PostBtn action="edit" id={id} />
          <PostBtn action="delete" id={id} />
        </div>
      ) : null}
    </div>
  );
}
