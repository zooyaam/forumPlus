"use client";

import { useState, useEffect } from "react";

// TODO: add user profile & creation time

interface CommentCardProps {
  post_id: string;
}

export default function CommentCard({ post_id }: CommentCardProps) {
  const [data, setData] = useState<{ author: string; content: string }[]>([]);

  useEffect(() => {
    fetch("/api/comment/list?id=" + post_id)
      .then((r) => r.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div className="border rounded-3xl px-8 py-4">
      <p className="font-semibold text-lg pb-3">댓글</p>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="py-3 border-b">
            <span className="pr-5">{item.author}</span>
            <span>{item.content}</span>
          </div>
        ))
      ) : (
        <p>댓글이 없습니다.</p>
      )}
    </div>
  );
}
