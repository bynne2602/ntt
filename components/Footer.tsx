import React from 'react';
import { Reveal } from './Reveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-primary pt-24 pb-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
         <Reveal>
            <h2 className="text-[15vw] font-display font-black text-black/5 leading-none select-none hover:text-black/10 transition-colors cursor-default">NTT<span className="text-accent">.</span></h2>
         </Reveal>
         <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-xs font-bold text-secondary uppercase tracking-widest gap-4">
            <p>© {new Date().getFullYear()} Nguyen Tan Thanh.</p>
            <div className="flex gap-8">
               <a href="#" className="hover:text-accent transition-colors">Facebook</a>
               <a href="#" className="hover:text-accent transition-colors">Instagram</a>
               <a href="#" className="hover:text-accent transition-colors">Behance</a>
            </div>
         </div>
      </div>
    </footer>
  );
};