import ReactQueryProvider from "@/utils/providers/ReactQueryClientProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream Travels",
  description: "A travel planning app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* favicon */}
        <link rel="icon" href="/favicon.png" />
        {/* meta tags */}
      </head>
      <body>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>{" "}
      </body>
    </html>
  );
}
