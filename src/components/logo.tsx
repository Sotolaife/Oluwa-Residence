import Link from 'next/link';
import { Building2 } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-foreground" prefetch={false}>
      <Building2 className="h-6 w-6 text-primary" />
      <span className="text-xl font-semibold font-headline">Oluwadara Residences</span>
    </Link>
  );
}
