import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/Providers";
import { Navbar } from "../components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Tattoo Try-On - Virtual Tattoo Simulator",
  description: "Visualize and try on tattoo designs on your body virtually using AI. Upload your photo and tattoo art to preview instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full w-full dark" style={{ colorScheme: "dark" }}>
      <body className={`${inter.variable} ${outfit.variable} h-full w-full flex flex-col antialiased bg-zinc-950 text-zinc-100 font-sans overflow-hidden`}>
        <Providers>
          <Navbar />
          <div className="flex-1 flex flex-col overflow-hidden min-h-0">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
