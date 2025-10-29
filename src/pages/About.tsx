import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Target, Lightbulb, Users, Award, Rocket, Heart, Zap, TrendingUp, Star } from "lucide-react";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reasons = [
    {
      title: "Proven Track Record",
      description: "We've helped dozens of brands transform their market presence and achieve measurable growth.",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Creative Excellence",
      description: "Our team combines artistic vision with strategic thinking to deliver campaigns that truly resonate.",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Data-Driven Approach",
      description: "Every decision is backed by insights and analytics to ensure optimal performance and ROI.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Personalized Solutions",
      description: "We don't believe in one-size-fits-all. Each strategy is tailored to your unique brand and goals.",
      icon: Target,
      color: "from-red-500 to-rose-500"
    },
    {
      title: "End-to-End Support",
      description: "From initial concept to final execution, we're with you every step of the way.",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Innovation First",
      description: "We stay ahead of trends and leverage cutting-edge tools to keep your brand at the forefront.",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500"
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We put our heart and soul into every project",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with creative solutions",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Delivering nothing but the best quality",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with clients",
      gradient: "from-green-500 to-teal-500"
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Success Rate", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Zap },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us - Meraki Creative Agency | Our Story & Values</title>
        <meta name="description" content="Learn about Meraki Creative Agency - founded in 2024, we transform ambitious businesses into unforgettable brands through strategy, creativity, and innovation." />
        <meta property="og:title" content="About Meraki Creative Agency - Our Story & Values" />
        <meta property="og:description" content="Discover why businesses choose Meraki for their creative marketing needs. Results-driven agency passionate about turning ideas into influence." />
        <link rel="canonical" href="https://merakicreative.com/about" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
          {/* Animated Decorative Elements */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 sm:space-y-6 mb-12 animate-slide-up">
                <span className="inline-block text-sm font-inter font-bold tracking-widest uppercase text-primary mb-2">
                  Our Story
                </span>
                <h1 className="font-playfair font-black text-5xl sm:text-6xl md:text-8xl bg-gradient-to-r from-primary via-secondary to-black bg-clip-text text-transparent leading-tight">
                  About Meraki
                </h1>
                <div className="h-2 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                <p className="font-inter text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed">
                  Transforming visions into <span className="text-primary font-bold">unforgettable brand experiences</span> with creativity, passion, and soul
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 animate-scale-in overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500">
                        <stat.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="font-playfair font-black text-3xl sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="font-inter text-sm font-semibold text-foreground/70">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="group relative p-10 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-primary/20 hover:border-primary/40 animate-fade-in hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 overflow-hidden" style={{ animationDelay: '0.2s' }}>
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-playfair font-bold text-3xl text-primary mb-5 group-hover:text-secondary transition-colors">
                      Our Mission
                    </h3>
                    <p className="font-inter text-base leading-relaxed text-foreground/90">
                      To transform ambitious businesses into <span className="font-bold text-secondary">unforgettable brands</span> through strategy, creativity, and innovation. We put our soul into every project we undertake, ensuring excellence in every detail.
                    </p>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
                </div>

                <div className="group relative p-10 bg-gradient-to-br from-white via-white to-secondary/5 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-secondary/20 hover:border-secondary/40 animate-fade-in hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 overflow-hidden" style={{ animationDelay: '0.3s' }}>
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-playfair font-bold text-3xl text-secondary mb-5 group-hover:text-primary transition-colors">
                      Our Vision
                    </h3>
                    <p className="font-inter text-base leading-relaxed text-foreground/90">
                      To be the <span className="font-bold text-primary">leading creative force</span> that transforms businesses into cultural icons, setting new standards in brand excellence and innovation across the globe.
                    </p>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                </div>
              </div>

              {/* Story Content */}
              <div className="space-y-6 mb-10">
                <div className="relative p-8 bg-gradient-to-br from-white to-primary/10 rounded-3xl shadow-xl border border-primary/20 animate-fade-in hover:shadow-2xl transition-all duration-500 hover:-translate-y-1" style={{ animationDelay: '0.4s' }}>
                  <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                  <p className="font-inter text-lg leading-relaxed text-foreground/90 relative z-10">
                    Founded in 2024, <span className="font-bold text-primary text-xl">Meraki Creative Agency</span> has quickly become a leader in marketing excellence. We pride ourselves on our unwavering commitment to delivering high-quality, creative designs tailored to meet the unique needs of our diverse clientele.
                  </p>
                </div>

                <div className="relative p-8 bg-gradient-to-br from-white to-secondary/10 rounded-3xl shadow-xl border border-secondary/20 animate-fade-in hover:shadow-2xl transition-all duration-500 hover:-translate-y-1" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute top-4 right-4 w-20 h-20 bg-secondary/10 rounded-full blur-xl"></div>
                  <p className="font-inter text-lg leading-relaxed text-foreground/90 relative z-10">
                    We are a <span className="font-bold text-secondary text-xl">results-driven creative agency</span>, passionate about turning ideas into influence. From brand strategy to digital growth, we specialize in building comprehensive marketing solutions tailored to your unique vision and goals.
                  </p>
                </div>

                {/* Highlighted Quote */}
                <div className="relative p-12 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl shadow-2xl animate-fade-in overflow-hidden" style={{ animationDelay: '0.6s' }}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute top-8 left-8 text-8xl text-white/20 font-playfair leading-none">"</div>
                  <blockquote className="relative z-10 font-playfair text-2xl sm:text-4xl font-bold italic text-white text-center leading-relaxed">
                    With us, your brand doesn't just stand out — it leads the revolution.
                  </blockquote>
                  <div className="absolute bottom-8 right-8 text-8xl text-white/20 font-playfair rotate-180 leading-none">"</div>
                </div>
              </div>

              {/* Core Values Section */}
              <div className="mb-10">
                <div className="text-center space-y-3 mb-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <span className="inline-block text-sm font-inter font-bold tracking-widest uppercase text-secondary mb-1">
                    What Drives Us
                  </span>
                  <h2 className="font-playfair font-black text-3xl sm:text-5xl bg-gradient-to-r from-secondary via-primary to-black bg-clip-text text-transparent">
                    Our Core Values
                  </h2>
                  <div className="h-1.5 w-24 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, index) => (
                    <Card
                      key={index}
                      className="group relative border-2 hover:border-transparent overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-scale-in bg-white/90 backdrop-blur-sm"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <CardContent className="p-6 relative z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                          <value.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-playfair font-bold text-xl text-secondary mb-2 group-hover:text-primary transition-colors">
                          {value.title}
                        </h3>
                        <p className="font-inter text-sm text-foreground/80 leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-background via-secondary/5 to-background overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-2xl animate-float"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 animate-fade-in">
                <span className="inline-block text-sm font-inter font-bold tracking-widest uppercase text-secondary mb-2">
                  Our Strengths
                </span>
                <h2 className="font-playfair font-black text-4xl sm:text-5xl md:text-7xl bg-gradient-to-r from-secondary via-primary to-black bg-clip-text text-transparent leading-tight">
                  Why Choose Meraki
                </h2>
                <div className="h-2 w-32 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
                <p className="font-inter text-base sm:text-xl text-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed">
                  We deliver <span className="text-primary font-bold">excellence through innovation</span>, strategy, and unwavering commitment to your success
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <div
                      key={index}
                      className="group relative p-8 sm:p-10 bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-gray-200 hover:border-transparent shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-scale-in overflow-hidden"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Animated gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      {/* Top gradient bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                      
                      <div className="relative z-10">
                        {/* Icon Container with gradient */}
                        <div className="mb-6">
                          <div className={`w-20 h-20 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                            <Icon className="h-10 w-10 text-white" />
                          </div>
                        </div>
                        
                        <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-secondary group-hover:text-primary transition-colors mb-4">
                          {reason.title}
                        </h3>
                        <p className="font-inter text-base text-foreground/90 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>

                      {/* Decorative elements */}
                      <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${reason.color} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA Section */}
              <div className="text-center mt-16 sm:mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="relative inline-block p-10 bg-gradient-to-br from-white to-primary/10 rounded-3xl border-2 border-primary/30 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Rocket className="h-8 w-8 text-white" />
                    </div>
                    <p className="font-playfair text-2xl sm:text-4xl font-bold text-foreground mb-3">
                      Ready to Transform Your Brand?
                    </p>
                    <p className="font-inter text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
                      Let's create something <span className="text-primary font-bold">extraordinary</span> together. Your success story starts here.
                    </p>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
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

export default About;
