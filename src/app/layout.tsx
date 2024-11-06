import type { Metadata } from "next";
import localFont from "next/font/local";

// Style
import "./globals.css";

// Redux
import StoreProvider from "./StoreProvider";

// Components
import { Header, Footer } from "@/components";

// Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fun88",
  description: "fun88",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <StoreProvider>
          <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-1 flex-col">
              <Header />
              {children}
            </main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
