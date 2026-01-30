
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out VidxGen.",
    features: [
      "5 AI Video Generations/mo",
      "720p Video Quality",
      "Manual Platform Uploads",
      "Community Support",
    ],
    cta: "Get Started",
    variant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For serious content creators.",
    features: [
      "50 AI Video Generations/mo",
      "1080p Video Quality",
      "Auto-posting to YouTube/TikTok",
      "Priority Support",
      "No Watermark",
    ],
    cta: "Subscribe",
    variant: "default" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For agencies and large teams.",
    features: [
      "Unlimited Generations",
      "4K Video Quality",
      "Advanced Analytics",
      "1-on-1 Support",
      "Custom Branding",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="container py-8 md:py-12 lg:py-24 mx-auto max-w-7xl px-4 sm:px-8">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-10">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the plan that's right for you.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm font-normal text-muted-foreground">/month</span></div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.variant}>{plan.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
