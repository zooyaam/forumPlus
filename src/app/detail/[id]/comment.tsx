"use client";

import { PaperPlaneIcon } from "@radix-ui/react-icons";

import { useState, useEffect } from "react";

interface CommentProps {
  postId?: string;
}

// TODO: textarea auto height (max: 4cols)
// TODO: use AJAX to delete posts and update UI
// TODO: add user profile & creation time

export default function Comment({ postId }: CommentProps) {
  const [comment, setComment] = useState("");
  const [data, setData] = useState<{ author: string; content: string }[]>([]);

  const handleComment = (e: any) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    fetch("/api/comment/list?id=" + postId)
      .then((r) => r.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
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

      <div className="rounded-3xl border p-4 flex gap-2">
        <textarea
          name="comment"
          value={comment}
          onChange={(e) => {
            handleComment(e);
          }}
          rows={1}
          cols={30}
          className="bg-blue-50 px-5 py-1.5 resize-none rounded-full"
        />
        <button
          onClick={() => {
            fetch("/api/comment/new", {
              method: "POST",
              body: JSON.stringify({ comment: comment, postId: postId }),
            }).then(() => {
              {
                /* TODO: author */
              }
              setData([...data, { author: "me", content: comment }]);
            });
          }}
          className="flex items-center hover:bg-gray-200/50 duration-200 px-2 rounded-full"
        >
          <PaperPlaneIcon className="opacity-50 size-4" />
        </button>
      </div>
    </div>
  );
}
