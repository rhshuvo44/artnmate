"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import Div from "../ui/Div";

interface HeaderProps {
  variant?: string;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ variant }: HeaderProps) {
  const pathname = usePathname();

  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = () => setMobileToggle((prev) => !prev);
  const toggleSideHeader = () => setSideHeaderToggle((prev) => !prev);
  const closeMobileMenu = () => setMobileToggle(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ?? ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <h2 className="cs-logo">Artnmate</h2>
                </Link>
              </Div>

              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className={`cs-nav_list ${
                      mobileToggle ? "cs-nav_active" : ""
                    }`}
                  >
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={isActive(item.href) ? "active" : ""}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* <button
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                  >
                    <span />
                  </button> */}

                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={toggleMobileMenu}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>

              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={toggleSideHeader}
                    aria-label="Toggle side header"
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      {/* Side Header */}
      <Div className={`cs-side_header ${sideHeaderToggle ? "active" : ""}`}>
        <button
          className="cs-close"
          onClick={toggleSideHeader}
          aria-label="Close side header"
        />

        <Div className="cs-side_header_overlay" onClick={toggleSideHeader} />

        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />

          <Link className="cs-site_branding" href="/">
            {/* <Image
              src="/images/footer_logo.svg"
              alt="Artnmate Logo"
              width={100}
              height={100}
              priority
            /> */}
            <h1>Artnmate</h1>
          </Link>

          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div>

          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>

          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </Div>

          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
