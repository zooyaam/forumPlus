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
          <span className="bg-secondary-300 cursor-pointer font-medium py-0.5 px-2 rounded-lg">
            수정 ✏️
          </span>
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
          className="bg-secondary-400 cursor-pointer font-medium py-0.5 px-2 rounded-lg"
        >
          삭제 🗑️
        </span>
      )}
    </div>
  );
}
