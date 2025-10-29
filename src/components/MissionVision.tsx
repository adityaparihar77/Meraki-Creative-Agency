const MissionVision = () => {
  return (
    <section className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 border-2 border-primary-foreground">
              <span className="font-inter font-semibold text-sm tracking-wider">MISSION</span>
            </div>
            <h3 className="font-playfair font-bold text-4xl md:text-5xl leading-tight">
              Create brands that people talk about.
            </h3>
            <p className="font-inter text-lg opacity-90">
              Our purpose is to craft strategies and campaigns that don't just compete, but dominate the conversation.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-2 border-2 border-primary-foreground">
              <span className="font-inter font-semibold text-sm tracking-wider">VISION</span>
            </div>
            <h3 className="font-playfair font-bold text-4xl md:text-5xl leading-tight">
              Becoming a global benchmark for quality and service excellence.
            </h3>
            <p className="font-inter text-lg opacity-90">
              We strive to set the standard for creative excellence worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
