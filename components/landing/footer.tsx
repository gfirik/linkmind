import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Zap className="h-6 w-6 text-primary mr-2" />
            <span className="font-sora font-bold text-xl">LinkMind</span>
          </div>

          <div className="flex flex-wrap justify-center space-x-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-6 md:mt-0 text-sm text-muted-foreground">
            © {new Date().getFullYear()} LinkMind. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
