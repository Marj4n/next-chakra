import "@/css/main.css";
import type { Metadata } from "next";
import { fonts } from "@/config/chakra.fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Next.js + ChakraUI Starter",
  openGraph: {
    title: "Next.js + ChakraUI Starter",
    description: "A starter template for Next.js + ChakraUI",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.openGraph?.description} />
      </head>
      <body className={fonts.rubik.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
