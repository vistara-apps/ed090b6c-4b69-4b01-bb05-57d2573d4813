import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Farcaster Guilds & Games",
  description: "Competitive and collaborative mini-games powered by your Farcaster social graph on Base.",
  openGraph: {
    title: "Farcaster Guilds & Games",
    description: "Competitive and collaborative mini-games powered by your Farcaster social graph on Base.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
