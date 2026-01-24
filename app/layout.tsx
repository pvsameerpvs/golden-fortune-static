import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legacy - Corporate Services Provider Dubai",
  description: "Premier business setup consultancy in Dubai, UAE. We specialize in Mainland, Free Zone, and Offshore company formation.",
  icons: {
    icon: "/fevic.png",
    shortcut: "/fevic.png",
    apple: "/fevic.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <SocialSidebar />
        <MobileBottomNav />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
