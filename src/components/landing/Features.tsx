
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Share2, Calendar, Wand2 } from "lucide-react";

const features = [
  {
    title: "AI Video Generation",
    description: "Generate high-quality short videos from simple text prompts using advanced AI models.",
    icon: Wand2,
  },
  {
    title: "Multi-Platform Support",
    description: "Direct integrations with YouTube Shorts, Instagram Reels, and TikTok.",
    icon: Share2,
  },
  {
    title: "Smart Scheduling",
    description: "Schedule your content calendar in advance and let us handle the posting.",
    icon: Calendar,
  },
   {
    title: "Customizable Templates",
    description: "Choose from a variety of trending templates to make your content pop.",
    icon: Video,
  },
];

export function Features() {
  return (
    <section id="features" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 mx-auto max-w-7xl px-4 sm:px-8">
      <div className="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to dominate short-form video content.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
        {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col justify-between">
                <CardHeader>
                    <div className="p-2 mb-2 w-fit rounded-lg bg-primary/10 text-primary">
                        <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-base">
                        {feature.description}
                    </CardDescription>
                </CardContent>
            </Card>
        ))}
      </div>
    </section>
  );
}
