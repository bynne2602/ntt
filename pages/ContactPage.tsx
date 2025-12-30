import React from 'react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { ArrowRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-background">
      <section className="px-6 py-16 bg-primary text-white relative overflow-hidden rounded-b-[3rem] mb-12">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-6">Liên hệ</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Hãy bắt đầu một cuộc trò chuyện. Cho dù bạn có một dự án lớn hay chỉ muốn nói lời chào.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <Reveal>
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-6">Thông tin kết nối</h2>
                <p className="text-secondary text-lg mb-8">
                  Tôi luôn sẵn sàng lắng nghe ý tưởng của bạn. Đừng ngần ngại liên hệ qua các kênh dưới đây.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface border border-border hover:border-accent transition-colors">
                    <div className="p-3 bg-white rounded-full text-accent shadow-sm"><Mail size={20} /></div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-secondary font-bold mb-1">Email</p>
                      <a href="mailto:contact@nguyentanthanh.com" className="text-lg font-bold text-primary hover:text-accent">contact@nguyentanthanh.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface border border-border hover:border-accent transition-colors">
                    <div className="p-3 bg-white rounded-full text-accent shadow-sm"><Phone size={20} /></div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-secondary font-bold mb-1">Điện thoại / Zalo</p>
                      <a href="tel:+84901234567" className="text-lg font-bold text-primary hover:text-accent">+84 90 123 4567</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface border border-border hover:border-accent transition-colors">
                    <div className="p-3 bg-white rounded-full text-accent shadow-sm"><MapPin size={20} /></div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-secondary font-bold mb-1">Địa chỉ</p>
                      <p className="text-lg font-bold text-primary">Ho Chi Minh City, Vietnam</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl border border-border shadow-xl shadow-black/5">
            <Reveal delay={0.2}>
              <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
                <MessageSquare className="text-accent" /> Gửi tin nhắn
              </h3>
              <p className="text-secondary mb-8 text-sm">Điền vào form bên dưới, tôi sẽ phản hồi trong vòng 24h.</p>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Tin nhắn đã được gửi!"); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-secondary">Họ và tên</label>
                    <input required type="text" className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-primary focus:border-accent focus:bg-white outline-none transition-all" placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-secondary">Email</label>
                    <input required type="email" className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-primary focus:border-accent focus:bg-white outline-none transition-all" placeholder="email@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-secondary">Chủ đề</label>
                  <select className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-primary focus:border-accent focus:bg-white outline-none transition-all">
                    <option>Tư vấn thiết kế Website</option>
                    <option>Thiết kế Branding / Logo</option>
                    <option>Digital Marketing</option>
                    <option>Hợp tác / Khác</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-secondary">Nội dung</label>
                  <textarea required rows={5} className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-primary focus:border-accent focus:bg-white outline-none transition-all resize-none" placeholder="Mô tả sơ qua về dự án của bạn..."></textarea>
                </div>

                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2 group">
                  Gửi ngay bây giờ <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
};