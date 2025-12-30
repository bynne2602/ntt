import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { Check, ArrowRight, Minus, Plus, HelpCircle } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "15.000.000đ",
      desc: "Dành cho cá nhân & Start-up nhỏ",
      features: [
        "Thiết kế Logo cơ bản (2 concept)",
        "Landing Page (One-page)",
        "Tối ưu SEO cơ bản",
        "Hỗ trợ 1 tháng sau bàn giao"
      ],
      highlight: false
    },
    {
      name: "Professional",
      price: "35.000.000đ",
      desc: "Giải pháp tiêu chuẩn cho doanh nghiệp",
      features: [
        "Bộ nhận diện thương hiệu đầy đủ",
        "Website Doanh nghiệp (5-7 trang)",
        "Tích hợp CMS quản lý nội dung",
        "Tối ưu tốc độ & SEO nâng cao",
        "Thiết lập Google Analytics/Maps",
        "Hỗ trợ 3 tháng"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      desc: "Hệ thống lớn và chiến lược toàn diện",
      features: [
        "Tư vấn chiến lược thương hiệu",
        "Hệ thống E-commerce / Web App phức tạp",
        "Tích hợp API & Payment Gateway",
        "Chiến lược Digital Marketing 1 tháng",
        "Hỗ trợ kỹ thuật 24/7 trọn đời"
      ],
      highlight: false
    }
  ];

  const faqs = [
    {
      q: "Quy trình làm việc thường kéo dài bao lâu?",
      a: "Tùy thuộc vào quy mô dự án. Một Landing Page thường mất 5-7 ngày, trong khi một bộ nhận diện thương hiệu hoặc website doanh nghiệp đầy đủ có thể mất từ 2-4 tuần."
    },
    {
      q: "Chi phí có phát sinh thêm không?",
      a: "Tôi cam kết báo giá trọn gói dựa trên yêu cầu ban đầu. Chi phí chỉ phát sinh nếu bạn yêu cầu thêm tính năng hoặc thay đổi phạm vi công việc sau khi đã chốt phương án."
    },
    {
      q: "Tôi có được chỉnh sửa thiết kế không?",
      a: "Có, mỗi gói dịch vụ đều bao gồm 3 vòng chỉnh sửa (feedback rounds) để đảm bảo sản phẩm cuối cùng đúng ý bạn nhất."
    },
    {
      q: "Bảo hành và hỗ trợ sau bàn giao như thế nào?",
      a: "Tôi hỗ trợ kỹ thuật miễn phí (fix bug) từ 1-6 tháng tùy gói. Sau đó, tôi có cung cấp các gói bảo trì (Maintenance) theo năm nếu bạn cần."
    }
  ];

  return (
    <div className="pt-24 pb-12">
      {/* Hero Header */}
      <section className="px-6 py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Reveal>
  <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block text-left">
    Bảng giá & Dịch vụ
  </span>

  <h1 className="text-5xl md:text-7xl font-display font-black text-primary mb-6 text-left uppercase">
    Đầu tư cho <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary uppercase">
      Sự chuyên nghiệp.
    </span>
  </h1>
</Reveal>

<Reveal delay={0.2}>
  <p className="text-xl text-secondary max-w-2xl text-left">
    Minh bạch về chi phí, rõ ràng về quy trình. Chọn gói dịch vụ phù hợp để bắt đầu hành trình chuyển đổi số của bạn.
  </p>
</Reveal>

        </div>
      </section>

      {/* Pricing Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="h-full" fullHeight>
              <div className={`h-full p-8 rounded-3xl border flex flex-col relative transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlight 
                  ? 'bg-white border-accent shadow-2xl shadow-accent/10' 
                  : 'bg-surface border-border hover:border-gray-300'
              }`}>
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10">
                    Phổ biến nhất
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{plan.price}</div>
                  <p className="text-sm text-secondary">{plan.desc}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-secondary">
                      <div className={`mt-1 p-0.5 rounded-full ${plan.highlight ? 'bg-accent' : 'bg-gray-300'}`}>
                        <Check size={10} className="text-white" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact" 
                  className={`w-full py-4 rounded-xl font-bold text-center transition-colors ${
                    plan.highlight 
                      ? 'bg-accent text-white hover:bg-accent/80' 
                      : 'bg-white text-primary border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  Chọn gói này
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Detailed Tech Stack Grid (Visual filler) */}
      <Section className="bg-surface/50">
        <Reveal>
          <div className="text-left mb-16">
            <h2 className="text-3xl font-display font-bold text-primary mb-4 uppercase">Công nghệ sử dụng</h2>
            <p className="text-secondary">Những công cụ hiện đại nhất để đảm bảo hiệu suất</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center opacity-70">
           {['React', 'Next.js', 'Tailwind', 'Figma', 'Node.js', 'Adobe CC'].map((tech, i) => (
             <Reveal key={i} delay={i * 0.1}>
               <div className="p-4 border border-border rounded-xl bg-white hover:border-accent/50 transition-colors shadow-sm">
                 <span className="font-bold text-primary">{tech}</span>
               </div>
             </Reveal>
           ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="sticky top-32">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                  <HelpCircle size={24} />
                </div>
                <h2 className="text-3xl font-display font-bold text-primary mb-4">Câu hỏi thường gặp</h2>
                <p className="text-secondary mb-8">
                  Những thắc mắc phổ biến của khách hàng trước khi bắt đầu dự án. Nếu bạn có câu hỏi khác, đừng ngại liên hệ.
                </p>
                <a href="#contact" className="text-primary font-bold hover:text-accent flex items-center gap-2 group">
                  Liên hệ tư vấn <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-4">
            {faqs.map((item, idx) => (
              <FAQItem key={idx} question={item.q} answer={item.a} idx={idx} />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Bottom */}
<div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  {/* CTA Bottom – GRID CENTER */}
<section className="py-32 grid place-items-center text-center">
  <Reveal>
    <div className="max-w-4xl px-6">
      <h2 className="text-4xl md:text-6xl font-display font-black text-primary mb-8">
        Sẵn sàng bứt phá?
      </h2>

      <a
        href="/#contact"
        className="inline-block px-10 py-5 bg-primary text-white text-lg font-bold
                   rounded-full hover:bg-accent transition-all duration-300
                   transform hover:scale-105 shadow-xl shadow-black/10"
      >
        Bắt đầu dự án ngay
      </a>
    </div>
  </Reveal>
</section>

</div>

    </div>
  );
};

const FAQItem: React.FC<{question: string, answer: string, idx: number}> = ({ question, answer, idx }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal delay={idx * 0.1} width="100%">
      <div className="border border-border rounded-2xl bg-surface overflow-hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center p-6 text-left hover:bg-black/5 transition-colors"
        >
          <span className="text-lg font-bold text-primary">{question}</span>
          <span className={`text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-6 pt-0 text-secondary leading-relaxed border-t border-border">
            {answer}
          </div>
        </div>
      </div>
    </Reveal>
  );
};