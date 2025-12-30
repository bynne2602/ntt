import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Code, Palette, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 md:px-8 bg-background min-h-screen flex items-center relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:h-[800px]">
        
        {/* 1. Introduction (2x2) */}
        <div className="md:col-span-2 md:row-span-2 bg-surface rounded-3xl p-8 md:p-12 flex flex-col justify-between group hover:border-black/10 transition-colors duration-500">
          <Reveal>
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
  bg-emerald-500/10 text-emerald-400
  text-xs font-bold uppercase tracking-wider mb-8"
>
  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
  Available for work
</div>
               <h1 className="text-4xl md:text-6xl font-display font-black text-primary leading-[1.1] mb-6">
                 NGUYỄN<br/>TÂN THÀNH<span className="text-accent">.</span>
               </h1>
               <p className="text-lg text-secondary max-w-md font-medium">
                 Graphic Designer & Web Developer. <br/>
                 Kết hợp tư duy thẩm mỹ và giải pháp kỹ thuật số.
               </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 md:mt-0 flex gap-4">
               <a href="#contact" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-accent transition-all duration-300">Liên hệ</a>
               <a href="#about" className="px-8 py-4 border border-border text-primary rounded-full font-bold hover:bg-black/5 transition-colors">Portfolio</a>
            </div>
          </Reveal>
        </div>

        {/* 2. Image/Visual (2x2) */}
        <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group h-[300px] md:h-full border border-border">
           <img 
             src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2670&auto=format&fit=crop" 
             alt="Workspace" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8">
              <Reveal delay={0.3}>
                <p className="text-white font-medium italic border-l-2 border-accent pl-4">"Design Không chỉ thu hút ánh nhìn, mà còn tạo ra chuyển đổi."</p>
              </Reveal>
           </div>
        </div>

        {/* 3. Service: Web Dev (1x1) */}
        <div className="md:col-span-1 md:row-span-1 bg-surface border border-border rounded-3xl p-6 flex flex-col justify-between group hover:border-accent transition-all duration-300">
           <Reveal delay={0.4} width="100%" className="h-full flex flex-col justify-between">
             <div className="flex justify-between items-start">
                <div className="p-3 bg-white rounded-full text-primary shadow-sm border border-border">
                  <Code className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-accent group-hover:rotate-45 transition-all" />
             </div>
             <div>
                <h3 className="text-xl font-bold text-primary mb-1">Web Dev</h3>
                <p className="text-sm text-secondary">Next.js, React, SEO</p>
             </div>
           </Reveal>
        </div>

        {/* 4. Service: Design (1x1) */}
        <div className="md:col-span-1 md:row-span-1 bg-accent rounded-3xl p-6 flex flex-col justify-between text-white group hover:scale-[1.02] transition-transform duration-300">
           <Reveal delay={0.5} width="100%" className="h-full flex flex-col justify-between">
             <div className="flex justify-between items-start">
                <div className="p-3 bg-white/20 rounded-full text-white">
                  <Palette className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-white/70 group-hover:text-white group-hover:rotate-45 transition-all" />
             </div>
             <div>
                <h3 className="text-xl font-bold mb-1">Design</h3>
                <p className="text-sm text-white/80">Branding, UI/UX</p>
             </div>
           </Reveal>
        </div>

        {/* 5. Service: Marketing (1x1) */}
        <div className="md:col-span-1 md:row-span-1 bg-surface border border-border rounded-3xl p-6 flex flex-col justify-between group hover:border-accent transition-all duration-300">
           <Reveal delay={0.6} width="100%" className="h-full flex flex-col justify-between">
             <div className="flex justify-between items-start">
                <div className="p-3 bg-white rounded-full text-primary shadow-sm border border-border">
                  <Zap className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-accent group-hover:rotate-45 transition-all" />
             </div>
             <div>
                <h3 className="text-xl font-bold text-primary mb-1">Marketing</h3>
                <p className="text-sm text-secondary">Growth Strategy</p>
             </div>
           </Reveal>
        </div>

        {/* 6. Socials (1x1) */}
        <div className="md:col-span-1 md:row-span-1 bg-surface border border-border rounded-3xl p-6 flex flex-col items-center justify-center gap-6 group hover:border-black/20 transition-colors">
           <Reveal delay={0.7}>
             <span className="text-xs font-bold uppercase tracking-widest text-secondary">Kết nối</span>
             <div className="flex gap-4 mt-2">
                <a href="#" className="p-3 bg-white border border-border rounded-full hover:bg-primary hover:text-white text-primary transition-all duration-300 shadow-sm"><Linkedin size={20} /></a>
                <a href="#" className="p-3 bg-white border border-border rounded-full hover:bg-primary hover:text-white text-primary transition-all duration-300 shadow-sm"><Github size={20} /></a>
                <a href="#" className="p-3 bg-white border border-border rounded-full hover:bg-primary hover:text-white text-primary transition-all duration-300 shadow-sm"><Mail size={20} /></a>
             </div>
           </Reveal>
        </div>

      </div>
    </section>
  );
};