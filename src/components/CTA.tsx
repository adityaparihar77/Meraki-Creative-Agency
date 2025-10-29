import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          <h2 className="font-playfair font-black text-5xl md:text-7xl leading-tight">
            Ready to make your brand impossible to ignore?
          </h2>
          <p className="font-inter text-xl md:text-2xl opacity-90">
            Let's transform your vision into a cultural icon.
          </p>
          <div>
            <Link to="/work">
              <Button size="lg" variant="outline" className="group bg-transparent border-2 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
