import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "K-Nomad Cities | 한국 디지털 노마드 도시 가이드",
  description: "한국에서 디지털 노마드로 살기 좋은 도시를 찾고, 평가하고, 연결하세요. 도시별 생활비, 인터넷 속도, 업무환경 정보를 한눈에 비교해보세요.",
  keywords: "디지털 노마드, 한국, 도시, 워케이션, 원격근무, 생활비",
  authors: [{ name: "K-Nomad Cities Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
