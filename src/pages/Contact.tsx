import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Us - Meraki Creative Agency | Get In Touch</title>
        <meta name="description" content="Ready to transform your brand? Contact Meraki Creative Agency. Email: hello@merakicreative.com | Phone: +1 (555) 123-4567 | New York, NY" />
        <meta property="og:title" content="Contact Meraki Creative Agency - Let's Create Together" />
        <meta property="og:description" content="Start a conversation about your brand vision. We're here to help transform your business into an unforgettable brand." />
        <link rel="canonical" href="https://merakicreative.com/contact" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-3 sm:space-y-5 mb-8 sm:mb-12 animate-slide-up">
                <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-7xl text-primary">
                  Get In Touch
                </h1>
                <p className="font-inter text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                  Ready to transform your brand? Let's start a conversation about your vision
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                {/* Contact Form */}
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="h-12 hover-glow"
                      />
                    </div>
                    
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="h-12 hover-glow"
                      />
                    </div>

                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        className="h-12 hover-glow"
                      />
                    </div>

                    <div>
                      <Input
                        type="text"
                        placeholder="Subject"
                        required
                        className="h-12 hover-glow"
                      />
                    </div>

                    <div>
                      <Textarea
                        placeholder="Tell us about your project..."
                        required
                        className="min-h-[150px] hover-glow"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full hover-lift">
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-6 sm:space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div>
                    <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-secondary mb-6 sm:mb-8">
                      Contact Information
                    </h2>
                    
                    <div className="space-y-5 sm:space-y-6">
                      <div className="flex items-start gap-4 group hover-lift p-4 -m-4 rounded-lg">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-inter font-semibold text-secondary mb-1 text-sm sm:text-base">
                            Email
                          </p>
                          <p className="font-inter text-foreground text-sm sm:text-base">
                         themerakiofficial01@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group hover-lift p-4 -m-4 rounded-lg">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-inter font-semibold text-secondary mb-1 text-sm sm:text-base">
                            Phone
                          </p>
                          <div className="font-inter text-foreground text-sm sm:text-base space-y-1">
                            <p>+91 8516841484</p>
                            <p>+91 9406550954</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;