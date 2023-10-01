import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./ThemeProvider";
import Header from "./Header";
import Footer from "./Footer";
import CartContext from "./CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Echoes of Literature",
  description: "Book store developer project, testing purposes only",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <CartContext>
            <div className="relative">
            <Header />
            {children}
            <Footer />
            </div>
          </CartContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
