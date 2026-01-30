'use client';

import Link from 'next/link';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between px-6 py-3 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/20">
          {/* Logo & Nav Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient group-hover:opacity-80 transition-opacity">
                VidxGen
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              <Link 
                href="#features" 
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                Features
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 group-hover:w-3/4 transition-all duration-300" />
              </Link>
              <Link 
                href="#pricing" 
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                Pricing
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            </div>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <SignedOut>
              <SignInButton mode="modal">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                >
                  Dashboard
                </Button>
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9 ring-2 ring-violet-500/20",
                    userButtonPopoverCard: "bg-gray-900 border border-white/10 shadow-2xl",
                    userButtonPopoverActionButton: "text-gray-300 hover:text-white hover:bg-white/10",
                    userButtonPopoverActionButtonText: "text-gray-300",
                    userButtonPopoverFooter: "hidden",
                  },
                }}
              />
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
}
