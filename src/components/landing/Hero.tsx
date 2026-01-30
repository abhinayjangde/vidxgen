'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser, SignUpButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Play, ArrowRight } from 'lucide-react';

export function Hero() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/30 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-[80px] animate-float" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Main Content */}
      <div className="relative z-10 container flex max-w-5xl flex-col items-center gap-8 text-center mx-auto px-4">
        {/* Announcement Badge */}
        <Badge 
          variant="outline" 
          className="group px-4 py-2 rounded-full border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 transition-all duration-300 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 mr-2 text-violet-400" />
          <span className="text-sm text-violet-300">New: AI Voice Cloning is here</span>
          <ArrowRight className="w-4 h-4 ml-2 text-violet-400 group-hover:translate-x-1 transition-transform" />
        </Badge>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          <span className="block text-foreground">Create Viral Short Videos</span>
          <span className="block text-gradient-animate mt-2">with AI in Seconds</span>
        </h1>
        
        {/* Subheadline */}
        <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
          Transform your ideas into viral content. VidxGen automates your entire video creation workflow — 
          from script to screen, ready for <span className="text-violet-400">YouTube Shorts</span>, 
          <span className="text-indigo-400"> TikTok</span>, and <span className="text-purple-400">Instagram Reels</span>.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {isSignedIn ? (
            <Button 
              size="lg" 
              className="h-12 px-8 text-base bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 glow-violet transition-all duration-300 hover:scale-105"
              onClick={handleGetStarted}
            >
              <Play className="w-5 h-5 mr-2" />
              Start Creating
            </Button>
          ) : (
            <SignUpButton mode="modal">
              <Button 
                size="lg" 
                className="h-12 px-8 text-base bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 glow-violet transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Creating — It&apos;s Free
              </Button>
            </SignUpButton>
          )}
          <Link href="#features">
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 px-8 text-base border-violet-500/30 hover:bg-violet-500/10 hover:border-violet-500/50 transition-all duration-300"
            >
              See How It Works
            </Button>
          </Link>
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-col items-center gap-4 mt-8 pt-8 border-t border-white/5">
          <p className="text-sm text-muted-foreground">Trusted by content creators worldwide</p>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient">10K+</p>
              <p className="text-xs text-muted-foreground">Videos Created</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient">5K+</p>
              <p className="text-xs text-muted-foreground">Active Creators</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient">1M+</p>
              <p className="text-xs text-muted-foreground">Views Generated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
