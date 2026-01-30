'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Free",
    price: { monthly: "$0", yearly: "$0" },
    description: "Perfect for trying out VidxGen and creating your first videos.",
    features: [
      "5 AI Video Generations/mo",
      "720p Video Quality",
      "Manual Platform Uploads",
      "Community Support",
      "Basic Templates",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: "$29", yearly: "$24" },
    description: "For serious content creators ready to scale their presence.",
    features: [
      "50 AI Video Generations/mo",
      "1080p Video Quality",
      "Auto-posting to All Platforms",
      "Priority Support",
      "Premium Templates",
      "No Watermark",
      "Analytics Dashboard",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    description: "For agencies and teams needing unlimited power.",
    features: [
      "Unlimited Generations",
      "4K Video Quality",
      "White-label Solution",
      "Dedicated Account Manager",
      "Custom Integrations",
      "SLA Guarantee",
      "Team Collaboration",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-indigo-950/5 to-background" />
      
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Choose Your <span className="text-gradient">Perfect Plan</span>
          </h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground text-lg">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center gap-3 mt-6 p-1 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                !isYearly 
                  ? "bg-violet-600 text-white shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                isYearly 
                  ? "bg-violet-600 text-white shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Yearly
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative group flex flex-col rounded-2xl transition-all duration-500",
                plan.popular 
                  ? "lg:-mt-4 lg:mb-4" 
                  : ""
              )}
            >
              {/* Popular badge & glow */}
              {plan.popular && (
                <>
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 rounded-2xl opacity-100 blur-sm animate-gradient" />
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 border-0 px-4 py-1 z-20">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </>
              )}
              
              {/* Card Content */}
              <div className={cn(
                "relative flex flex-col h-full p-8 rounded-2xl",
                plan.popular 
                  ? "bg-gray-900 border-0 z-10" 
                  : "glass-card hover:bg-white/[0.06] hover:border-violet-500/20"
              )}>
                {/* Plan Name */}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 mb-6">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  {plan.price.monthly !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                  {isYearly && plan.price.monthly !== "Custom" && (
                    <p className="text-sm text-green-400 mt-1">Billed annually</p>
                  )}
                </div>
                
                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={cn(
                        "mt-0.5 rounded-full p-1",
                        plan.popular ? "bg-violet-500/20" : "bg-white/10"
                      )}>
                        <Check className={cn(
                          "w-3 h-3",
                          plan.popular ? "text-violet-400" : "text-muted-foreground"
                        )} />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button 
                  className={cn(
                    "w-full h-11 transition-all duration-300",
                    plan.popular 
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 glow-violet hover:scale-[1.02]" 
                      : "variant-outline border-violet-500/30 hover:bg-violet-500/10"
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
