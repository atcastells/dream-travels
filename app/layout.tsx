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
      <body>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>{" "}
      </body>
    </html>
  );
}
