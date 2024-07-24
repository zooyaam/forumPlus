"use client";

import Link from "next/link";

interface CardProps {
  title: string;
  id?: string;
}

export default function ListCard({ title, id }: CardProps) {
  return (
    <div className="relative mx-auto opacity-100 transition-all border cursor-pointer py-4 px-4 w-[700px] flex flex-col gap-4 bg-white rounded-xl duration-500 hover:drop-shadow-[0_25px_25px_rgba(0,0,0,0.05)]">
      <Link href={`/detail/${id}`}>
        <div>
          <h1 className="text-2xl font-semibold block">{title}</h1>
          <div className="flex justify-between">
            <p className="text-gray-600">2020년 1월 1일</p>
            <p>조회 1 좋아요 0</p>
          </div>
        </div>
      </Link>
      <div className="absolute right-4 top-4 flex space-x-2">
        <Link href={`/edit/${id}`}>
          <span className="bg-secondary-300 cursor-pointer font-medium py-0.5 px-2 rounded-lg">
            수정 ✏️
          </span>
        </Link>
        <span
          onClick={(e) =>
            fetch(`/api/post/delete`, { method: "DELETE", body: id }).then(
              (r) => {
                return console.log("a");
              }
            )
          }
          className="bg-secondary-400 cursor-pointer font-medium py-0.5 px-2 rounded-lg"
        >
          삭제 🗑️
        </span>
      </div>
    </div>
  );
}
