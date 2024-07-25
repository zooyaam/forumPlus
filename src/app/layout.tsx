import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LoginBtn from "../components/ui/button/login-btn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Header from "../components/ui/layout/header";

const fontSans = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "DOTORY",
  description: "DOTORY Community",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getServerSession(authOptions);
  return (
    <html lang="ko">
      <body className={fontSans.variable + " bg-gray-50 max-h-screen"}>
        <div>
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
