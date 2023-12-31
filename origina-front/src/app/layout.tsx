import { StoreAuthProvider } from "@/hooks/useAuth";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "OriginaToken",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <StoreAuthProvider>{children}</StoreAuthProvider>
      </body>
    </html>
  );
}
