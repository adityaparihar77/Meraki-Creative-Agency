import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, X, Sparkles, Filter } from "lucide-react";
import { Helmet } from "react-helmet";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Import images
import img1 from "@/assets/Photo/39675.jpg";
import img2 from "@/assets/Photo/39677.jpg";
import img3 from "@/assets/Photo/39683.jpg";
import img4 from "@/assets/Photo/39685.jpg";
import img5 from "@/assets/Photo/39687.jpg";
import img6 from "@/assets/Photo/39689.jpg";
import img7 from "@/assets/Photo/39691.jpg";
import img8 from "@/assets/Photo/39693.jpg";
import img9 from "@/assets/Photo/39695.jpg";
import img10 from "@/assets/Photo/39697.jpg";

// Import videos
import video1 from "@/assets/Photo/DA .mp4";
import video2 from "@/assets/Photo/ecoplug india .mp4";
import video3 from "@/assets/Photo/facial aura bella .mp4";
import video4 from "@/assets/Photo/finallll spaaaaaa.mp4";
import video5 from "@/assets/Photo/m333.mp4";
import video6 from "@/assets/Photo/new sample.mp4";
import video7 from "@/assets/Photo/nike ad.mp4";
import video8 from "@/assets/Photo/Odoo eventt.mp4";
import video9 from "@/assets/Photo/patanjali ad .mp4";
import video10 from "@/assets/Photo/perfum_5.mp4";
import video11 from "@/assets/Photo/prachand batch final .mp4";
import video12 from "@/assets/Photo/real estate ( california ).mp4";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [filter, setFilter] = useState<"all" | "images" | "videos">("all");

  const mediaItems = [
    // Images
    { id: 1, type: "image", src: img1, title: "Creative Photography", category: "Photography" },
    { id: 2, type: "image", src: img2, title: "Brand Visuals", category: "Branding" },
    { id: 3, type: "image", src: img3, title: "Product Photography", category: "Product" },
    { id: 4, type: "image", src: img4, title: "Lifestyle Shots", category: "Lifestyle" },
    { id: 5, type: "image", src: img5, title: "Commercial Photography", category: "Commercial" },
    { id: 6, type: "image", src: img6, title: "Editorial Content", category: "Editorial" },
    { id: 7, type: "image", src: img7, title: "Creative Direction", category: "Creative" },
    { id: 8, type: "image", src: img8, title: "Brand Photography", category: "Branding" },
    { id: 9, type: "image", src: img9, title: "Visual Storytelling", category: "Storytelling" },
    { id: 10, type: "image", src: img10, title: "Professional Imagery", category: "Professional" },
    
    // Videos
    { id: 11, type: "video", src: video1, title: "DA Campaign", category: "Campaign", thumbnail: img1 },
    { id: 12, type: "video", src: video2, title: "Ecoplug India", category: "Commercial", thumbnail: img2 },
    { id: 13, type: "video", src: video3, title: "Facial Aura Bella", category: "Beauty", thumbnail: img3 },
    { id: 14, type: "video", src: video4, title: "Spa Experience", category: "Wellness", thumbnail: img4 },
    { id: 15, type: "video", src: video5, title: "M333 Campaign", category: "Fashion", thumbnail: img5 },
    { id: 16, type: "video", src: video6, title: "Creative Sample", category: "Creative", thumbnail: img6 },
    { id: 17, type: "video", src: video7, title: "Nike Advertisement", category: "Sports", thumbnail: img7 },
    { id: 18, type: "video", src: video8, title: "Odoo Event", category: "Event", thumbnail: img8 },
    { id: 19, type: "video", src: video9, title: "Patanjali Ad", category: "FMCG", thumbnail: img9 },
    { id: 20, type: "video", src: video10, title: "Perfume Campaign", category: "Luxury", thumbnail: img10 },
    { id: 21, type: "video", src: video11, title: "Prachand Batch", category: "Military", thumbnail: img1 },
    { id: 22, type: "video", src: video12, title: "Real Estate California", category: "Real Estate", thumbnail: img2 },
  ];

  const filteredMedia = mediaItems.filter(item => {
    if (filter === "all") return true;
    if (filter === "images") return item.type === "image";
    if (filter === "videos") return item.type === "video";
    return true;
  });

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Portfolio - Meraki Creative Agency | Our Success Stories</title>
        <meta name="description" content="Explore Meraki's portfolio of successful brand transformations, campaigns, and creative projects. See how we've helped brands achieve remarkable results." />
        <meta property="og:title" content="Portfolio - Meraki Creative Agency Success Stories" />
        <meta property="og:description" content="Discover our recent work in brand identity, campaign development, digital growth, and creative design." />
        <link rel="canonical" href="https://merakicreative.com/portfolio" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <section className="relative py-12 sm:py-16 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center space-y-3 sm:space-y-5 mb-10 sm:mb-14 animate-slide-up">
                <span className="inline-block text-sm font-inter font-bold tracking-widest uppercase text-primary mb-2">
                  Our Portfolio
                </span>
                <h1 className="font-playfair font-black text-4xl sm:text-5xl md:text-7xl bg-gradient-to-r from-primary via-secondary to-black bg-clip-text text-transparent leading-tight">
                  Our Creative Work
                </h1>
                <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                <p className="font-inter text-base sm:text-xl text-foreground/80 max-w-3xl mx-auto px-4 font-medium">
                  Discover our <span className="text-primary font-bold">visual storytelling</span> through stunning photography and captivating videos
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <Button
                  onClick={() => setFilter("all")}
                  variant={filter === "all" ? "default" : "outline"}
                  className="rounded-full px-6 py-2 font-inter font-semibold transition-all duration-300"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  All Work
                </Button>
                <Button
                  onClick={() => setFilter("images")}
                  variant={filter === "images" ? "default" : "outline"}
                  className="rounded-full px-6 py-2 font-inter font-semibold transition-all duration-300"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Photography
                </Button>
                <Button
                  onClick={() => setFilter("videos")}
                  variant={filter === "videos" ? "default" : "outline"}
                  className="rounded-full px-6 py-2 font-inter font-semibold transition-all duration-300"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Videos
                </Button>
              </div>

              {/* Masonry Grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {filteredMedia.map((item, index) => (
                  <div
                    key={item.id}
                    className="break-inside-avoid group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                    onClick={() => setSelectedMedia(item)}
                  >
                    {item.type === "image" ? (
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.src} 
                          alt={item.title}
                          className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-inter text-xs font-bold text-primary mb-2">
                              <Sparkles className="h-3 w-3" />
                              {item.category}
                            </span>
                            <h3 className="font-playfair font-bold text-xl text-white">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative overflow-hidden">
                        <video 
                          src={item.src}
                          className="w-full h-auto object-cover"
                          muted
                          loop
                          playsInline
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        />
                        {/* Play Icon Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="h-8 w-8 sm:h-10 sm:w-10 text-primary fill-primary ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-inter text-xs font-bold text-primary mb-2">
                            <Play className="h-3 w-3" />
                            {item.category}
                          </span>
                          <h3 className="font-playfair font-bold text-xl text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    )}
                    
                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-16 sm:mt-20 animate-fade-in">
                <div className="inline-block p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl border-2 border-primary/20">
                  <p className="font-playfair text-2xl sm:text-3xl font-bold text-foreground mb-3">
                    Have a project in mind?
                  </p>
                  <p className="font-inter text-base sm:text-lg text-foreground/70">
                    Let's create your <span className="text-primary font-bold">success story</span> together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Media Lightbox Dialog */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-7xl w-full max-h-[90vh] p-0 bg-black/95 border-0">
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
            >
              <X className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            {selectedMedia && (
              <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                {selectedMedia.type === "image" ? (
                  <img 
                    src={selectedMedia.src} 
                    alt={selectedMedia.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg"
                  />
                ) : (
                  <video 
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    className="max-w-full max-h-[70vh] object-contain rounded-lg"
                  />
                )}
                
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full font-inter text-sm font-bold text-white mb-3">
                    {selectedMedia.type === "image" ? <Sparkles className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    {selectedMedia.category}
                  </span>
                  <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-white">
                    {selectedMedia.title}
                  </h3>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Portfolio;
