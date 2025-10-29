import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const plans = [
    {
      name: "STARTER",
      price: "₹9,999",
      period: "monthly",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "4–6 reels (basic edit)",
        "5–8 graphic posts",
        "Basic SEO optimization",
        "Meta Ads",
        "Social media management",
        "Monthly performance report",
      ],
    },
    {
      name: "GROWTH",
      price: "₹15,999",
      period: "monthly",
      description: "Ideal for growing businesses ready to scale their presence",
      features: [
        "8–10 reels (storytelling edit)",
        "8–12 graphics / carousels",
        "Caption writing & posting",
        "Advanced SEO optimization",
        "Ads setup & monitoring (ad budget extra)",
        "Monthly strategy call",
      ],
      featured: true,
    },
    {
      name: "PROFESSIONAL",
      price: "₹29,999",
      period: "monthly",
      description: "Comprehensive solution for brands seeking market dominance",
      features: [
        "12–15 reels (high-quality edits, storyboards)",
        "12–15 premium posts",
        "Advanced SEO & funnel optimization",
        "Paid ads management (ad spend extra)",
        "Brand workshop / consulting call",
        "Landing page / website improvements",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Services & Pricing - Meraki Creative Agency | Marketing Packages</title>
        <meta name="description" content="Explore Meraki's marketing services - Starter ($500/mo), Growth ($1,200/mo), and Professional ($2,500/mo) packages. Choose the perfect plan for your brand." />
        <meta property="og:title" content="Marketing Services & Pricing Plans - Meraki Creative Agency" />
        <meta property="og:description" content="From starter to professional packages - comprehensive marketing solutions tailored to your needs and budget." />
        <link rel="canonical" href="https://merakicreative.com/services" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <section className="relative py-12 sm:py-16 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-10 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-3 sm:space-y-5 mb-8 sm:mb-12 animate-slide-up">
                <div className="inline-block">
                  <span className="text-secondary text-sm font-inter font-bold tracking-widest uppercase mb-2 block animate-fade-in">
                    PICK YOUR WORTH
                  </span>
                  <h1 className="font-playfair font-black text-4xl sm:text-5xl md:text-7xl bg-gradient-to-r from-primary via-secondary to-black bg-clip-text text-transparent leading-tight">
                    Our Services
                  </h1>
                  <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
                </div>
                <p className="font-inter text-base sm:text-xl text-foreground/80 max-w-3xl mx-auto px-4 font-semibold">
                  Choose the perfect plan to elevate your brand and achieve your marketing goals
                </p>
              </div>

              <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`group relative p-8 sm:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-4 animate-scale-in backdrop-blur-sm ${
                      plan.featured
                        ? "bg-gradient-to-br from-primary/10 via-white to-secondary/10 border-3 border-primary shadow-2xl shadow-primary/20 scale-105"
                        : "bg-white/80 border-2 border-gray-200 hover:border-primary/50 shadow-xl hover:shadow-2xl"
                    }`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Top Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-2 rounded-t-3xl ${
                      plan.featured 
                        ? "bg-gradient-to-r from-primary via-secondary to-primary" 
                        : "bg-gradient-to-r from-gray-300 to-gray-400"
                    }`}></div>
                    
                    {plan.featured && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-inter font-bold text-sm rounded-full shadow-lg animate-float">
                          ⭐ MOST POPULAR
                        </div>
                      </div>
                    )}
                    
                    {/* Plan Name */}
                    <div className="mb-6 mt-4">
                      <h3 className={`font-playfair font-black text-3xl sm:text-4xl tracking-tight ${
                        plan.featured ? "text-primary" : "text-secondary"
                      }`}>
                        {plan.name}
                      </h3>
                      <p className="font-inter text-sm text-foreground/70 mt-2">
                        {plan.description}
                      </p>
                    </div>
                    
                    {/* Price */}
                    <div className="mb-8 pb-8 border-b-2 border-gray-200">
                      <div className="flex items-baseline gap-2">
                        <span className="font-playfair font-black text-5xl sm:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                        <span className="font-inter text-lg text-muted-foreground font-medium">
                          /– {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.featured 
                              ? "bg-gradient-to-br from-primary to-secondary" 
                              : "bg-gradient-to-br from-gray-300 to-gray-400"
                          } group-hover/item:scale-110 transition-transform`}>
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-inter text-sm sm:text-base text-foreground/90 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full text-base sm:text-lg py-6 rounded-xl font-bold transition-all duration-300 ${
                        plan.featured
                          ? "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white shadow-lg hover:shadow-2xl"
                          : "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      }`}
                    >
                      Get Started →
                    </Button>

                    {/* Decorative Corner Elements */}
                    {plan.featured && (
                      <>
                        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
                        <div className="absolute -top-2 -left-2 w-16 h-16 bg-secondary/20 rounded-full blur-xl"></div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
