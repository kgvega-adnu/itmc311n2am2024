import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// Vercel Analytics
import { Analytics } from "@vercel/analytics/react"

import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer";

const inter = Inter({ 
    subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Gupiro",
  description: "A barber reservation app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Footer />
          <Toaster/>
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}
