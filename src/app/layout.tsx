import Header from "@/component/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "@/component/layout/Footer";
import CustomCursor from "@/component/ui/CustomCursor";
import "@/scss/index.scss";
import { Open_Sans, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--primary-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--secondary-font",
});

export const metadata: Metadata = {
  title: "Artnmate Creative Agency",
  description:
    "Artnmate is a creative digital agency specializing in Next.js, UI/UX, and modern web solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header variant="default" />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
