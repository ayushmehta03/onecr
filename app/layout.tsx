import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";



export const metadata: Metadata = {
  title: "OneCr",
  description: "Your own Grocery Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ClerkProvider>
          
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            {children}

          </ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
    </>
  );
}