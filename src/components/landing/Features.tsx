import { Video, Share2, Calendar, Wand2, Sparkles, Zap } from "lucide-react";

const features = [
  {
    title: "AI Video Generation",
    description: "Transform simple text prompts into stunning, professional-quality short videos using state-of-the-art AI models.",
    icon: Wand2,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Multi-Platform Publishing",
    description: "Seamlessly publish to YouTube Shorts, TikTok, and Instagram Reels with a single click. Fully automated.",
    icon: Share2,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Smart Content Calendar",
    description: "Plan your content weeks ahead. Our AI suggests optimal posting times for maximum engagement.",
    icon: Calendar,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Trending Templates",
    description: "Access a library of viral templates that are constantly updated based on what's performing best.",
    icon: Video,
    gradient: "from-fuchsia-500 to-rose-500",
  },
  {
    title: "AI Voice & Captions",
    description: "Generate natural-sounding voiceovers and perfectly-timed captions in 50+ languages automatically.",
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Lightning Fast",
    description: "Generate a complete video in under 60 seconds. Our infrastructure is built for speed and scale.",
    icon: Zap,
    gradient: "from-cyan-500 to-teal-500",
  },
];

export function Features() {
  return (
    <section 
      id="features" 
      className="relative py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-950/5 to-background" />
      
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need to{" "}
            <span className="text-gradient">dominate</span>
          </h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground text-lg">
            From AI-powered video creation to automated multi-platform publishing, 
            VidxGen gives you the complete toolkit for viral content.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl glass-card transition-all duration-500 hover:bg-white/[0.06] hover:border-violet-500/20 hover:-translate-y-1">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
