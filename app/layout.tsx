import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";
import { ThemeProvider } from "@/components/providers/themes-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motion",
  description: "The connected workspace where better , faster work happens.",
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme: light)",
        url:"/logo.svg",
        href:"/logo.svg",
      },
      {
        media:"(prefers-color-scheme: dark)",
        url:"/logo-dark.svg",
        href:"/logo-dark.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="Motion-themes-2">
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
