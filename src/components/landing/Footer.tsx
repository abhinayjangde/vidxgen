import Link from "next/link";
import { Sparkles } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API", href: "#" },
    { name: "Integrations", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: "𝕏" },
  { name: "YouTube", href: "#", icon: "▶" },
  { name: "Discord", href: "#", icon: "💬" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">VidxGen</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              Create viral short-form videos with AI. The future of content creation is here.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-violet-500/20 hover:border-violet-500/30 transition-all duration-300"
                >
                  <span className="text-sm">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-violet-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VidxGen. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with 💜 for content creators
          </p>
        </div>
      </div>
    </footer>
  );
}
