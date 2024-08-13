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
        className="bg-white whitespace-nowrap py-2.5 px-5 font-normal rounded-lg"
      >
        {type.action === "sign-in" ? "로그인" : "로그아웃"}
      </button>
    );
  } else {
    return (
      <Link
        href={"/register"}
        className="bg-black-600 whitespace-nowrap py-3 px-5 font-normal rounded-lg text-white"
      >
        지금 시작하기
      </Link>
    );
  }
}
