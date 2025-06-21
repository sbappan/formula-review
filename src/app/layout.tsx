import type { Metadata } from "next";

import { Footer } from "@/components/footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Formula Review",
  description: "Website to review GPs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏎️</text></svg>"
        />
      </head>
      <body className={"antialiased"}>
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
          <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
