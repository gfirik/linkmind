"use client";

import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-center">
          <Zap className="mr-2 h-6 w-6 text-primary-blue" />
          <span className="text-xl font-bold">LinkMind</span>
        </div>

        <div className="mb-8 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Privacy Policy
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Terms of Service
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Contact Us
          </a>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} LinkMind. All rights reserved.
        </div>
      </div>
    </footer>
  );
}