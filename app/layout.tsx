import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/Theme";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "UFirst",
  description:
    "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/health-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}>

      <ThemeProvider attribute="class" defaultTheme="dark">
        
      
            {children}
              <div className="absolute top-2 left-2">
                <ThemeToggle/>
            </div>
        </ThemeProvider>
        </main>
      </body>
    </html>
  );
}