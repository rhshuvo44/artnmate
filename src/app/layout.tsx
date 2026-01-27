import Header from "@/component/layout/Header";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "swiper/css";
// import "swiper/css/pagination";
import "@/scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";
import CustomCursor from "@/component/ui/CustomCursor";
import Footer from "@/component/layout/Footer";

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
