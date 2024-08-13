"use client";

import React, { useState } from "react";

export default function Register() {
  const [isAllowed, setIsAllowed] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);

  const handleRegister = () => {
    if (isNameValid && isEmailValid && isPwValid) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="">
        <h1 className="text-2xl mx-auto font-semibold">회원 가입</h1>
        <p className="text-gray-800 text-sm">
          함께 이야기를 나누고, 다양한 생각을 공유해 보세요.
        </p>
        <p className="text-gray-800 text-sm">
          자유롭게 소통할 준비가 되셨나요?
        </p>

        <form action="/api/auth/signup" method="POST" className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium pb-1 text-gray-800"
              >
                이름
              </label>
              <input
                type="text"
                name="name"
                placeholder="닉네임"
                className="text-md mb-6 border-2 rounded-lg py-2 px-4"
              />
            </div>
            <span className="bg-yellow-100 font-semibold py-3 px-4 rounded-lg cursor-pointer hover:text-yellow-700 hover:bg-yellow-200 duration-200 text-yellow-600">
              중복확인
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium pb-1 text-gray-800"
              >
                이메일
              </label>
              <input
                type="text"
                name="email"
                placeholder="이메일"
                className="text-md mb-6 border-2 rounded-lg py-2 px-4"
              />
            </div>
            <span className="bg-yellow-100 font-semibold py-3 px-4 rounded-lg cursor-pointer hover:text-yellow-700 hover:bg-yellow-200 duration-200 text-yellow-600">
              중복확인
            </span>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium pb-1 text-gray-800"
            >
              비밀번호
            </label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              className="text-md mb-6 border-2 rounded-lg py-2 px-4"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium pb-1 text-gray-800"
            >
              비밀번호 재확인
            </label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              className="text-md mb-6 border-2 rounded-lg py-2 px-4"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-500 text-white text-xl font-semibold py-2 rounded-lg"
          >
            완료
          </button>
        </form>
      </div>
    </div>
  );
}
