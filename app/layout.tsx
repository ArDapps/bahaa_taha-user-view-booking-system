import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutProvider } from "@/components/providers/layout-context";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bahaa Taha",
  description: "Bahaa Taha's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutProvider>{children}</LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
