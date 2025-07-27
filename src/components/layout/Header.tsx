"use client";

import { Menu, Scale, X } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "#about", label: "Tentang" },
    { href: "#services", label: "Layanan" },
    { href: "#education", label: "Edukasi" },
    { href: "#team", label: "Tim" },
    { href: "#cases", label: "Kasus" },
    { href: "#contact", label: "Kontak" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(isScrolled);

  return (
    <header
      className={` sticky top-0 z-50 duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-white via-gray-50 to-white text-gray-900 backdrop-blur-sm border-b border-yellow-400/30"
          : " bg-white"
      }  `}
    >
      <div className="container mx-auto px-2 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg shadow-lg">
              <Scale className="h-8 w-8 text-black" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent">
                SATYAM LAW OFFICE
              </h1>
              <p className="text-sm text-gray-600">Advokat & Konsultan Hukum</p>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="hover:text-yellow-600 transition-all duration-300 font-medium text-gray-900 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-brand hover:bg-brand/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <div className="md:flex hidden items-center space-x-4">
            <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black border-0 shadow-lg font-semibold">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-5">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    scrollToSection(item.href), setIsMobileMenuOpen(false);
                  }}
                  className="hover:text-yellow-600 transition-all duration-300 font-medium text-gray-900 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <Link href="#" className="mt-2">
                <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black border-0 shadow-lg font-semibold w-full">
                  Konsultasi Gratis
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
