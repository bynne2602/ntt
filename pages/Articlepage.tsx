import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { Clock, User, Tag, ArrowLeft, Share2, Facebook, Linkedin, Twitter } from 'lucide-react';

// Mock Data Database for Articles
const articlesData: Record<string, any> = {
  'top-5-phan-mem-tao-anh-bang-ai': {
    title: 'Review Top 5 Phần mềm tạo ảnh bằng AI (AI Art) đỉnh cao 2024',
    category: 'Tools',
    date: '22/05/2024',
    readTime: '12 phút đọc',
    author: 'Nguyễn Tân Thành',
    tags: ['AI Art', 'Midjourney', 'Design Tools', 'Review'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    content: (
      <>
        <p className="lead text-xl text-secondary mb-8 font-medium border-l-4 border-accent pl-4">
          Năm 2024 đánh dấu sự bùng nổ của Generative AI. Không còn là những bức ảnh méo mó, AI giờ đây có thể tạo ra những tác phẩm nghệ thuật khiến cả những họa sĩ lão làng cũng phải kinh ngạc. Dưới đây là đánh giá chi tiết về 5 công cụ hàng đầu bạn không thể bỏ qua.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">1. Midjourney v6 - Ông vua của chi tiết</h2>
        <img src="https://images.unsplash.com/photo-1675557570482-df9926f61d86?q=80&w=2000&auto=format&fit=crop" alt="Midjourney Art" className="w-full rounded-2xl mb-4 shadow-lg" />
        <p className="text-secondary mb-4 leading-relaxed">
          Midjourney vẫn giữ vững ngôi vương về tính nghệ thuật và độ chi tiết. Phiên bản v6 mới nhất đã cải thiện đáng kể khả năng hiểu ngôn ngữ tự nhiên và xử lý văn bản (text rendering) trong ảnh - điều mà các phiên bản trước rất yếu.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-secondary bg-surface p-6 rounded-2xl">
          <li><strong>Ưu điểm:</strong> Chất lượng ảnh cực cao, phong cách nghệ thuật đa dạng, cộng đồng Discord mạnh.</li>
          <li><strong>Nhược điểm:</strong> Phải dùng qua Discord (khá bất tiện), có phí hàng tháng (từ $10).</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">2. DALL-E 3 (OpenAI) - Hiểu bạn nhất</h2>
        <img src="https://images.unsplash.com/photo-1679403766665-67ed6cd2df30?q=80&w=2000&auto=format&fit=crop" alt="DALL-E 3" className="w-full rounded-2xl mb-4 shadow-lg" />
        <p className="text-secondary mb-4 leading-relaxed">
          Được tích hợp trực tiếp vào ChatGPT Plus, DALL-E 3 có khả năng hiểu prompt (câu lệnh) tốt nhất hiện nay. Bạn không cần phải học những câu thần chú phức tạp, chỉ cần mô tả bằng tiếng Việt tự nhiên, DALL-E 3 sẽ vẽ chính xác ý tưởng của bạn.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">3. Stable Diffusion - Quyền năng trong tay bạn</h2>
        <img src="https://miro.medium.com/v2/resize:fit:1200/1*Rbq9cDCJpGq7HKeNAeIitg.jpeg?q=80&w=2000&auto=format&fit=crop" alt="Stable Diffusion" className="w-full rounded-2xl mb-4 shadow-lg" />
        <p className="text-secondary mb-4 leading-relaxed">
          Khác với Midjourney hay DALL-E, Stable Diffusion là mã nguồn mở. Bạn có thể cài đặt nó trên máy tính cá nhân (nếu có GPU mạnh) và toàn quyền kiểm soát mọi thông số.
        </p>
        <p className="text-secondary mb-6 leading-relaxed">
          Với sự hỗ trợ của ControlNet và LoRA, Stable Diffusion là lựa chọn số 1 cho các Designer muốn kiểm soát bố cục (composition) và tư thế nhân vật chính xác tuyệt đối.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">4. Adobe Firefly - An toàn cho thương mại</h2>
        <img src="https://images.unsplash.com/photo-1764601841403-5c43713923c7?q=80&w=2000&auto=format&fit=crop" alt="Adobe Firefly" className="w-full rounded-2xl mb-4 shadow-lg" />
        <p className="text-secondary mb-4 leading-relaxed">
          Adobe đã tích hợp Firefly vào Photoshop (Generative Fill). Điểm mạnh lớn nhất của Firefly là "sạch" về bản quyền. Adobe train model trên kho ảnh Adobe Stock của họ, nên bạn có thể yên tâm sử dụng ảnh cho mục đích thương mại mà không lo kiện tụng.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">5. 26CreatFlow - Giải pháp tối ưu quy trình</h2>
<img src="https://the26creative.com/phan-mem-26creatflow.png?q=80&w=2000&auto=format&fit=crop" alt="26CreatFlow" className="w-full rounded-2xl mb-4 shadow-lg" />
<div className="bg-accent/5 border border-accent/20 p-6 rounded-2xl mb-6">
  <p className="text-secondary mb-0 leading-relaxed italic">
    "26CreatFlow không chỉ là công cụ tạo ảnh, nó là một dòng chảy sáng tạo (Creative Flow) kết hợp sức mạnh của nhiều AI engine."
  </p>
</div>
<p className="text-secondary mb-4 leading-relaxed">
  Dựa trên nền tảng công nghệ mới, 26CreatFlow tập trung vào việc tích hợp AI vào quy trình làm việc thực tế của Agency. Thay vì chỉ tạo ra những bức ảnh ngẫu nhiên, nó giúp duy trì tính nhất quán của nhân vật và phong cách thương hiệu xuyên suốt dự án.
</p>

{/* ĐOẠN CTA BUTTON ĐÃ CHUYỂN ĐỔI SANG TYPESCRIPT/REACT JSX */}
<div style={{ marginTop: '40px', padding: '32px', background: '#111', borderRadius: '16px', textAlign: 'center' }}>
  <h3 style={{ marginBottom: '12px', color: '#ffffff' }}>
    Tải 26Creatflow ngay hôm nay
  </h3>
  <p style={{ marginBottom: '20px', color: '#ffffff' }}>
    Trải nghiệm sức mạnh AI trong sáng tạo hình ảnh chuyên nghiệp.
  </p>
  <a 
    href="https://drive.google.com/file/d/1fpoWfpvfyEJUkpO9VQDMZtuWlXMMtxIX/view?usp=sharing" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ 
      display: 'inline-block', 
      padding: '14px 32px', 
      background: '#e53935', 
      color: '#fff', 
      fontWeight: 'bold', 
      borderRadius: '999px', 
      textDecoration: 'none' 
    }}
  >
    ⬇ Tải 26Creatflow (Phiên bản Windows)
  </a>
</div>
        
        <h3 className="text-xl font-bold text-primary mt-8 mb-4">Kết luận</h3>
        <p className="text-secondary mb-4 leading-relaxed">
          Nếu bạn cần nghệ thuật bay bổng, chọn <strong>Midjourney</strong>. <br/>
          Nếu cần sự tiện lợi và hiểu ý nhanh, chọn <strong>DALL-E 3</strong>. <br/>
          Nếu là dân chuyên nghiệp cần kiểm soát sâu, <strong>Stable Diffusion</strong> là chân ái. <br/>
          Nếu bạn cần poster nhanh đẹp có thể chọn <strong>26CreatFlow</strong>. <br/>
        </p>
        <p className="text-secondary leading-relaxed">
          AI không thay thế Designer, nhưng Designer biết dùng AI sẽ thay thế những người không biết. Hãy bắt đầu học ngay hôm nay!
        </p>
      </>
    )
  },
  // Fallback content for demo purposes if user clicks other links
  'default': {
    title: 'Bài viết đang được cập nhật',
    category: 'General',
    date: 'Today',
    readTime: '1 phút',
    author: 'Admin',
    tags: [],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    content: <p>Nội dung bài viết này đang được biên soạn. Vui lòng quay lại sau.</p>
  }
};

