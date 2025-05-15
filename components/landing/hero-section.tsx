"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";

export function HeroSection() {
  const scrollToEarlyAccess = () => {
    const element = document.getElementById("early-access");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background py-16 md:py-24">
      {/* Background decorative elements */}
      <motion.div
        className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.25 }}
      />

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center">
        {/* Floating elements */}
        <motion.div
          className="absolute top-4 left-4 md:top-16 md:left-16 h-16 w-16 md:h-24 md:w-24 rounded-2xl bg-primary-blue/20 backdrop-blur-sm"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.2,
          }}
          style={{ animation: "float-slow 6s ease-in-out infinite" }}
        />
        <motion.div
          className="absolute bottom-8 right-8 md:bottom-16 md:right-16 h-20 w-20 md:h-32 md:w-32 rounded-full bg-secondary-amber/20 backdrop-blur-sm"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.4,
          }}
          style={{ animation: "float-medium 5s ease-in-out infinite" }}
        />
        <motion.div
          className="absolute top-32 right-10 md:top-40 md:right-40 h-12 w-12 md:h-20 md:w-20 rounded-lg bg-accent-emerald/20 backdrop-blur-sm"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.6,
          }}
          style={{ animation: "float-fast 4s ease-in-out infinite" }}
        />

        {/* Hero content */}
        <motion.div
          className="max-w-4xl pt-16 md:pt-32"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="outline"
              className="text-base px-4 py-1 border-secondary-amber"
            >
              Telegram First · Built for Thinkers
            </Badge>
          </motion.div>
          <motion.h1
            className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Your Telegram thoughts, organized by GPT — synced to your second
            brain.
          </motion.h1>

          <motion.p
            className="mb-8 text-xl text-muted-foreground md:text-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turn your voice notes, ideas, and chats into Notion pages —
            automatically.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              variant="gradient"
              size="xl"
              onClick={scrollToEarlyAccess}
              className="rounded-2xl shadow-lg"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
