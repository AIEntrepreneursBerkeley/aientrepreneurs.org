import "~/styles/globals.css";
import { ThemeProvider } from "~/components/layouts/theme-provider";
import { SplashCursor } from "~/components/ui/splash-cursor";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "AI Entrepreneurs at Berkeley",
  description:
    "The premier AI incubator for early stage startups and a community of risk-takers, researchers, and investor partners.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const signifier = localFont({
  src: [
    {
      path: "../../public/fonts/signifier-web-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/signifier-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-signifier",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${signifier.variable}`}
      suppressHydrationWarning
    >
      <body>
        <SplashCursor />
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
