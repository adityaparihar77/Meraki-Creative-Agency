import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <Link to="/">
                <h3 className="font-playfair font-black text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform cursor-pointer">
                  Meraki
                </h3>
              </Link>
              <p className="font-inter text-gray-300 leading-relaxed mb-6">
                Creating brands that people talk about. We transform visions into unforgettable experiences.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-inter font-bold text-lg text-white mb-6 relative inline-block">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
              </h4>
              <ul className="space-y-3 font-inter text-gray-300">
                <li className="group">
                  <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors hover:translate-x-1 duration-300">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link to="/about" className="flex items-center gap-2 hover:text-primary transition-colors hover:translate-x-1 duration-300">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Us
                  </Link>
                </li>
                <li className="group">
                  <Link to="/services" className="flex items-center gap-2 hover:text-primary transition-colors hover:translate-x-1 duration-300">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Services
                  </Link>
                </li>
                <li className="group">
                  <Link to="/work" className="flex items-center gap-2 hover:text-primary transition-colors hover:translate-x-1 duration-300">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Our Work
                  </Link>
                </li>
                <li className="group">
                  <Link to="/contact" className="flex items-center gap-2 hover:text-primary transition-colors hover:translate-x-1 duration-300">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-inter font-bold text-lg text-white mb-6 relative inline-block">
                Our Services
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
              </h4>
              <ul className="space-y-3 font-inter text-gray-300">
                <li className="hover:text-secondary transition-colors cursor-pointer">Digital Marketing</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Brand Strategy</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Creative Design</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">SEO Optimization</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Content Creation</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-inter font-bold text-lg text-white mb-6 relative inline-block">
                Get In Touch
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
              </h4>
              <ul className="space-y-4 font-inter text-gray-300">
                <li className="flex items-start gap-3 group">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <a href="mailto:themerakiofficial01@gmail.com" className="hover:text-primary transition-colors">
                    themerakiofficial01@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+918516841484" className="hover:text-primary transition-colors">
                      +91 8516841484
                    </a>
                    <a href="tel:+919406550954" className="hover:text-primary transition-colors">
                      +91 9406550954
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-inter text-sm text-gray-400">
                 <span className="text-primary font-semibold">Meraki Creative Agency</span>. All rights reserved.
              </p>
              <div className="flex gap-6 font-inter text-sm text-gray-400">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
