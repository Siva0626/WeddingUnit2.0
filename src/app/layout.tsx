import type { Metadata } from "next";
import { Jost, Montserrat } from "next/font/google";
import "./styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-sans",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "The Wedding Unit | Photography & Cinematography",
  description:
    "Premium wedding photography and cinematography by The Wedding Unit.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://weddingunit2-0.sivaranjani0626.workers.dev/"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}



