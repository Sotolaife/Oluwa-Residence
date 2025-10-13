import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactButtons } from "@/components/contact-buttons";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const companyPhone = "+2348012345678";

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're here to help you with your real estate needs. Contact us today to speak with one of our experts.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
            <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1 text-primary" />
                    <div>
                        <p className="font-semibold">Our Office</p>
                        <p className="text-muted-foreground">123 Luxury Avenue, Ikoyi, Lagos, Nigeria</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 mt-1 text-primary" />
                    <div>
                        <p className="font-semibold">Email Us</p>
                        <p className="text-muted-foreground">hello@oluwadara.com</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 mt-1 text-primary" />
                    <div>
                        <p className="font-semibold">Call Us</p>
                        <p className="text-muted-foreground">{companyPhone}</p>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <ContactButtons phone={companyPhone} />
            </div>
        </div>

        <div className="md:col-span-3">
          <Card className="p-6 rounded-2xl shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-headline">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={6} />
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
