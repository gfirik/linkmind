"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useScrollPosition } from "@/components/hooks/use-scroll-position";

export function Navbar() {
  const { scrollPosition } = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setIsScrolled(scrollPosition > 50);
  }, [scrollPosition]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <div className="flex items-center">
          <div className="flex items-center">
            <Zap className="mr-2 h-6 w-6 text-primary-blue" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-accent-emerald bg-clip-text text-transparent">
              LinkMind
            </span>
          </div>
        </div>

        <nav className="hidden space-x-8 md:flex">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-muted-foreground hover:text-foreground hover:text-primary-blue transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-muted-foreground hover:text-foreground hover:text-primary-blue transition-colors"
          >
            How it works
          </button>
        </nav>

        <Button 
          variant="outline" 
          onClick={() => scrollToSection('early-access')}
          className="rounded-xl border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white transition-colors"
        >
          Early Access
        </Button>
      </div>
    </motion.header>
  );
}