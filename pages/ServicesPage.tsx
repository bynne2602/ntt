import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { Check, ArrowRight, Minus, Plus, HelpCircle, Palette, Monitor, Megaphone, PenTool, Database, BarChart } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  // 1. Data: Design Pricing
  const designPlans = [
    {
      name: "Logo Starter",
      price: "5.000.000đ",
      desc: "Khởi tạo nhận diện cho thương hiệu mới.",
      features: [
        "03 Mẫu Logo Concept",
        "Chỉnh sửa 3 vòng",
        "File gốc Vector (AI, PDF, EPS)",
        "Quy chuẩn sử dụng Logo cơ bản",
        "Mockup phối cảnh thực tế"
      ],
      highlight: false
    },
    {
      name: "Brand Identity",
      price: "15.000.000đ",
      desc: "Bộ nhận diện thương hiệu chuyên nghiệp.",
      features: [
        "Tất cả quyền lợi gói Starter",
        "Bộ ấn phẩm văn phòng (Card, Envelop, Letterhead)",
        "Avatar & Cover Fanpage",
        "Brand Guideline (Cẩm nang thương hiệu)",
        "File in ấn chất lượng cao"
      ],
      highlight: true
    },
    {
      name: "Full Creative",
      price: "30.000.000đ",
      desc: "Giải pháp hình ảnh toàn diện nhất.",
      features: [
        "Tất cả quyền lợi gói Brand Identity",
        "Thiết kế Profile công ty / Brochure (12 trang)",
        "Thiết kế Bao bì / Tem nhãn (1 dòng)",
        "Key Visual cho chiến dịch ra mắt",
        "Hỗ trợ tư vấn in ấn"
      ],
      highlight: false
    }
  ];

  // 2. Data: Web Pricing
  const webPlans = [
    {
      name: "Landing Page",
      price: "8.000.000đ",
      desc: "Tập trung chuyển đổi cho chiến dịch quảng cáo.",
      features: [
        "Thiết kế UI/UX độc quyền (One-page)",
        "Lập trình chuẩn SEO, Reponsive",
        "Hiệu ứng Animation mượt mà",
        "Tích hợp Form đăng ký về Email/Sheet",
        "Tối ưu tốc độ tải trang (90+ Google Speed)"
      ],
      highlight: false
    },
    {
      name: "Corporate Web",
      price: "18.000.000đ",
      desc: "Website doanh nghiệp khẳng định uy tín.",
      features: [
        "Website đa trang (Trang chủ, Giới thiệu, Dịch vụ...)",
        "CMS quản trị nội dung dễ dùng",
        "Tối ưu SEO On-page nâng cao",
        "Tích hợp Chat, Maps, Analytics",
        "Bảo hành kỹ thuật 12 tháng"
      ],
      highlight: true
    },
    {
      name: "E-commerce",
      price: "35.000.000đ+",
      desc: "Hệ thống bán hàng trực tuyến mạnh mẽ.",
      features: [
        "Tính năng giỏ hàng & thanh toán online",
        "Quản lý đơn hàng, kho hàng",
        "Tích hợp vận chuyển & cổng thanh toán",
        "Bộ lọc sản phẩm nâng cao",
        "Hệ thống thành viên & khuyến mãi"
      ],
      highlight: false
    }
  ];

  // 3. Data: Marketing Pricing
  const marketingPlans = [
    {
      name: "Content Care",
      price: "6.000.000đ/tháng",
      desc: "Duy trì sự hiện diện trên mạng xã hội.",
      features: [
        "12 bài post Content + Hình ảnh / tháng",
        "Thiết kế hình ảnh theo Branding",
        "Lên kế hoạch nội dung hàng tháng",
        "Seeding cơ bản",
        "Báo cáo tương tác định kỳ"
      ],
      highlight: false
    },
    {
      name: "Performance Ads",
      price: "10.000.000đ/tháng",
      desc: "Tối ưu quảng cáo chuyển đổi (Phí quản lý).",
      features: [
        "Setup chiến dịch Facebook / Google Ads",
        "Tối ưu A/B Testing liên tục",
        "Thiết kế Banner quảng cáo (3 mẫu/tháng)",
        "Cài đặt Pixel, Conversion API",
        "Cam kết minh bạch ngân sách"
      ],
      highlight: true
    },
    {
      name: "Growth Total",
      price: "20.000.000đ/tháng",
      desc: "Phòng Marketing thuê ngoài trọn gói.",
      features: [
        "Bao gồm gói Content Care & Performance",
        "Quản trị Website (Viết bài chuẩn SEO)",
        "Email Marketing Automation",
        "Tư vấn chiến lược tổng thể",
        "Họp Review hàng tuần"
      ],
      highlight: false
    }
  ];

  const faqs = [
    {
      q: "Tôi nên chọn gói Website nào?",
      a: "Nếu bạn chạy quảng cáo bán một sản phẩm cụ thể, Landing Page là lựa chọn tối ưu. Nếu bạn cần xây dựng hình ảnh công ty lâu dài, Corporate Web là cần thiết. Nếu bán nhiều sản phẩm, hãy chọn E-commerce."
    },
    {
      q: "Quy trình thanh toán như thế nào?",
      a: "Thường chia làm 2-3 đợt. Đợt 1 (50%) khi ký hợp đồng để bắt đầu triển khai. Đợt 2 (50%) sau khi nghiệm thu và bàn giao sản phẩm."
    },
    {
      q: "Bên bạn có hỗ trợ Hosting và Domain không?",
      a: "Tôi sẽ tư vấn nhà cung cấp phù hợp nhất và hỗ trợ mua hộ/cấu hình giúp bạn. Chi phí Hosting/Domain bạn sẽ thanh toán trực tiếp cho nhà cung cấp để đảm bảo quyền sở hữu chính chủ."
    },
    {
      q: "Thời gian hoàn thành dự án?",
      a: "Logo: 3-5 ngày. Landing Page: 5-7 ngày. Website doanh nghiệp: 10-15 ngày. Các dự án phức tạp hơn sẽ có timeline cụ thể khi tư vấn."
    }
  ];

  return (
    <div className="pt-24 pb-12 bg-background min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="px-10 py-20 bg-surface border-b border-border relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
  
  {/* Thay text-center thành text-left */}
  <div className="max-w-7xl mx-auto text-left relative z-10">
    <Reveal>
      {/* Giữ block để text-sm mb-4 block hoạt động đúng */}
      <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
        Dịch vụ & Bảng giá
      </span>
      
      {/* Chữ sẽ tự động căn trái theo cha */}
      <h1 className="text-5xl md:text-7xl font-display font-black text-primary mb-6">
        Giải pháp minh bạch <br/> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Hiệu quả tối đa.
        </span>
      </h1>
    </Reveal>

    <Reveal delay={0.2}>
      {/* Xóa mx-auto để đoạn văn không bị đẩy ra giữa */}
      <p className="text-xl text-secondary max-w-2xl">
        Không có chi phí ẩn. Chọn gói dịch vụ phù hợp với giai đoạn phát triển của doanh nghiệp bạn.
      </p>
    </Reveal>
  </div>
</section>

      {/* 2. DESIGN PRICING */}
      <Section>
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
              <Palette size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-primary">Thiết kế Branding</h2>
              <p className="text-secondary">Xây dựng hình ảnh thương hiệu chuyên nghiệp</p>
            </div>
          </div>
        </Reveal>
        <PricingGrid plans={designPlans} colorClass="bg-purple-600" />
      </Section>

      {/* 3. WEB PRICING */}
      <Section className="bg-surface/30">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
              <Monitor size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-primary">Thiết kế Website</h2>
              <p className="text-secondary">Nền tảng kỹ thuật số vững chắc</p>
            </div>
          </div>
        </Reveal>
        <PricingGrid plans={webPlans} colorClass="bg-blue-600" />
      </Section>

      {/* 4. MARKETING PRICING */}
      <Section>
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
              <Megaphone size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-primary">Digital Marketing</h2>
              <p className="text-secondary">Tăng trưởng doanh thu và nhận diện</p>
            </div>
          </div>
        </Reveal>
        <PricingGrid plans={marketingPlans} colorClass="bg-orange-600" />
      </Section>

      {/* 5. TOOLS & TECH STACK */}
      <Section className="bg-primary text-white">
        <Reveal>
          <div className="text-left mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Công cụ & Công nghệ</h2>
            <p className="text-white/70">Sử dụng những nền tảng tốt nhất để đảm bảo chất lượng</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
           {[
             { name: 'Figma', icon: <PenTool /> },
             { name: 'React/Next.js', icon: <Monitor /> },
             { name: 'Node.js', icon: <Database /> },
             { name: 'Google Ads', icon: <BarChart /> },
             { name: 'Adobe CC', icon: <Palette /> },
             { name: 'Analytics', icon: <BarChart /> },
           ].map((tech, i) => (
             <Reveal key={i} delay={i * 0.05}>
               <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-center gap-3">
                 <div className="text-accent">{tech.icon}</div>
                 <span className="font-bold">{tech.name}</span>
               </div>
             </Reveal>
           ))}
        </div>
      </Section>

      {/* 6. FAQ SECTION */}
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
                  Giải đáp những thắc mắc phổ biến nhất.
                </p>
                <a href="/contact" className="text-primary font-bold hover:text-accent flex items-center gap-2 group">
                  Liên hệ tư vấn trực tiếp <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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

      {/* 7. BANNER CTA */}
      <section className="py-24 px-6">
  {/* Thêm flex flex-col items-center để đảm bảo khối con luôn ở giữa */}
  <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden flex flex-col items-center">
    
    {/* Decorative blobs */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>
    
    <Reveal>
      {/* Căn giữa Heading */}
      <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 relative z-10">
        Sẵn sàng nâng tầm <br/> thương hiệu?
      </h2>

      {/* mx-auto trên p đảm bảo đoạn văn bản có giới hạn chiều rộng vẫn nằm giữa */}
      <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 relative z-10">
        Đừng để ý tưởng chỉ nằm trên giấy. Hãy biến nó thành hiện thực ngay hôm nay.
      </p>

      {/* Button đã có inline-block nên sẽ tuân theo text-center của cha */}
      <a href="/contact" className="inline-block px-10 py-5 bg-white text-primary text-lg font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl relative z-10">
        Nhận tư vấn miễn phí
      </a>
    </Reveal>
  </div>
</section>
    </div>
  );
};

