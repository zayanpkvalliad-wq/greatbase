import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu, X, ChevronsRight, Hexagon, Search, PenTool, 
  Cpu, Megaphone, ShoppingCart, Monitor, ArrowRight,
  BarChart, Zap, CheckCircle2, Globe, Lightbulb, Settings, ClipboardList,
  Smartphone, Share2, MapPin, FileText, TrendingUp, Film, Mail, Code, Layout,
  Instagram, Youtube, MessageCircle, Linkedin, Phone, MessageSquare, Send, Bot, Twitter
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center shrink-0 text-white">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
         <path d="M12 2.5L4 7.5L12 12.5L20 7.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
         <path d="M12 12.5L4 7.5V16.5L12 21.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
         <path d="M12 12.5L20 7.5V16.5L12 21.5Z" fill="currentColor" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </div>
    <span className="text-2xl font-sans font-bold tracking-tight text-white mb-0.5">greatbase</span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed z-50 transition-all duration-300 left-2 right-2 md:left-8 md:right-8 top-4 max-w-7xl mx-auto rounded-[24px] ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-3 border border-white/10 text-gray-300' : 'bg-transparent py-4 text-gray-300 border border-transparent'}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#process" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">Process</a>
            <a href="#insights" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">Insights</a>
            <a href="#contact" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
             <div className="flex items-center gap-4 text-gray-400">
                <a href="https://www.instagram.com/greatbase.ae" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors" title="Instagram"><Instagram className="w-5 h-5" /></a>
                <a href="https://wa.me/message/5O4QJUSGZEMXF1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-white transition-colors" title="WhatsApp">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-white transition-colors" title="Twitter"><Twitter className="w-5 h-5" /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors" title="LinkedIn"><Linkedin className="w-5 h-5" /></a>
             </div>
             <button className="bg-white text-[#030303] px-6 py-2.5 rounded-xl font-bold hover:bg-gray-100 hover:shadow-lg transition-all text-sm tracking-wide">
                Login
             </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="md:hidden bg-[#050505]/95 backdrop-blur-xl border border-white/10 overflow-hidden absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              <a href="#home" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-300 hover:text-white">Home</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-300 hover:text-white">About</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-300 hover:text-white">Services</a>
              <a href="#process" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-300 hover:text-white">Process</a>
              <a href="#insights" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-300 hover:text-white">Insights</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-300 hover:text-white">Contact</a>
              
              <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
                 <div className="flex items-center gap-6 text-gray-500">
                    <a href="https://www.instagram.com/greatbase.ae" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white" title="Instagram"><Instagram className="w-6 h-6" /></a>
                    <a href="https://wa.me/message/5O4QJUSGZEMXF1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-white" title="WhatsApp">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-white" title="Twitter"><Twitter className="w-6 h-6" /></a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-white" title="LinkedIn"><Linkedin className="w-6 h-6" /></a>
                 </div>
                 <button className="bg-white text-[#030303] px-6 py-3 rounded-xl font-bold mt-2 shadow-md">
                    Login
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
     if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
           x: e.clientX - rect.left,
           y: e.clientY - rect.top,
        });
     }
  };

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Framer Motion Variants for Staggered Text
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40, rotateX: -20 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section 
      id="home"
      ref={ref} 
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-screen flex items-center border-b border-white/10 overflow-hidden bg-[#050505] text-white"
    >
      {/* Illusion Animated Background Blobs */}
      <motion.div style={{ y: yBg, opacity: opacityFade }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         <motion.div 
           animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0], scale: [1, 1.2, 0.8, 1] }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen"
         />
         <motion.div 
           animate={{ x: [0, -60, 40, 0], y: [0, -40, 50, 0], scale: [1, 1.1, 0.9, 1] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen"
         />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      </motion.div>

      {/* Mouse Follower Glow */}
      <motion.div 
         animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
         transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
         className="absolute w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-[80px] pointer-events-none z-0 hidden md:block"
      />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10"
        style={{ y: yContent, opacity: opacityFade }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1 flex flex-col items-start text-left mt-8 lg:mt-0">
             <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm mb-8 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <span className="w-2 h-2 rounded-full bg-blue-400 animate-[ping_2s_infinite] relative z-10"></span>
               <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-gray-300 relative z-10">Creative Digital Agency</span>
             </motion.div>
            
            <div className="perspective-1000">
               <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-[5.5rem] font-serif font-medium tracking-tight mb-2 leading-[0.9] text-white">
                 Redefining
               </motion.h1>
               <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-[5.5rem] font-serif font-medium tracking-tight mb-6 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                 <span className="italic">digital ease.</span>
               </motion.h1>
            </div>
            
            <motion.p variants={item} className="text-lg text-gray-400 mb-10 max-w-md leading-relaxed font-light">
              We craft highly immersive, data-driven digital experiences that elevate brands and create lasting illusions of perfection.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button className="relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all w-full sm:w-auto group">
                <span className="relative z-10 flex items-center justify-center gap-2">Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gray-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              </button>
              <button className="text-white border-b border-white/30 hover:border-white pb-1 font-medium text-sm tracking-wide transition-all w-full sm:w-auto flex items-center justify-center gap-2 group">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Film className="w-4 h-4" />
                </div>
                Play Showreel
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Ordered Bento Box with 3D Float */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="order-1 lg:order-2 w-full max-w-lg mx-auto lg:mx-0 perspective-1000"
          >
             <motion.div 
               animate={{ y: [0, -15, 0] }} 
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="grid grid-cols-2 gap-4 relative z-10"
             >
                <div className="col-span-2 aspect-[24/10] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative group backdrop-blur-xl hover:border-white/30 transition-all duration-500">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-400/30 transition-colors duration-700"></div>
                   <div className="flex justify-between items-start relative z-10">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                         <TrendingUp className="w-5 h-5 text-blue-300" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono font-bold">Growth</span>
                   </div>
                   <div className="relative z-10">
                      <h3 className="text-4xl font-serif text-white mb-1 tracking-tight">240%</h3>
                      <p className="text-xs text-gray-400 font-light uppercase tracking-wider">Avg. Client ROI</p>
                   </div>
                </div>

                <div className="aspect-square bg-gradient-to-br from-blue-900/40 to-blue-900/10 border border-blue-500/20 rounded-3xl p-6 flex flex-col justify-between group hover:border-blue-400/40 transition-colors backdrop-blur-xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity group-hover:scale-110 duration-700"></div>
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center relative z-10">
                      <Smartphone className="w-5 h-5 text-blue-300" />
                   </div>
                   <p className="text-sm font-medium text-white relative z-10">App Dev</p>
                </div>

                <div className="aspect-square bg-gradient-to-br from-purple-900/30 to-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between group hover:border-purple-400/40 transition-colors backdrop-blur-xl overflow-hidden relative">
                   <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-purple-500/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                   <div className="flex justify-between items-start relative z-10">
                      <div className="flex -space-x-2">
                         {[1,2,3].map(i => (
                           <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-800 overflow-hidden">
                              <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" className="w-full h-full object-cover" />
                           </div>
                         ))}
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                   </div>
                   <p className="text-sm font-medium text-white relative z-10">Dedicated<br/>Teams</p>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const InfoTextSection = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      {/* Background Illusions */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
           animate={{ x: [-30, 30, -30], y: [-30, 30, -30] }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[100px] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10 text-white">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="order-2 md:order-1"
           >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <p className="text-[10px] font-mono tracking-widest text-gray-300 uppercase">About Us</p>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 leading-tight tracking-tight">
                Digital Excellence <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 italic">from Kochi.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed font-light mb-8 text-lg max-w-lg">
                 Greatbase Technologies is an interactive web design and marketing organization with deep expertise in creating compelling brand identities, offering complete solutions to drive immense scale.
              </p>
              <div className="flex gap-4">
                <button className="text-sm font-medium border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors group flex items-center gap-2">
                  Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
             whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, type: "spring" }}
             className="order-1 md:order-2 perspective-1000"
           >
              <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-[32px] overflow-hidden p-2 border border-white/10 relative group">
                 <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] blur-xl"></div>
                 <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Digital Marketing" className="w-full h-full object-cover rounded-[24px] saturate-0 group-hover:saturate-100 transition-all duration-700" />
              </div>
           </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10"
        >
          {[
            { title: "Unparalleled Growth.", desc: "There are increased chances to lose potential customers if your website lacks visibility. We bring proven SEO dominance and paid marketing precision." },
            { title: "Elite Specialists.", desc: "Our team consists of highly experienced marketing specialists, copywriters, and developers who are passionate about delivering tailored systems." },
            { title: "Complete Transparency.", desc: "We operate as an extension of your business. We maintain complete transparency through daily syncs, live dashboards, and genuine relationships." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-serif font-medium text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const BlueBannerSection = () => (
  <section className="py-24 md:py-32 bg-[#050505] text-white overflow-hidden relative border-b border-white/10">
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
       {/* Background Grid illusion */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
       <div className="absolute top-0 right-0 w-full h-full opacity-20 flex items-center justify-end pointer-events-none">
          <motion.div 
             animate={{ rotate: 360, scale: [1, 1.1, 1] }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="w-[800px] h-[800px] rounded-full border border-purple-500/30 flex items-center justify-center translate-x-1/3"
          >
             <div className="w-[600px] h-[600px] rounded-full border border-blue-500/30"></div>
          </motion.div>
       </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            <p className="text-[10px] font-mono tracking-widest text-gray-300 uppercase">Level Up</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 leading-tight">
            Bring your business to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 italic">next level.</span>
          </h2>
          <div className="space-y-6 text-gray-400 font-light leading-relaxed border-l border-white/10 pl-6">
            <p>We create unique designs and performance architectures that make you stand apart from your competitors.</p>
            <p>We understand your business needs deeply to derive a solid baseline strategy, then build it into a high-converting digital product.</p>
            <p>Every asset is executed with extreme precision, strong logic, and an eye for luxury aesthetics.</p>
          </div>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, type: "spring" }}
           className="flex justify-center md:justify-end perspective-1000"
        >
           <div className="aspect-[3/4] w-full max-w-sm rounded-[32px] overflow-hidden border border-white/10 relative group shadow-[0_0_40px_rgba(124,58,237,0.15)] bg-black/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen z-10"></div>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Tech" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 saturate-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20"></div>
              
              <div className="absolute bottom-8 left-8 right-8 z-30">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur flex items-center justify-center">
                       <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                       <div className="text-white font-bold text-lg">Digital Power</div>
                       <div className="text-gray-400 text-xs uppercase tracking-widest font-mono">Activated</div>
                    </div>
                 </div>
                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: "100%" }}
                       transition={{ duration: 2, delay: 0.5 }}
                       className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    ></motion.div>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => {
  const steps = [
    { num: "01", title: "Discovery", desc: "Illuminating the unseen patterns in your digital footprint." },
    { num: "02", title: "Strategy", desc: "Forging a precise algorithmic path to dominance." },
    { num: "03", title: "Execution", desc: "Deploying high-impact assets with surgical precision." },
    { num: "04", title: "Scale", desc: "Data-driven velocity to multiply your outcomes." }
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      {/* Wave optical illusion background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <p className="text-[10px] font-mono tracking-widest text-[#8a8a9e] uppercase">Methodology</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-6">
            The Illusion of <span className="italic text-gray-500">Speed.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">Underneath the seamless surface lies a rigorous, optimized process running at maximum efficiency.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: idx * 0.1 }}
               key={idx} 
               className="relative flex flex-col pt-8 group cursor-pointer perspective-1000"
            >
               {/* Animated Line */}
               <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5">
                  <div className="w-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 group-hover:w-full"></div>
               </div>
               
               <div className="text-6xl font-serif font-light text-white/10 mb-6 transition-all duration-500 group-hover:text-blue-400 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                 {step.num}
               </div>
               <h4 className="text-xl font-bold text-white mb-3 tracking-wide">{step.title}</h4>
               <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { title: "Digital Illusions", desc: "Crafting intuitive, engaging user experiences that boost conversion.", icon: <Monitor className="w-6 h-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 text-blue-400" /> },
    { title: "Web Architecture", desc: "High-performance websites built with modern technologies.", icon: <Code className="w-6 h-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 text-purple-400" /> },
    { title: "Data Alchemy", desc: "Data-driven campaigns to maximize ROI and reach your audience.", icon: <TrendingUp className="w-6 h-6 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 text-green-400" /> },
    { title: "Search Dominance", desc: "Dominating search rankings with proven, white-hat techniques.", icon: <Search className="w-6 h-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 text-pink-400" /> },
    { title: "Omnichannel Social", desc: "Building organic communities and paid social campaigns.", icon: <Share2 className="w-6 h-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 text-orange-400" /> },
    { title: "E-Commerce", desc: "Scalable online stores designed for maximum sales volume.", icon: <ShoppingCart className="w-6 h-6 transition-all duration-500 group-hover:scale-110 group-hover:-translate-x-1 text-blue-400" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505] border-y border-white/10 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-white"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <p className="text-[10px] font-mono tracking-widest text-gray-300 uppercase">What we do</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight">
              Premium Services.
            </h2>
          </div>
          <p className="text-gray-400 max-w-md font-light text-lg">
            We deliver end-to-end digital excellence. Everything you need to scale your brand under one roof.
          </p>
        </motion.div>
        
        {/* Ordered Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-sm"
        >
          {services.map((service, idx) => (
            <motion.div variants={itemVariants} key={idx} className="bg-[#0a0a0a] p-10 hover:bg-[#111] transition-colors group cursor-pointer relative overflow-hidden">
               {/* Hover Effect Overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit] pointer-events-none"></div>
               
               <div className="relative z-10">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 shadow-sm border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 relative">
                    <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      {service.icon}
                    </div>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3 font-serif tracking-wide">{service.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">{service.desc}</p>
                 <div className="flex items-center relative overflow-hidden h-10 -ml-1 pl-1">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 text-gray-400 group-hover:text-white transition-all duration-300 shrink-0 z-10 bg-white/5 backdrop-blur">
                       <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium tracking-wide text-white absolute left-8 pl-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                      Explore
                    </span>
                 </div>
               </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12 md:mt-16 relative z-10"
        >
          <button className="bg-white text-black px-8 md:px-10 py-4 rounded-full font-medium text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto group border border-transparent">
             Start Your Journey
             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 bg-[#050505] text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
      <motion.div 
         animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] rounded-full blur-[50px]"
      />
    </div>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
      >
        <p className="text-[11px] font-mono tracking-widest text-[#8a8a9e] uppercase mb-12 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> Client Feedback
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-16 max-w-4xl mx-auto italic text-gray-300 relative">
          <div className="absolute -top-10 -left-10 text-9xl text-white/5 font-serif pointer-events-none">"</div>
          It was a pleasure working with greatbase as they helped closely with every step of the way, and we valued their creative input that exceeded our expectations.
          <div className="absolute -bottom-20 -right-4 text-9xl text-white/5 font-serif pointer-events-none rotate-180">"</div>
        </h2>
      </motion.div>
      
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8, delay: 0.3 }}
         className="flex flex-wrap justify-center items-center gap-8 md:gap-16 border-t border-white/10 pt-16"
      >
         <div className="flex flex-col items-center gap-4 opacity-100 group cursor-pointer">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-900 font-bold overflow-hidden group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Client 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <span className="font-mono tracking-widest uppercase text-[10px] text-white">Fezainteiors</span>
         </div>
         <div className="flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer group">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full overflow-hidden group-hover:border-white/30 transition-all">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Client 2" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <span className="font-mono tracking-widest uppercase text-[10px] text-gray-400 group-hover:text-white transition-colors">Oliviamattres</span>
         </div>
         <div className="flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer group">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full overflow-hidden group-hover:border-white/30 transition-all">
               <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Client 3" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <span className="font-mono tracking-widest uppercase text-[10px] text-gray-400 group-hover:text-white transition-colors">Changara</span>
         </div>
      </motion.div>
    </div>
  </section>
);

const BlogSection = () => (
  <section id="insights" className="py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex justify-between items-end mb-16">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
             <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
             <p className="text-[10px] font-mono tracking-widest text-[#8a8a9e] uppercase">Insights</p>
           </div>
           <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-white">
             Latest Journal.
           </h2>
        </motion.div>
        <button className="hidden md:block text-[11px] font-mono tracking-widest uppercase text-white hover:text-blue-400 transition-colors border-b border-white hover:border-blue-400 pb-1">
           View All Insights
        </button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
           { tag: "Strategy", title: "The Future of Autonomous Digital Marketing in Kerala.", desc: "This is the age of digital marketing. Every brand now needs an online strategy for its products to market to their audience.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", special: false },
           { tag: "Analytics", title: "Keyword Research & Competitor Analysis Unlocked.", desc: "SEO includes many different facets. Deep keyword research and competitor analysis forms the baseline of scaling.", txt: "\"Data beats intuition.\"", special: true },
           { tag: "Branding", title: "Branding Your Business is Now Made Easier.", desc: "Branding is a highly critical marketing practice. It defines the emotional connection a customer has with your product.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", special: false }
        ].map((item, idx) => (
          <motion.div 
             key={idx}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6, delay: idx * 0.2 }}
             className="group cursor-pointer"
          >
             {item.special ? (
                <div className="aspect-[4/3] bg-[#050505] border border-white/10 overflow-hidden mb-6 rounded-2xl flex items-center justify-center relative group-hover:border-blue-500/50 transition-colors">
                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-[#050505] opacity-50"></div>
                   <h3 className="text-white font-serif text-2xl md:text-3xl z-10 px-6 text-center italic font-light">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{item.txt}</span>
                   </h3>
                </div>
             ) : (
                <div className="aspect-[4/3] bg-[#050505] border border-white/5 overflow-hidden mb-6 rounded-2xl relative">
                   <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                   <img src={item.img} alt={`Blog ${idx}`} className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
             )}
             <p className="text-[10px] font-mono tracking-widest text-[#8a8a9e] uppercase mb-3 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500"></span> {item.tag}
             </p>
             <h3 className="font-serif text-xl text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors">{item.title}</h3>
             <p className="text-sm text-gray-500 font-light line-clamp-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12 md:hidden">
         <button className="text-[11px] font-mono tracking-widest uppercase text-white border-b border-white pb-1">
            View All Insights
         </button>
      </div>
    </div>
  </section>
);

const ClientsSection = () => {
   const clients = Array.from({length: 12});
   return (
      <section className="py-24 bg-[#050505] border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_100%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
          >
            <p className="text-[11px] font-mono tracking-widest text-[#8a8a9e] uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> Trusted By
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-white mb-6">
              Global <span className="italic text-gray-500">Partners.</span>
            </h2>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
             className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60"
          >
             {clients.map((_, idx) => (
                <div key={idx} className="border-b-2 border-transparent hover:border-blue-500 transition-all cursor-pointer flex items-center justify-center grayscale hover:grayscale-0 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] duration-500 py-2 group">
                   <div className="flex items-center gap-2">
                       <Hexagon className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
                       <span className="font-serif italic text-lg text-gray-500 group-hover:text-white transition-colors">brand.</span>
                   </div>
                </div>
             ))}
          </motion.div>
        </div>
      </section>
   );
};

const GlobalSection = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  const locations = [
    { top: '30%', left: '18%', label: 'USA', desc: 'North American HQ, driving innovation and enterprise solutions.' },
    { top: '22%', left: '46%', label: 'UK', desc: 'European hub for strategy, design, and digital consulting.' },
    { top: '38%', left: '57%', label: 'Saudi Arabia', desc: 'Fast-growing market focus, providing localized tech expertise.' },
    { top: '40%', left: '60%', label: 'UAE', desc: 'Middle East headquarters, bridging global and regional business.' },
    { top: '45%', left: '67.5%', label: 'Calicut', desc: 'Innovation and offshore development center.' },
    { top: '47%', left: '68%', label: 'Kochi', desc: 'Strategic tech campus focused on engineering excellence.' }
  ];

  return (
   <section className="py-24 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.1)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8"
         >
           <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
               <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
               <p className="text-[10px] font-mono tracking-widest text-[#8a8a9e] uppercase">Operations</p>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-white">
                Global footprint.
             </h2>
           </div>
           <p className="text-gray-400 max-w-sm text-sm font-light leading-relaxed md:text-right hidden md:block">
             Delivering digital excellence across continents. We maintain a strong presence in key financial and tech hubs globally.
           </p>
         </motion.div>
         
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative max-w-5xl mx-auto"
         >
            <div className="w-full h-auto opacity-[0.15] select-none">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" className="w-full invert opacity-50" alt="World Map" />
            </div>
            
            {locations.map((pos, idx) => (
              <div key={idx} className="absolute" style={{ top: pos.top, left: pos.left }}>
                 <div 
                   className="relative group cursor-pointer flex justify-center items-center"
                   onMouseEnter={() => setActiveLocation(idx)}
                   onMouseLeave={() => setActiveLocation(null)}
                   onClick={() => setActiveLocation(activeLocation === idx ? null : idx)}
                 >
                    <div className={`w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300 relative z-10 ${activeLocation === idx ? 'scale-150 bg-white' : 'group-hover:scale-150 group-hover:bg-white'}`}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500/20 animate-ping"></div>
                    
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-300 z-20 pointer-events-none ${activeLocation === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                       <div className="bg-[#050505] text-white p-4 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] min-w-[220px] border border-white/10 backdrop-blur-md">
                          <div className="flex items-center gap-2 mb-2">
                             <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                             <p className="text-[10px] font-mono uppercase tracking-widest text-gray-300">{pos.label}</p>
                          </div>
                          <p className="text-xs font-light text-gray-400 leading-relaxed whitespace-break-spaces">{pos.desc}</p>
                       </div>
                       
                       {/* Arrow indicator pointing up */}
                       <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[#050505] border-l border-t border-white/10"></div>
                    </div>
                 </div>
              </div>
            ))}
         </motion.div>
      </div>
   </section>
  );
};


const Footer = () => (
  <footer id="contact" className="bg-[#030303] text-gray-500 border-t border-white/10 pt-24 pb-8 font-sans mt-auto relative overflow-hidden">
    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.05)_0%,transparent_50%))] pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
        
        {/* Brand Column */}
        <div className="flex flex-col">
          <div className="mb-8 inline-flex cursor-pointer transition-transform hover:scale-105">
             <Logo />
          </div>
          <p className="text-sm leading-relaxed mb-8 max-w-xs font-light text-gray-400">
            Architecting digital dominance. We build high-performance systems for brands ready to scale.
          </p>
          <div className="flex gap-4">
            {[
              { name: 'Twitter', url: '#' },
              { name: 'LinkedIn', url: '#' },
              { name: 'Instagram', url: 'https://www.instagram.com/greatbase.ae' }
            ].map((social, i) => (
              <a key={i} href={social.url} target={social.url !== '#' ? '_blank' : '_self'} rel={social.url !== '#' ? 'noopener noreferrer' : ''} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/30 transition-all text-gray-400">
                <span className="text-xs font-mono uppercase tracking-widest">{social.name[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-white font-medium mb-8">Navigation</h4>
          <ul className="space-y-4">
            {['Home', 'Services', 'Methodology', 'Insights', 'Contact'].map((link, i) => (
              <li key={i}>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                   <span className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all font-mono text-[10px] uppercase tracking-widest text-[#050505] bg-white px-1.5 py-0.5 rounded-sm">➔</span>
                   {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Services Column */}
        <div>
          <h4 className="text-white font-medium mb-8">Services</h4>
          <ul className="space-y-4">
            {['UI/UX Design', 'Performance Marketing', 'Technical SEO', 'E-Commerce', 'Brand Identity'].map((link, i) => (
              <li key={i}>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-medium mb-8">Connect</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed font-light text-gray-400">Level 1, Infopark,<br/>Kochi, Kerala</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gray-600 shrink-0" />
              <span className="text-sm font-light text-gray-400">+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-gray-600 shrink-0" />
              <span className="text-sm font-light text-gray-400">hello@greatbase.tech</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-gray-500">
        <p>© {new Date().getFullYear()} Greatbase Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'bot'|'user', text: string}[]>([
    { role: 'bot', text: 'Hi! How can we help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: 'Thanks for reaching out! Our team will get back to you shortly.' 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[320px] sm:w-[360px] bg-[#050505] rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.15)] border border-white/10 overflow-hidden flex flex-col backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-white/5 border-b border-white/10 p-4 text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-50"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                  <Bot className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight text-white">greatbase. support</h3>
                  <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors relative z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Chat Area */}
            <div className="h-[300px] p-4 overflow-y-auto bg-transparent flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-2xl rounded-br-sm shadow-[0_4px_20px_rgba(37,99,235,0.3)]' 
                      : 'bg-white/10 text-gray-200 border border-white/10 rounded-2xl rounded-bl-sm backdrop-blur-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input Area */}
            <div className="p-3 bg-white/5 border-t border-white/10">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full pl-4 pr-10 py-2.5 bg-black/50 border border-white/10 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder-gray-500"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-2 p-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all cursor-pointer relative group"
      >
        <MessageSquare className={`absolute transition-all duration-300 w-6 h-6 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`} />
        <X className={`absolute transition-all duration-300 w-6 h-6 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-[#050505] rounded-full z-10 animate-pulse"></span>
        )}
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-500/30 selection:text-white font-sans flex flex-col text-white">
      <Navbar />
      <Hero />
      <main>
        <InfoTextSection />
        <BlueBannerSection />
        <ServicesSection />
        <TestimonialsSection />
        <BlogSection />
        <ProcessSection />
        <ClientsSection />
        <GlobalSection />
      </main>
      <Footer />
      
      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}
