import Image from "next/image";
import Link from "next/link";
import LoginBtn from "../button/login-btn";
import LogoutBtn from "../button/logout-btn";

export default function Header() {
  return (
    <header className="bg-white px-5 flex justify-between items-center">
      <Link href="/list" className="flex items-center gap-1 p-5">
        <Image src="/black-icon.svg" alt="도토리" width={27} height={27} />
        <h1 className="text-2xl font-bold tracking-tight pr-2">DOTORY</h1>
      </Link>

      <div className="flex gap-3 pr-5">
        <LoginBtn />
        <LogoutBtn />
      </div>
    </header>
  );
}
