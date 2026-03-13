import type { Metadata } from "next";
import "../globals.css";
import ContainerWithChats from "../components/ContainerWithChats";
import Container from "../components/Container";
import TokenProvider from "../components/Auth/TokenProvider";

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
        <TokenProvider>
          <Container>
            <ContainerWithChats>{children}</ContainerWithChats>
          </Container>
        </TokenProvider>
      </body>
    </html>
  );
}
