'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser, SignUpButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export function Hero() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
    // If not signed in, the SignUpButton wrapper will handle opening the modal
  };

  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-5xl flex-col items-center gap-4 text-center mx-auto">
        <Link
          href="https://twitter.com/shadcn"
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          target="_blank"
        >
          Follow along on Twitter
        </Link>
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Create Viral Short Videos with AI in Seconds
        </h1>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Automate your content creation workflow. Connect your favorite platforms and let VidxGen handle the rest.
        </p>
        <div className="space-x-4">
          {isSignedIn ? (
            <Button size="lg" className="h-11 px-8" onClick={handleGetStarted}>
              Get Started
            </Button>
          ) : (
            <SignUpButton mode="modal">
              <Button size="lg" className="h-11 px-8">
                Get Started
              </Button>
            </SignUpButton>
          )}
          <Link href="#features">
            <Button variant="outline" size="lg" className="h-11 px-8">
                Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
