import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
