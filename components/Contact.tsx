import React from 'react';
import { Section } from './Section';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT: INFO */}
        <div>
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-primary leading-tight uppercase">
              Hợp tác
              <br />
              <span className="text-secondary/40">ngay.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl text-secondary max-w-md mb-12">
              Bạn đang tìm kiếm sự khác biệt? Hãy chia sẻ tầm nhìn,
              chúng ta sẽ cùng tạo nên những sản phẩm giá trị.
            </p>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.3}>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent mb-2">
                  Email
                </p>
                <a
                  href="mailto:contact@nguyentanthanh.com"
                  className="text-2xl font-bold text-primary hover:text-accent transition-colors"
                >
                  bynne2602@gmail.com
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent mb-2">
                  Phone
                </p>
                <p className="text-2xl font-bold text-primary">
                  +84 3734 91 922
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* RIGHT: FORM (CĂN SÁT PHẢI TRONG KHUNG) */}
        <Reveal>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="border-border rounded-3xl p-8 md:p-10 flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full bg-background border border-border rounded-lg px-4 py-4
                    text-black placeholder-black/40
                    focus:outline-none focus:border-accent transition"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-background border border-border rounded-lg px-4 py-4
                    text-black placeholder-black/40
                    focus:outline-none focus:border-accent transition"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Chủ đề"
                  className="w-full bg-background border border-border rounded-lg px-4 py-4
                  text-black placeholder-black/40
                  focus:outline-none focus:border-accent transition"
                />

                <textarea
                  rows={5}
                  placeholder="Nội dung"
                  className="w-full bg-background border border-border rounded-lg px-4 py-4
                  text-black placeholder-black/40 resize-none
                  focus:outline-none focus:border-accent transition"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 self-start
                  bg-accent text-white font-bold
                  px-6 py-3 rounded-lg
                  hover:bg-accent/90 transition"
                >
                  Gửi tin nhắn
                  <ArrowRight size={18} />
                </button>
              </form>
            </Reveal>

      </div>
    </Section>
  );
};
