import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { getServerSession } from "next-auth";
import Header from "../components/ui/layout/header";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const fontSans = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "forumPlus",
  description: "forum plus Community",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getServerSession(authOptions);
  return (
    <html lang="ko">
      <body className={fontSans.variable + " bg-gray-200 max-h-screen"}>
        <Header />
        <div className="px-20">{children}</div>
      </body>
    </html>
  );
}
