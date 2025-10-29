import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0 opacity-20 animate-scale-in"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          <h1 className="font-playfair font-black text-4xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight tracking-tight animate-slide-up ">
            <span className="text-black">WE MAKE</span>
            <br />
            <span className="text-red-600 animate-slide-up font-black" style={{ animationDelay: '0.2s' }}>BRANDS</span>
            <br />
            <span className="text-black animate-slide-up" style={{ animationDelay: '0.4s' }}>IMPOSSIBLE TO IGNORE</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-inter font-semibold text-black max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
                
          </p>
          <div className="pt-4 sm:pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
