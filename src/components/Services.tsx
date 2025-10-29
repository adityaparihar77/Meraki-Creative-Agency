import { TrendingUp, Target, Palette, Megaphone, Search, FileText, Globe, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: TrendingUp,
    title: "DIGITAL MARKETING",
  },
  {
    icon: Target,
    title: "BRAND STRATEGY",
  },
  {
    icon: Palette,
    title: "CREATIVE DESIGN",
  },
  {
    icon: Megaphone,
    title: "ADVERTISEMENT",
  },
  {
    icon: Search,
    title: "SEO",
  },
  {
    icon: FileText,
    title: "CONTENT CREATION",
  },
  {
    icon: Globe,
    title: "WEBSITE",
  },
  {
    icon: Sparkles,
    title: "LOGO & BRANDING KIT",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate('/work');
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-background via-secondary/5 to-background overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 animate-fade-in">
            <div className="inline-block">
              <span className="text-primary text-sm font-inter font-bold tracking-widest uppercase mb-3 block">
                SERVICES WE OFFER
              </span>
              <h2 className="font-playfair font-black text-4xl sm:text-5xl md:text-7xl bg-gradient-to-r from-primary via-secondary to-black bg-clip-text text-transparent leading-tight">
                OUR EXPERTISE INCLUDES
              </h2>
              <div className="h-1.5 w-40 bg-gradient-to-r from-primary to-secondary mx-auto mt-5 rounded-full"></div>
            </div>
            <p className="font-inter text-base sm:text-xl text-foreground/80 max-w-3xl mx-auto px-4 leading-relaxed font-medium">
              From brand strategy to execution, Meraki Agency provides end-to-end marketing solutions tailored to your goals.
              <br className="hidden sm:block" />
              <span className="text-primary font-semibold">Our services are designed to engage, inspire, and convert.</span>
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={handleServiceClick}
                className="group relative p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-200 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Gradient Accent on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  {/* Decorative Dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                </div>
                
                {/* Service Title */}
                <h3 className="relative font-inter font-black text-sm sm:text-base text-center text-foreground/90 leading-tight tracking-tight group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Text */}
          <div className="text-center mt-12 sm:mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="font-inter text-lg sm:text-2xl font-semibold text-foreground/70">
              Ready to <span className="text-primary font-bold">elevate your brand</span>? 
              <br className="sm:hidden" />
              Let's <span className="text-secondary font-bold">create magic</span> together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
