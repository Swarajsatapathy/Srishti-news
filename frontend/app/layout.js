import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SRISHTI NEWS - ସର୍ବଶେଷ ସମାଚାର ଓ ଅପଡେଟ୍",
  description: "SRISHTI NEWS ସହିତ ସର୍ବଶେଷ ସମାଚାର, ଆର୍ଟିକେଲ୍ ଏବଂ କାହାଣୀ ସହିତ ଅପଡେଟ୍ ରହନ୍ତୁ। ଆପଣଙ୍କ ବିଶ୍ୱସ୍ତ ସମାଚାର ସାଥୀ କହିବେ ଆପଣଙ୍କ କଥା।",
  keywords: "ଓଡ଼ିଆ ନ୍ୟୁଜ୍, ଓଡ଼ିଶା ସମାଚାର, SRISHTI NEWS, Odia News, Odisha News",
  authors: [{ name: "SRISHTI NEWS Team" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
