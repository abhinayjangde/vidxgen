
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                 <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by VidxGen Team. The source code is available on <Link href="#" className="font-medium underline underline-offset-4">GitHub</Link>.
                </p>
            </div>
             <p className="text-center text-sm text-muted-foreground md:text-left">
                &copy; {new Date().getFullYear()} VidxGen. All rights reserved.
            </p>
        </div>
    </footer>
  );
}
