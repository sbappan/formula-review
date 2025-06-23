import type { Metadata } from "next";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "BoxBox BoxBox",
  description: "Website to review GPs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏎️</text></svg>"
        />
      </head>
      <body>
        <Providers>
          <div className="relative flex min-h-screen w-full flex-col before:absolute before:inset-0 before:-z-10 before:bg-[url(/light-bg-2.svg)] before:bg-repeat before:opacity-20 sm:px-20 sm:before:bg-cover sm:before:bg-no-repeat dark:before:opacity-30">
            <Header />
            <main className="relative flex w-full flex-grow flex-col gap-[32px] px-8 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
