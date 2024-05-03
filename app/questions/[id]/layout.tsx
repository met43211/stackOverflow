import Container from "@/components/Contaier/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Question",
};

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container>{children}</Container>;
}
