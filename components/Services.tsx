import React from 'react';
import { Section } from './Section';
import { ArrowUpRight, CheckCircle2, Monitor, Palette, Megaphone, Layers, Search, Rocket } from 'lucide-react';
import { Reveal } from './Reveal';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Graphic Design",
      desc: "Xây dựng ngôn ngữ hình ảnh nhất quán, giúp thương hiệu của bạn nổi bật giữa đám đông.",
      features: [
        "Thiết kế Logo & Bộ nhận diện thương hiệu",
        "Key Visual & Art Direction",
        "Thiết kế bao bì & Tem nhãn",
        "Social Media & Marketing Assets",
        "UI/UX Design cho App & Web"
      ]
    },
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Web Development",
      desc: "Phát triển website hiệu năng cao, chuẩn SEO và tối ưu trải nghiệm người dùng.",
      features: [
        "Website doanh nghiệp (Landing Page)",
        "E-commerce (Thương mại điện tử)",
        "Web Application (React/Next.js)",
        "Tối ưu hóa tốc độ & SEO On-page",
        "CMS & Quản trị nội dung"
      ]
    },
    {
      icon: <Megaphone className="w-8 h-8 text-primary" />,
      title: "Digital Marketing",
      desc: "Chiến lược tiếp thị dựa trên dữ liệu để tăng trưởng doanh thu và nhận diện thương hiệu.",
      features: [
        "Lập kế hoạch Digital Marketing tổng thể",
        "Quản trị Fanpage & Content Marketing",
        "Facebook & Google Ads Performance",
        "Email Marketing Automation",
        "Phân tích & Báo cáo dữ liệu"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Khám phá",
      icon: <Search size={24} />,
      desc: "Nghiên cứu thị trường, đối thủ và thấu hiểu nhu cầu cốt lõi của doanh nghiệp."
    },
    {
      step: "02",
      title: "Chiến lược",
      icon: <Layers size={24} />,
      desc: "Xây dựng định hướng hình ảnh, giải pháp kỹ thuật và kế hoạch triển khai chi tiết."
    },
    {
      step: "03",
      title: "Thực thi",
      icon: <Monitor size={24} />,
      desc: "Thiết kế và lập trình với sự tỉ mỉ trong từng pixel và dòng code."
    },
    {
      step: "04",
      title: "Bàn giao",
      icon: <Rocket size={24} />,
      desc: "Kiểm thử, tối ưu hóa lần cuối và hướng dẫn vận hành hệ thống."
    }
  ];

  return (
    <Section id="services" className="bg-background relative">
      {/* Background Decor */}
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Section */}
      <Reveal>
  <div className="mb-20 border-b border-white/10 pb-8">

    <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">
      Dịch vụ & Giải pháp
    </span>

    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight mb-4 uppercase">
      Chất lượng <br />
      trong từng điểm chạm.
    </h2>

    <p className="text-secondary font-medium max-w-none text-left">
      Tôi cung cấp giải pháp toàn diện từ ý tưởng đến sản phẩm thực tế,<br />
      giúp doanh nghiệp chuyển đổi số hiệu quả.
    </p>

  </div>
</Reveal>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        {services.map((item, idx) => (
           <Reveal key={idx} delay={idx * 0.1} width="100%" className="h-full">
             <div className="group bg-surface border border-border p-8 rounded-3xl h-full flex flex-col hover:border-accent transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 relative overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/10 rounded-full blur-[60px] group-hover:bg-accent/20 transition-all duration-500"></div>

                <div className="mb-8 p-4 bg-white w-fit rounded-2xl border border-border shadow-sm group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-colors duration-300">
                  {/* Icon color handled by parent class on hover, or inline style. Using cloneElement to change color on hover would be complex, so relying on css group-hover */}
                  <div className="group-hover:text-white transition-colors">{item.icon}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4 font-display">{item.title}</h3>
                <p className="text-secondary mb-8 leading-relaxed border-b border-border pb-8 min-h-[100px]">
                  {item.desc}
                </p>

                <ul className="space-y-4 flex-1">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors uppercase tracking-wider">
                    Tư vấn ngay <ArrowUpRight size={16} />
                  </a>
                </div>
             </div>
           </Reveal>
        ))}
      </div>

      {/* Process Section */}
      <div className="bg-surface rounded-[40px] p-8 md:p-16 border border-border">
        <Reveal>
  <div className="mb-16">

    <h3 className="text-3xl font-display font-bold text-primary mb-4 uppercase">
      Quy trình làm việc
    </h3>

    <p className="text-secondary">
      Đơn giản hóa quy trình để đạt hiệu quả tối đa
    </p>

  </div>
</Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent pointer-events-none" />

          {process.map((step, idx) => (
            <Reveal key={idx} delay={0.2 + (idx * 0.1)}>
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-background border border-border rounded-full flex items-center justify-center text-primary mb-6 z-10 group-hover:border-accent group-hover:text-accent transition-colors duration-300 shadow-lg shadow-black/5">
                  {step.icon}
                </div>
                <div className="mb-2 text-accent text-sm font-bold tracking-widest uppercase">{step.step}</div>
                <h4 className="text-xl font-bold text-primary mb-3">{step.title}</h4>
                <p className="text-sm text-secondary leading-relaxed px-4">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </Section>
  );
};