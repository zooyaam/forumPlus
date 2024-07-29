import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
import Image from "next/image";
import AuthBtn from "../button/auth-btn";

export default async function ProfileCard() {
  let session = await getServerSession(authOptions);

  return (
    <div className="border rounded-lg p-8">
      {session ? (
        <div>
          <div className="flex gap-6 items-center pb-5 border-b">
            <Image
              src={
                session?.user?.image ? session?.user?.image : "/black-icon.svg"
              }
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
      ) : (
        <div>
          <p>로그인 후 이용하세요</p>
          <AuthBtn action="sign-in" />
        </div>
      )}
    </div>
  );
}
