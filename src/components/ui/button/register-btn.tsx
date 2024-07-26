import Link from "next/link";

export default function RegisterBtn() {
  return (
    <Link
      href={"/register"}
      className="bg-black whitespace-nowrap py-2 px-4 font-medium rounded-lg text-white"
    >
      회원가입
    </Link>
  );
}
