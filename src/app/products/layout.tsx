"use client";
import { useState, useEffect } from "react";
import "../globals.css";
import Navbar from "@/components/common/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Hide navbar instantly on scroll down
      setShowNavbar(false);
    } else if (currentScrollY === 0) {
      // Show navbar only when user has scrolled back to the top
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <html lang="en">
      <body>
        {showNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
