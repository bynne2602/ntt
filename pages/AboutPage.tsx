import React from 'react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { Briefcase, Code, Palette, Terminal } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const experiences = [
    {
      year: "2023 - Nay",
      role: "Creative Director & Lead Dev",
      company: "Freelance / Studio Cá nhân",
      desc: "Điều hành các dự án thiết kế và phát triển web trọn gói cho khách hàng SME."
    },
    {
      year: "2021 - 2023",
      role: "Senior UI/UX Designer",
      company: "Tech Solutions Corp",
      desc: "Chịu trách nhiệm thiết kế trải nghiệm người dùng cho các sản phẩm SaaS."
    },
    {
      year: "2019 - 2021",
      role: "Frontend Developer",
      company: "Creative Agency",
      desc: "Phát triển giao diện website sử dụng ReactJS và các hiệu ứng tương tác."
    }
  ];

  const skills = [
    { icon: <Code />, category: "Development", items: ["React / Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Git / CI/CD"] },
    { icon: <Palette />, category: "Design", items: ["Figma / UI/UX", "Adobe Photoshop", "Illustrator", "Brand Identity", "Prototyping"] },
    { icon: <Terminal />, category: "Other", items: ["SEO Optimization", "Digital Marketing", "Prompt Engineering", "Project Management"] }
  ];

  return (
    <div className="pt-24 pb-12">
      {/* Hero Header */}
      <section className="px-6 py-20 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Hành trình & Kinh nghiệm</span>
            <h1 className="text-5xl md:text-7xl font-display font-black text-primary mb-6">
              Tôi là ai?
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-secondary leading-relaxed">
              Một người đam mê cầu nối giữa <span className="text-primary font-bold">nghệ thuật thị giác</span> và <span className="text-primary font-bold">tư duy logic</span>. 
              Tôi không chỉ tạo ra những sản phẩm đẹp, mà còn tối ưu hóa chúng để mang lại giá trị thực tế cho doanh nghiệp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-square border border-border group">
             <img 
               src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop" 
               alt="Portrait" 
               className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
             />
          </div>
          <div className="space-y-6">
            <Reveal>
              <h2 className="text-3xl font-display font-bold text-primary">Triết lý thiết kế</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-secondary text-lg">
                "Simple is the best" - nhưng đơn giản không có nghĩa là sơ sài. Sự đơn giản đến từ việc chắt lọc những gì tinh túy nhất, loại bỏ sự rườm rà để người dùng tập trung vào nội dung cốt lõi.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-secondary text-lg">
                Tôi tin rằng một sản phẩm tốt là sự giao thoa giữa:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-primary font-medium pl-4">
                <li>Thẩm mỹ tinh tế (Aesthetics)</li>
                <li>Trải nghiệm mượt mà (Functionality)</li>
                <li>Hiệu quả kinh doanh (Business Value)</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section className="bg-surface/50">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Kinh nghiệm làm việc</h2>
          </div>
        </Reveal>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="flex gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-accent shadow-sm z-10">
                    <Briefcase size={20} />
                  </div>
                  {idx !== experiences.length - 1 && <div className="w-px h-full bg-border my-2"></div>}
                </div>
                <div className="pb-12">
                  <span className="text-sm font-bold text-accent tracking-widest uppercase mb-1 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-primary">{item.role}</h3>
                  <p className="text-primary/70 font-medium mb-2">{item.company}</p>
                  <p className="text-secondary">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Skills Grid */}
      <Section>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Kỹ năng chuyên môn</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {skills.map((skill, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="h-full" fullHeight>
              <div className="h-full p-8 border border-border rounded-3xl bg-surface hover:border-accent transition-colors flex flex-col">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-6">{skill.category}</h3>
                <div className="space-y-3 flex-grow">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
};