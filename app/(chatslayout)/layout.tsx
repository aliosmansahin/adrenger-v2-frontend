import type { Metadata } from "next";
import "../globals.css";
import ContainerWithChats from "../components/ContainerWithChats";
import Container from "../components/Container";
import TokenProvider from "../components/Auth/TokenProvider";
import QueryProvider from "../components/QueryProvider";

export const metadata: Metadata = {
  title: "adrenger by adrendev",
  description: "adrenger web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <QueryProvider>
          <Container>
            <ContainerWithChats>{children}</ContainerWithChats>
          </Container>
        </QueryProvider>
      </body>
    </html>
  );
}
