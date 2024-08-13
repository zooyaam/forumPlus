import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
import Image from "next/image";
import AuthBtn from "../button/auth-btn";

export default async function ProfileCard() {
  let session = await getServerSession(authOptions);

  return (
    <div className="border rounded-xl p-8 bg-white">
      {session ? (
        <div>
          <div className="flex gap-6 items-center pb-5 border-b">
            <span className="size-16 rounded-full">
              <Image
                src={
                  session?.user?.image
                    ? session?.user?.image
                    : "/black-icon.svg"
                }
                alt="내 프로필 사진"
                width={50}
                height={50}
                className="bg-slate-200"
              />
            </span>
            <div>
              <p className="font-bold text-lg">{session?.user?.name}</p>
              <p className="text-black-200 font-medium">
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
              className="bg-pink-100 text-pink-500 text-center whitespace-nowrap py-2 duration-200 rounded-xl"
            >
              새 게시글
            </Link>
            <Link
              href="/profile"
              className="bg-yellow-100 text-yellow-500 text-center whitespace-nowrap py-2 duration-200 rounded-xl"
            >
              프로필 수정
            </Link>
            <AuthBtn action="sign-out" />
          </div>
        </div>
      ) : (
        <div>
          <p>로그인 후 이용하세요</p>
          <AuthBtn action="sign-in" />
          <AuthBtn action="sign-up" />
        </div>
      )}
    </div>
  );
}
