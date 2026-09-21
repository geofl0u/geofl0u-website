import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "geofl0u",
  description: "geofl0u's personal website",
  icons: [{ rel: "icon", url: "/logo.png" }], //TODO: Find a better favicon
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full bg-black text-white">
      <body className="text-text min-h-full font-mono">{children}</body>
    </html>
  );
}
