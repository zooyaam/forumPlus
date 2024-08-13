import Image from "next/image";
import Link from "next/link";
import AuthBtn from "../button/auth-btn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Header() {
  let session = await getServerSession(authOptions);

  return (
    <header className="bg-white px-20 flex justify-between items-center w-full">
      <Link href="/list" className="flex items-center gap-2 p-5">
        <Image src="/black-icon.svg" alt="대표 로고" width={32} height={32} />
        <h1 className="text-2xl font-bold tracking-tight pr-2">forumPlus</h1>
      </Link>
    </header>
  );
}
