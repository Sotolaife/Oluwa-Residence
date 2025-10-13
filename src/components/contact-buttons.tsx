import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactButtonsProps {
  phone: string;
  whatsappText?: string;
}

export function ContactButtons({ phone, whatsappText = "Hello, I'm interested in a property." }: ContactButtonsProps) {
  const whatsappLink = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappText)}`;
  const telLink = `tel:${phone}`;

  return (
    <div className="flex items-center gap-4">
      <Button asChild size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
        <a href={telLink}>
          <Phone className="mr-2 h-5 w-5" />
          Call
        </a>
      </Button>
      <Button asChild size="lg" variant="outline" className="flex-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="mr-2 h-5 w-5" />
          WhatsApp
        </a>
      </Button>
    </div>
  );
}
