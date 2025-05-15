"use client";

import { useIntersectionObserver } from "@/components/hooks/use-intersection-observer";
import { motion } from "framer-motion";
import { 
  Brain, 
  Orbit, 
  MessageSquare, 
  Sparkles,
  Webhook,
  FileSearch,
  Share2,
  Bot,
  MessageCircle,
  Wand2,
  FileText
} from "lucide-react";

const features = [
  {
    icon: <Brain className="h-7 w-7" />,
    title: "GPT organizes your thoughts",
    description:
      "AI analyzes and structures your messages intelligently.",
  },
  {
    icon: <Orbit className="h-7 w-7" />,
    title: "Sync to Notion",
    description:
      "Seamlessly syncs to your Notion workspace for easy access.",
  },
  {
    icon: <MessageSquare className="h-7 w-7" />,
    title: "Zero friction workflow",
    description:
      "Just message our Telegram bot - everything else happens automatically.",
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: "Preserve insights",
    description:
      "Never lose valuable ideas - everything is captured and organized.",
  },
];

const additionalFeatures = [
  {
    icon: <Webhook className="h-6 w-6" />,
    title: "Automated Workflows",
    description: "Smart categorization and organization",
    gradient: "from-primary-blue/20 to-primary-blue/5"
  },
  {
    icon: <FileSearch className="h-6 w-6" />,
    title: "Smart Search",
    description: "Powerful search across all your content",
    gradient: "from-secondary-amber/20 to-secondary-amber/5"
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Easy Sharing",
    description: "Share notes and categories with your team",
    gradient: "from-accent-emerald/20 to-accent-emerald/5"
  },
];

const processSteps = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Connect",
    description: "Add LinkMind to Telegram",
    detail: "One-click connection to start organizing your thoughts.",
    gradient: "from-primary-blue/10 to-transparent"
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Share",
    description: "Send voice or text",
    detail: "Share your ideas naturally through voice notes or messages.",
    gradient: "from-secondary-amber/10 to-transparent"
  },
  {
    icon: <Wand2 className="h-6 w-6" />,
    title: "Process",
    description: "AI magic happens",
    detail: "Advanced AI organizes your content in real-time.",
    gradient: "from-accent-emerald/10 to-transparent"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Access",
    description: "Find in Notion",
    detail: "Everything organized and searchable in your Notion workspace.",
    gradient: "from-primary-blue/10 to-transparent"
  }
];

export function StickyScrollSection() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <>
      <section
        id="features"
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative bg-muted/30 py-24"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main features section */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-lg">
                <h2 className="mb-12 text-3xl font-bold md:text-4xl">
                  Transform your scattered thoughts into structured knowledge
                </h2>

                <div className="space-y-10">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isIntersecting
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 rounded-xl bg-primary-blue/10 p-3 text-primary">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-base text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Additional features section */}
            <div className="lg:w-1/2">
              <div className="grid gap-8">
                {additionalFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`rounded-2xl bg-gradient-to-br ${feature.gradient} p-8`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-4 rounded-full bg-white/90 p-3 text-primary-blue inline-block">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-base text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative bg-background py-24"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold md:text-4xl mb-4">
              How LinkMind Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Your journey from thoughts to organized knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`
                  absolute inset-0 
                  bg-gradient-to-b ${step.gradient}
                  rounded-2xl 
                  transition-all 
                  duration-300
                  opacity-0
                  group-hover:opacity-100
                `} />
                
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-xl bg-white/90 p-3 text-primary-blue shadow-sm">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                      <div className="w-8 h-px bg-border" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}