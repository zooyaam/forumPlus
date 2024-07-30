"use client";

import Link from "next/link";

interface BtnTypeProps {
  action: "edit" | "delete";
  id?: string;
}

export default function PostBtn({ action, id }: BtnTypeProps) {
  return (
    <div>
      {action === "edit" ? (
        <Link href={`/edit/${id}`}>
          <span className="cursor-pointer px-1">수정하기</span>
        </Link>
      ) : (
        <span
          onClick={(e) =>
            fetch(`/api/post/delete`, { method: "DELETE", body: id }).then(
              (r) => {
                return console.log("a");
              }
            )
          }
          className="cursor-pointer px-1"
        >
          삭제하기
        </span>
      )}
    </div>
  );
}
