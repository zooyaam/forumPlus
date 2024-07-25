"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button
      onClick={() => {
        signIn();
      }}
      className="bg-black whitespace-nowrap py-2 px-4 font-medium rounded-lg text-white"
    >
      로그인
    </button>
  );
}
