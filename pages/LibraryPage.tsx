import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { Search, Clock, ChevronRight, Tag, User, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Resource {
  id: string;
  title: string;
  category: 'Development' | 'Design' | 'Tools' | 'Business';
  desc: string;
  url: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  tags: string[];
}

export const LibraryPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Review Top 5 Phần mềm tạo ảnh bằng AI (AI Art) đỉnh cao 2024',
      category: 'Tools',
      desc: 'Phân tích ưu nhược điểm của Midjourney, Stable Diffusion, DALL-E 3... và tìm hiểu về 26CreatFlow - giải pháp tích hợp AI vào quy trình thiết kế chuyên nghiệp.',
      url: '/library/top-5-phan-mem-tao-anh-bang-ai',
      date: '22/05/2024',
      readTime: '12 phút đọc',
      author: 'Nguyễn Tân Thành',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
      tags: ['AI Art', 'Midjourney', 'Design Tools']
    },
    {
      id: '1',
      title: 'Lộ trình học ReactJS từ cơ bản đến nâng cao 2024',
      category: 'Development',
      desc: 'Tổng hợp các nguồn tài liệu, khóa học và dự án mẫu để làm chủ ReactJS trong 3 tháng. Bao gồm Hooks, Context và Redux.',
      url: '#',
      date: '10/05/2024',
      readTime: '15 phút đọc',
      author: 'Nguyễn Tân Thành',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
      tags: ['React', 'Frontend', 'Roadmap']
    },
    {
      id: '2',
      title: 'Bộ sưu tập 50+ UI Kit miễn phí trên Figma',
      category: 'Design',
      desc: 'Danh sách các bộ UI Kit chất lượng cao giúp tăng tốc quy trình thiết kế giao diện. Dành cho Mobile App và Dashboard.',
      url: '#',
      date: '05/05/2024',
      readTime: '5 phút đọc',
      author: 'Nguyễn Tân Thành',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
      tags: ['Figma', 'UI Kit', 'Freebie']
    },
    {
      id: '3',
      title: 'Top 10 VS Code Extensions cho Web Developer',
      category: 'Tools',
      desc: 'Những tiện ích mở rộng không thể thiếu giúp code nhanh hơn và ít lỗi hơn. Prettier, ESLint, Live Server và hơn thế nữa.',
      url: '#',
      date: '28/04/2024',
      readTime: '8 phút đọc',
      author: 'Team Tech',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
      tags: ['VS Code', 'Productivity', 'Tools']
    },
    {
      id: '4',
      title: 'Hướng dẫn tối ưu SEO cho Next.js App Router',
      category: 'Development',
      desc: 'Kỹ thuật tối ưu hóa công cụ tìm kiếm cho các ứng dụng sử dụng Next.js phiên bản mới nhất. Metadata API và Sitemap.',
      url: '#',
      date: '15/04/2024',
      readTime: '20 phút đọc',
      author: 'Nguyễn Tân Thành',
      image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d337096?q=80&w=2070&auto=format&fit=crop',
      tags: ['Next.js', 'SEO', 'Web Vitals']
    },
    {
      id: '5',
      title: 'Nguyên lý màu sắc trong thiết kế UI',
      category: 'Design',
      desc: 'Hiểu về vòng thuần sắc, độ tương phản và cách phối màu chuyên nghiệp để tạo ra giao diện nịnh mắt người dùng.',
      url: '#',
      date: '10/04/2024',
      readTime: '12 phút đọc',
      author: 'Design Lab',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
      tags: ['Color Theory', 'UI Design', 'UX']
    },
    {
      id: '6',
      title: 'Prompt Engineering: Giao tiếp với AI hiệu quả',
      category: 'Tools',
      desc: 'Kỹ thuật viết prompt để Gemini và ChatGPT trả về kết quả chính xác nhất. Tư duy logic khi làm việc với LLM.',
      url: '#',
      date: '01/04/2024',
      readTime: '10 phút đọc',
      author: 'Nguyễn Tân Thành',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      tags: ['AI', 'ChatGPT', 'Gemini']
    }
  ];

  const categories = ['All', 'Development', 'Design', 'Tools', 'Business'];
  const popularTags = ['React', 'Figma', 'AI Art', 'SEO', 'UI/UX', 'JavaScript', 'Career'];

  const filteredResources = resources.filter(item => {
    const matchesFilter = filter === 'All' || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Hero Banner */}
      <div className="relative h-[45vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed"
        >
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-sm font-bold uppercase tracking-wider mb-6 text-white backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Knowledge Hub
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
              Thư viện Tin học
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Nơi chia sẻ kiến thức, tài nguyên và góc nhìn chuyên sâu về Lập trình, Thiết kế và Công nghệ.
            </p>
          </Reveal>
        </div>
      </div>

      <Section className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 2. Main Content (Left Column) */}
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <TrendingUp className="text-accent" />
                  Bài viết mới nhất
                </h2>
                <span className="text-sm text-secondary">Hiển thị {filteredResources.length} kết quả</span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredResources.length > 0 ? (
                filteredResources.map((item, idx) => {
                  const isInternal = item.url.startsWith('/');
                  
                  // Helper content to prevent code duplication
                  const CardContent = () => (
                    <>
                      {/* Thumbnail */}
                      <div className="block relative aspect-video overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {item.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-secondary font-medium mb-3">
                          <span className="flex items-center gap-1"><Clock size={14} /> {item.readTime}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span>{item.date}</span>
                        </div>

                        <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-secondary text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
                          {item.desc}
                        </p>

                        {/* Footer Card */}
                        <div className="pt-4 border-t border-border flex justify-between items-center mt-auto">
                           <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                <User size={14} />
                              </div>
                              <span className="text-xs font-bold text-primary">{item.author}</span>
                           </div>
                           <span className="text-accent text-sm font-bold flex items-center gap-1 group/link">
                             Đọc thêm <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                           </span>
                        </div>
                      </div>
                    </>
                  );

                  return (
                    <Reveal key={item.id} delay={idx * 0.05} width="100%" className="h-full">
                      <article className="group h-full bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col">
                        {isInternal ? (
                          <Link to={item.url} className="h-full flex flex-col">
                            <CardContent />
                          </Link>
                        ) : (
                          <a href={item.url} className="h-full flex flex-col">
                             <CardContent />
                          </a>
                        )}
                      </article>
                    </Reveal>
                  );
                })
              ) : (
                <div className="col-span-full py-20 text-center bg-surface rounded-3xl border border-border border-dashed">
                   <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4">
                     <Search size={32} />
                   </div>
                   <h3 className="text-lg font-bold text-primary mb-2">Không tìm thấy kết quả</h3>
                   <p className="text-secondary mb-4">Thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc.</p>
                   <button onClick={() => {setSearchTerm(''); setFilter('All')}} className="text-accent font-bold hover:underline">Xóa bộ lọc</button>
                </div>
              )}
            </div>
          </div>

          {/* 3. Sidebar (Right Column) */}
          <aside className="lg:col-span-4 space-y-8">
            <Reveal delay={0.2} width="100%">
              {/* Search Widget */}
              <div className="bg-surface p-6 rounded-2xl border border-border sticky top-24">
                <h3 className="text-lg font-bold text-primary mb-4">Tìm kiếm</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Nhập từ khóa..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-xl text-sm focus:border-accent focus:outline-none transition-all shadow-sm"
                  />
                  <Search size={18} className="absolute left-3.5 top-3.5 text-gray-400" />
                </div>

                {/* Categories Widget */}
                <h3 className="text-lg font-bold text-primary mt-8 mb-4">Danh mục</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        filter === cat 
                          ? 'bg-primary text-white shadow-lg' 
                          : 'bg-white text-secondary hover:bg-gray-100 border border-transparent hover:border-border'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${filter === cat ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}`}>
                        {cat === 'All' ? resources.length : resources.filter(r => r.category === cat).length}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Tags Cloud */}
                <h3 className="text-lg font-bold text-primary mt-8 mb-4">Tags phổ biến</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white border border-border rounded-lg text-xs font-medium text-secondary hover:text-accent hover:border-accent cursor-pointer transition-colors flex items-center gap-1">
                      <Tag size={10} /> {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Widget */}
                <div className="mt-8 p-6 bg-gradient-to-br from-primary to-gray-800 rounded-2xl text-white text-center">
                  <h3 className="font-bold text-xl mb-2">Đăng ký bản tin</h3>
                  <p className="text-white/70 text-sm mb-4">Nhận bài viết mới nhất về Tech & Design mỗi tuần.</p>
                  <input type="email" placeholder="Email của bạn" className="w-full px-4 py-2 rounded-lg text-primary text-sm mb-2 focus:outline-none" />
                  <button className="w-full py-2 bg-accent rounded-lg font-bold text-sm hover:bg-accent/90 transition-colors">Đăng ký ngay</button>
                </div>

              </div>
            </Reveal>
          </aside>

        </div>
      </Section>
    </div>
  );
};