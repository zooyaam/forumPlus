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
      <body className={fontSans.variable + "max-h-screen px-20"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
