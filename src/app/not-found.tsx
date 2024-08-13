import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex shadow-lg m-5 py-10 gap-10 px-20 justify-between">
      <div className="flex flex-col gap-10">
        <p className="text-pink-900 font-bold text-6xl">404 Error Page</p>
        <div>
          <p className="font-semibold text-4xl pb-3">Page not found</p>
          <p className="text-xl pb-32">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="bg-pink-900 w-fit text-white cursor-pointer hover:opacity-80 duration-300 p-2 rounded-md"
          >
            🏠 Go Home
          </Link>
        </div>
      </div>

      <div>
        <Image
          src="/404-error.jpg"
          width={500}
          height={500}
          alt="에러 이미지"
        />
      </div>
    </div>
  );
}
