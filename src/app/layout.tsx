import type { Metadata } from "next";
import "./globals.css";

// Components
import Navbar from "src/components/navbar/navbar";
import ClientLayout from "./clientLayout";


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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
