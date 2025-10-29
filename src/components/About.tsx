const About = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-background via-card to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Header Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-primary text-sm font-inter font-semibold tracking-widest uppercase mb-4 block">
                Discover Our Story
              </span>
              <h2 className="font-playfair font-black text-6xl md:text-8xl bg-gradient-to-r from-black via-primary to-secondary bg-clip-text text-transparent leading-tight">
                Who We Are
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Introduction Paragraph with styled box */}
            <div className="relative p-8 md:p-12 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl border border-primary/10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary/20 rounded-full"></div>
              <p className="font-inter text-xl md:text-2xl leading-relaxed text-foreground/90 text-center">
                 <span className="font-bold text-primary">Meraki Creative Agency</span> has become a leader in marketing. We pride ourselves on our commitment to delivering high-quality, creative designs tailored to meet the unique needs of our clients. Our mission is simple: to transform ambitious businesses into <span className="font-bold text-secondary">unforgettable brands</span> through strategy, creativity, and innovation.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative p-8 bg-gradient-to-br from-white to-primary/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in border border-primary/10 hover:border-primary/30" style={{ animationDelay: '0.2s' }}>
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary rounded-l-2xl"></div>
                <div className="space-y-4 pl-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <h3 className="font-playfair font-bold text-2xl text-primary">Attention Grabbing</h3>
                  </div>
                  <p className="font-inter text-lg leading-relaxed text-foreground/80">
                    We create <span className="font-bold text-primary">content that grabs attention</span> and campaigns that drive sales. Every piece is crafted to captivate and convert.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 bg-gradient-to-br from-white to-secondary/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in border border-secondary/10 hover:border-secondary/30" style={{ animationDelay: '0.3s' }}>
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-secondary to-primary rounded-l-2xl"></div>
                <div className="space-y-4 pl-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                    <h3 className="font-playfair font-bold text-2xl text-secondary">Results-Driven</h3>
                  </div>
                  <p className="font-inter text-lg leading-relaxed text-foreground/80">
                    We are a <span className="font-bold text-secondary">results-driven creative agency</span>, passionate about turning ideas into influence. From brand strategy to digital growth.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 bg-gradient-to-br from-white to-primary/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in border border-primary/10 hover:border-primary/30" style={{ animationDelay: '0.4s' }}>
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary rounded-l-2xl"></div>
                <div className="space-y-4 pl-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <h3 className="font-playfair font-bold text-2xl text-primary">Lead the Market</h3>
                  </div>
                  <p className="font-inter text-lg leading-relaxed text-foreground/80">
                    With us, your brand doesn't just stand out — <span className="font-bold text-primary">it leads</span>. We position you at the forefront of your industry.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 bg-gradient-to-br from-white to-secondary/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in border border-secondary/10 hover:border-secondary/30" style={{ animationDelay: '0.5s' }}>
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-secondary to-primary rounded-l-2xl"></div>
                <div className="space-y-4 pl-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                    <h3 className="font-playfair font-bold text-2xl text-secondary">Cultural Icons</h3>
                  </div>
                  <p className="font-inter text-lg leading-relaxed text-foreground/80">
                    We believe in transforming businesses into <span className="font-bold text-secondary">cultural icons</span> through creativity, precision, and measurable impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Quote */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <blockquote className="font-playfair text-3xl md:text-4xl font-bold italic text-foreground/70">
              "Where creativity meets <span className="text-primary">strategy</span>, 
              <br className="hidden md:block" />
              and brands become <span className="text-secondary">legendary</span>."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
