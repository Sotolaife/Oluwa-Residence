'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const navLinks = [
  { href: '/listings', label: 'Listings' },
  { href: '/about', label: 'About Us' },
  { href: '/agents', label: 'Agents' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <Button asChild variant="outline" className="hidden sm:inline-flex border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href="/contact?subject=Viewing Request">Request Viewing</Link>
          </Button>
          <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/listings">Browse Listings</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4 border-t border-border/40">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-4">
                 <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" onClick={() => setIsMenuOpen(false)}>
                    <Link href="/contact?subject=Viewing Request">Request Viewing</Link>
                </Button>
                 <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setIsMenuOpen(false)}>
                    <Link href="/listings">Browse Listings</Link>
                </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
