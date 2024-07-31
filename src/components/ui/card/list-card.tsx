import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Image from "next/image";
import Dropdown from "../dropdown";

interface CardProps {
  author?: string;
  title: string;
  id?: string;
  name?: string;
  user_profile?: string;
  post_img?: string;
}

// TODO: add thumbnail image
// TODO: add like count & view count
// TODO: add creation time

export default async function ListCard({
  title,
  id,
  author,
  name,
  user_profile,
  post_img,
}: CardProps) {
  let session = await getServerSession(authOptions);

  return (
    <div className="relative mx-auto w-full max-w-[700px] transition-all border cursor-pointer py-4 px-4 flex flex-col gap-4 bg-white rounded-xl duration-500 hover:drop-shadow-[0_25px_25px_rgba(0,0,0,0.05)]">
      <Link href={`/detail/${id}`}>
        <div>
          <div className="flex justify-between border-b pb-3">
            <div className="flex gap-2 items-center ">
              <Image
                src={user_profile ? user_profile : "/black-icon.svg"}
                alt="작성자 프로필 사진"
                width={25}
                height={25}
                className="rounded-full bg-gray-300"
              />
              <p>{name}</p>
            </div>
            <p className="pr-10 opacity-50">2020년 1월 2일</p>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl py-3 font-semibold block">{title}</h1>
              <p className="text-gray-600">조회 1 좋아요 0</p>
            </div>
            {post_img && (
              <Image
                src={post_img}
                alt="게시글 이미지"
                width={30}
                height={30}
                className="rounded-xl"
              />
            )}
          </div>
        </div>
      </Link>
      {author === session?.user?.email ? (
        <Dropdown type="own" id={id} className="absolute right-5 top-4" />
      ) : (
        <Dropdown type="other" id={id} className="absolute right-5 top-4" />
      )}
    </div>
  );
}
