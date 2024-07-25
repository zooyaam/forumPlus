import { connectDB } from "@/src/util/db";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connect } from "http2";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Kakao from "next-auth/providers/kakao";

export const authOptions = {
  // 로그인 방식 설정
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Kakao({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  secret: "todnrlaqkq2847",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
