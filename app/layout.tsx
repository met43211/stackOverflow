import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/index.scss";
import { ReactQueryProvider } from "@/Providers/ReactQueryProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StackOverflow Search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