// Helper Components
const PricingGrid: React.FC<{ plans: any[], colorClass?: string }> = ({ plans, colorClass = 'bg-accent' }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {plans.map((plan, idx) => (
        <Reveal key={idx} delay={idx * 0.1} className="h-full" fullHeight>
          <div className={`h-full p-8 rounded-3xl border flex flex-col relative transition-transform duration-300 hover:-translate-y-2 ${
            plan.highlight 
              ? 'bg-white border-accent shadow-2xl shadow-accent/10' 
              : 'bg-surface border-border hover:border-gray-300'
          }`}>
            {plan.highlight && (
              <div className={`absolute top-0 right-0 ${colorClass} text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10`}>
                Phổ biến nhất
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{plan.price}</div>
              <p className="text-sm text-secondary">{plan.desc}</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feat: string, fIdx: number) => (
                <li key={fIdx} className="flex items-start gap-3 text-sm text-secondary">
                  <div className={`mt-1 p-0.5 rounded-full ${plan.highlight ? colorClass : 'bg-gray-300'}`}>
                    <Check size={10} className="text-white" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a 
              href="/contact" 
              className={`w-full py-4 rounded-xl font-bold text-center transition-colors ${
                plan.highlight 
                  ? `${colorClass} text-white hover:opacity-90` 
                  : 'bg-white text-primary border border-gray-200 hover:bg-gray-100'
              }`}
            >
              Chọn gói này
            </a>
          </div>
        </Reveal>
      ))}
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