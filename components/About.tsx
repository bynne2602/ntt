import React from 'react';
import { Section } from './Section';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <Reveal>
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-6">Về bản thân</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-[1.3] uppercase">
              creativity. <br/>
              technique. <br/>
              <span className="text-secondary/50">Strategy.</span>
            </h3>
          </Reveal>
        </div>
        <div className="space-y-6 text-lg text-secondary leading-relaxed">
          <Reveal delay={0.2}>
            <p>
              Xin chào, mình là <span className="text-primary font-bold">Nguyễn Tân Thành</span>. Mình tập trung vào việc xây dựng hình ảnh thương hiệu, thiết kế giao diện trực quan, 
              phát triển website hiệu quả và triển khai các giải pháp digital marketing.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              Với quan điểm <strong className="text-accent">“Design Không chỉ thu hút ánh nhìn, mà còn tạo ra chuyển đổi”</strong>, mỗi dự án mình thực hiện đều hướng tới 
              trải nghiệm người dùng mượt mà, hình ảnh nhất quán và hiệu suất tối ưu.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
               <div>
                  <h4 className="text-4xl font-display font-bold text-primary mb-2">5+</h4>
                  <p className="text-sm text-secondary font-semibold uppercase tracking-wider">Năm kinh nghiệm</p>
               </div>
               <div>
                  <h4 className="text-4xl font-display font-bold text-primary mb-2">50+</h4>
                  <p className="text-sm text-secondary font-semibold uppercase tracking-wider">Dự án hoàn thành</p>
               </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};