"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Loader2 } from "lucide-react";
import { useIntersectionObserver } from "@/components/hooks/use-intersection-observer";

export function EmailCTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after showing success for 3 seconds
      setTimeout(() => {
        setEmail("");
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="early-access"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-24 bg-muted/50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-xl dark:bg-black"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-center"
          >
            <h2 className="mb-2 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Be the first to try it. 
            </h2>
            <p className="text-lg text-muted-foreground">
              Get early access to LinkMind before everyone else.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${error ? 'border-destructive' : ''} text-lg`}
                disabled={isSubmitting || isSuccess}
              />
              {error && (
                <p className="mt-1 text-sm text-destructive">{error}</p>
              )}
            </div>

            <Button
              variant="gradient"
              size="lg"
              className="w-full rounded-xl font-medium"
              disabled={isSubmitting || isSuccess}
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : isSuccess ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  You're on the list!
                </>
              ) : (
                "Get Early Access"
              )}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}