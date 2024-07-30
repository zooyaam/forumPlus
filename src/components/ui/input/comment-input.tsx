"use client";

import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface CommentProps {
  postId?: string;
}

export default function CommentInput({ postId }: CommentProps) {
  const [comment, setComment] = useState("");
  const handleComment = (e: any) => {
    setComment(e.target.value);
  };

  return (
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
            setComment("");
          });
        }}
        className="flex items-center hover:bg-gray-200/50 duration-200 px-2 rounded-full"
      >
        <PaperPlaneIcon className="opacity-50 size-4" />
      </button>
    </div>
  );
}
