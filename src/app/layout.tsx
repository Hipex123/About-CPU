import type { Metadata } from "next";
import "./globals.css";

import Navbar from "src/components/navbar/navbar";

export const metadata: Metadata = {
  title: "About CPU",
  description: "A school project web page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