export const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = articlesData[id || ''] || (id?.startsWith('new') ? articlesData['new-1'] : articlesData['default']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) return <div>Not Found</div>;

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Article Hero / Header */}
      <div className="relative w-full h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <Link 
                  to="/library" 
                  className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm font-bold uppercase tracking-wider backdrop-blur-md px-3 py-1 rounded-full bg-black/20"
                >
                  <ArrowLeft size={16} /> Quay lại thư viện
                </Link>
                <span className="px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  {article.category}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-primary mb-6 leading-tight drop-shadow-sm">
                {article.title}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-6 text-secondary text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 overflow-hidden">
                    <User size={16} />
                  </div>
                  <span className="text-primary font-bold">{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-accent"></div>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 2. Main Content & Sidebar Layout */}
      <Section className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Article Body */}
          <article className="lg:col-span-8">
            <Reveal delay={0.3}>
              <div className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-p:text-secondary prose-a:text-accent max-w-none">
                {article.content}
              </div>
            </Reveal>

            {/* Tags & Share */}
            <Reveal delay={0.4}>
              <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-surface border border-border rounded-lg text-xs font-medium text-secondary flex items-center gap-1 hover:border-accent hover:text-accent transition-colors cursor-pointer">
                      <Tag size={12} /> {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-primary flex items-center gap-2">
                    <Share2 size={16} /> Chia sẻ:
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"><Facebook size={16} /></button>
                    <button className="p-2 bg-blue-400 text-white rounded-full hover:scale-110 transition-transform"><Twitter size={16} /></button>
                    <button className="p-2 bg-blue-700 text-white rounded-full hover:scale-110 transition-transform"><Linkedin size={16} /></button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Related Posts (Mockup) */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-primary mb-8">Bài viết liên quan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100 relative">
                       <img src={`https://images.unsplash.com/photo-${i === 1 ? '1677442136019-21780ecad995' : '1542831371-29b0f74f9713'}?q=80&w=800&auto=format&fit=crop`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Related" />
                    </div>
                    <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                      {i === 1 ? 'Prompt Engineering cơ bản cho người mới' : 'Top công cụ AI hỗ trợ Coding'}
                    </h4>
                    <p className="text-sm text-secondary mt-2">10 phút đọc</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <Reveal delay={0.4} width="100%">
              {/* Author Widget */}
              <div className="p-6 bg-surface rounded-2xl border border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">Tác giả</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=200&auto=format&fit=crop" 
                    alt="Author" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" 
                  />
                  <div>
                    <h4 className="font-bold text-primary text-lg">Nguyễn Tân Thành</h4>
                    <p className="text-xs text-secondary">Creative Director</p>
                  </div>
                </div>
                <p className="text-sm text-secondary mb-4">
                  Tôi viết về những gì tôi học được trong quá trình làm nghề. Hy vọng nó giúp ích cho bạn.
                </p>
                <button className="w-full py-2 bg-white border border-border rounded-lg text-sm font-bold hover:border-primary transition-colors">Theo dõi</button>
              </div>

              {/* Newsletter Widget */}
              <div className="p-8 bg-primary rounded-2xl text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[40px] pointer-events-none"></div>
                <h3 className="font-bold text-xl mb-2 relative z-10">Đừng bỏ lỡ bài viết mới</h3>
                <p className="text-white/70 text-sm mb-6 relative z-10">Nhận thông báo về email mỗi tuần một lần. Không spam.</p>
                <div className="space-y-3 relative z-10">
                  <input type="email" placeholder="Email của bạn" className="w-full px-4 py-3 rounded-lg text-primary text-sm focus:outline-none" />
                  <button className="w-full py-3 bg-accent rounded-lg font-bold text-sm hover:bg-accent/90 transition-colors">Đăng ký ngay</button>
                </div>
              </div>
            </Reveal>
          </aside>

        </div>
      </Section>
    </div>
  );
};