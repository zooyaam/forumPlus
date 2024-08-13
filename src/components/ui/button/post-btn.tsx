"use client";

import Link from "next/link";

interface BtnTypeProps {
  action: "edit" | "delete" | "report" | "message";
  id?: string;
}

export default function PostBtn({ action, id }: BtnTypeProps) {
  return (
    <div>
      {action === "edit" && (
        <Link href={`/edit/${id}`}>
          <span className="cursor-pointer px-2">수정하기</span>
        </Link>
      )}
      {action === "delete" && (
        <Link href={`/delete/${id}`}>
          <span className="cursor-pointer px-2">삭제하기</span>
        </Link>
      )}
      {action === "report" && (
        <Link href={`/report/${id}`}>
          <span className="cursor-pointer px-2">신고하기</span>
        </Link>
      )}
      {action === "message" && (
        <Link href={`/message/${id}`}>
          <span className="cursor-pointer px-2">쪽지하기</span>
        </Link>
      )}
    </div>
  );
}
