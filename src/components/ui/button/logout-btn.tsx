"use client";

import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
      className="bg-black whitespace-nowrap py-2 px-4 font-medium rounded-lg text-white"
    >
      로그아웃
    </button>
  );
}
