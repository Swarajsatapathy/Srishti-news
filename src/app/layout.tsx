import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Sristhi News — Latest Headlines & Stories",
  description:
    "Stay informed with Sristhi News. Read the latest headlines, breaking news, and in-depth stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-slate-50 text-slate-900 font-sans">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
