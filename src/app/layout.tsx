import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

// Display: characterful variable grotesque for headlines.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

// Body: highly legible on small screens.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Accent: an editorial serif italic for the odd emphasised word.
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const DESCRIPTION =
  "Learn AI from zero in 5-minute lessons built for India: no code, no maths, just clear ideas you can use at work tomorrow.";

export const metadata: Metadata = {
  title: "AI Fluency from Scratch",
  description: DESCRIPTION,
  openGraph: {
    title: "AI Fluency from Scratch",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
