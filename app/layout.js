import { Inter, Mulish, Raleway } from "next/font/google";
import { lazy, Suspense } from "react";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import Header from "./_components/Header/Header";
import GlobalState from "./_context";

const Footer = lazy(() => import("./_components/Footer/Footer"));
const ButtonScrollUp = lazy(() =>
  import("./_components/Common/ButtonScrollUp")
);

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal"],
  variable: "--base-font",
  preload: true,
  adjustFontFallback: false
});
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["800"],
  style: ["normal"],
  variable: "--base-font2",
  preload: true,
  adjustFontFallback: false
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["900"],
  style: ["normal"],
  variable: "--base-font3",
  preload: true,
  adjustFontFallback: false
});
//Fonts Local Icon
import localFont from "next/font/local";
const fontIcons = localFont({
  src: "../public/fonts-icon/fonts/font-icon.woff",
  variable: "--font-icons",
  display: "swap",
  preload: true,
  adjustFontFallback: false
});
export const metadata = {
  title: "NC Plumbing - Plumber in Des Plaines and Chicago area",
  description: "Narsso Construction and Plumbing - Responsive Next.js Template"
};
export const viewport = {
  themeColor: "#0c4c93",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};
//Script
import Script from "next/script";
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.variable} ${mulish.variable} ${raleway.variable} ${fontIcons.variable}`}
        >
          <Header />
          <GlobalState>{children}</GlobalState>
          <Suspense>
            <Footer />
            <ButtonScrollUp />
          </Suspense>
          <Script src="../js/global-main.js" strategy="lazyOnload" />
        </body>
      </html>
    </ClerkProvider>
  );
}
