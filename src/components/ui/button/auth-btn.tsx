"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

interface AuthBtnProps {
  action: "sign-in" | "sign-out" | "sign-up";
}

export default function AuthBtn(type: AuthBtnProps) {
  if (type.action === "sign-in" || type.action === "sign-out") {
    return (
      <button
        onClick={() => {
          type.action === "sign-in" ? signIn() : signOut();
        }}
        className="bg-black whitespace-nowrap py-2 px-4 font-medium rounded-lg text-white"
      >
        {type.action === "sign-in" ? "로그인" : "로그아웃"}
      </button>
    );
  } else {
    return (
      <Link
        href={"/register"}
        className="bg-black whitespace-nowrap py-2 px-4 font-medium rounded-lg text-white"
      >
        회원가입
      </Link>
    );
  }
}
