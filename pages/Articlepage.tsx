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
  'prompt-engineering-101': {
    title: 'Prompt Engineering cơ bản cho người mới: Công thức làm chủ AI',
    category: 'Ai',
    date: '25/05/2024',
    readTime: '10 phút đọc',
    author: 'Nguyễn Tân Thành',
    tags: ['AI', 'Prompt Engineering', 'ChatGPT', 'Education'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    content: (
      <>
        <p className="lead text-xl text-secondary mb-8 font-medium border-l-4 border-accent pl-4">
          Bạn đã bao giờ hỏi ChatGPT một câu và nhận lại câu trả lời vô thưởng vô phạt? Vấn đề không nằm ở AI, mà nằm ở cách bạn đặt câu hỏi. Chào mừng bạn đến với thế giới của Prompt Engineering - kỹ năng quan trọng nhất trong kỷ nguyên AI.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">1. Prompt Engineering là gì?</h2>
        <img src="https://plus.unsplash.com/premium_photo-1725985758256-2b311864d1ad?q=80&w=2000&auto=format&fit=crop" alt="Prompt Engineering" className="w-full rounded-2xl mb-4 shadow-lg" />
        <p className="text-secondary mb-4 leading-relaxed">
          Hiểu đơn giản, Prompt Engineering là nghệ thuật "ra lệnh" cho AI. Nó giống như việc bạn giao việc cho một nhân viên tập sự cực kỳ thông minh nhưng... thiếu kiến thức xã hội. Nếu bạn giao việc chung chung, kết quả sẽ chung chung. Nếu bạn giao việc chi tiết, kết quả sẽ xuất sắc.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">2. Công thức vàng: R-T-C-F</h2>
        <img src="https://easyaibeginner.com/wp-content/uploads/a_digital_illustration_featuring_Role_Task_Format_3-1024x683.jpg?q=80&w=2000&auto=format&fit=crop" alt="Prompt Engineering" className="w-full rounded-2xl mb-4 shadow-lg" />
        <p className="text-secondary mb-4 leading-relaxed">
          Để viết một prompt tốt, hãy nhớ công thức <strong>R-T-C-F</strong> (Role - Task - Context - Format).
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
           <div className="bg-surface p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-primary mb-2 text-lg">R - Role (Vai trò)</h4>
              <p className="text-secondary text-sm">Hãy gán cho AI một chuyên môn cụ thể.</p>
              <p className="text-accent text-sm mt-2 italic">VD: "Bạn là một chuyên gia Marketing với 10 năm kinh nghiệm..."</p>
           </div>
           <div className="bg-surface p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-primary mb-2 text-lg">T - Task (Nhiệm vụ)</h4>
              <p className="text-secondary text-sm">Mô tả chính xác việc cần làm bằng động từ mạnh.</p>
              <p className="text-accent text-sm mt-2 italic">VD: "Hãy viết 5 tiêu đề quảng cáo Facebook bắt trend..."</p>
           </div>
           <div className="bg-surface p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-primary mb-2 text-lg">C - Context (Bối cảnh)</h4>
              <p className="text-secondary text-sm">Cung cấp thông tin nền, đối tượng mục tiêu.</p>
              <p className="text-accent text-sm mt-2 italic">VD: "Sản phẩm là giày chạy bộ cho nam giới văn phòng..."</p>
           </div>
           <div className="bg-surface p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-primary mb-2 text-lg">F - Format (Định dạng)</h4>
              <p className="text-secondary text-sm">Quy định hình thức đầu ra mong muốn.</p>
              <p className="text-accent text-sm mt-2 italic">VD: "Trình bày dưới dạng bảng so sánh, giọng văn hài hước."</p>
           </div>
        </div>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">3. Ví dụ thực tế: Trước và Sau</h2>
        <img src="https://769audio.vn/upload/Cach_Vit_Prompt_AI.jpg?q=80&w=2000&auto=format&fit=crop" alt="Prompt Engineering Example" className="w-full rounded-2xl mb-4 shadow-lg" />
        <div className="space-y-4 mb-8">
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="font-bold text-red-700 uppercase text-xs">Prompt tồi</span>
             </div>
             <p className="text-primary font-medium">"Viết cho tôi bài đăng Facebook bán giày."</p>
             <p className="text-secondary text-sm mt-2">→ Kết quả: Một bài viết chung chung, sáo rỗng, không có điểm nhấn.</p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="font-bold text-green-700 uppercase text-xs">Prompt tốt (Áp dụng R-T-C-F)</span>
             </div>
             <p className="text-primary font-medium">
               "Đóng vai Copywriter chuyên nghiệp (Role). Viết một bài đăng Facebook (Task) để bán dòng giày sneaker mới cho sinh viên Gen Z, tập trung vào yếu tố giá rẻ và thiết kế trendy (Context). Sử dụng ngôn ngữ trẻ trung, nhiều emoji và kết thúc bằng một câu kêu gọi hành động (Format)."
             </p>
             <p className="text-secondary text-sm mt-2">→ Kết quả: Một bài viết đúng insight, giọng văn phù hợp và tỷ lệ chuyển đổi cao hơn.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">4. Kỹ thuật nâng cao: Few-Shot Prompting</h2>
        <img src="https://objectways.com/wp-content/uploads/2025/06/few-shot-prompting-1024x474.webp?q=80&w=2000&auto=format&fit=crop" alt="Prompt Engineering" className="w-full rounded-2xl mb-4 shadow-lg" />
        <p className="text-secondary mb-4 leading-relaxed">
          Đôi khi AI vẫn không hiểu ý bạn dù đã mô tả kỹ. Lúc này hãy dùng kỹ thuật "Few-Shot" (Cung cấp ví dụ mẫu).
        </p>
        <div className="bg-surface p-6 rounded-2xl border border-border font-mono text-sm text-secondary">
           <p>Hãy chuyển đổi tên sản phẩm sang dạng chuẩn SEO.</p>
           <p className="mt-2 text-primary">Ví dụ 1:</p>
           <p>Input: iphone 15 pro max 256gb màu đen</p>
           <p>Output: Điện thoại iPhone 15 Pro Max 256GB - Màu Đen Titan</p>
           <p className="mt-2 text-primary">Ví dụ 2:</p>
           <p>Input: samsung s24 ultra xám</p>
           <p>Output: Điện thoại Samsung Galaxy S24 Ultra - Màu Xám Titan</p>
           <p className="mt-4 text-accent font-bold">Input của tôi: macbook air m2 8gb 256</p>
           <p className="text-accent font-bold">Output: ???</p>
        </div>
        <p className="text-secondary mt-4 leading-relaxed">
          Bằng cách đưa cho AI 1-2 ví dụ (shots), nó sẽ học được quy luật (pattern) và trả về kết quả chính xác cho input mới của bạn.
        </p>

        <h3 className="text-xl font-bold text-primary mt-8 mb-4">Lời kết</h3>
        <p className="text-secondary leading-relaxed">
          Prompt Engineering không phải là học thuộc lòng các câu lệnh. Nó là việc rèn luyện tư duy logic và khả năng diễn đạt mạch lạc. Hãy bắt đầu thực hành ngay hôm nay với công thức R-T-C-F, bạn sẽ thấy sự khác biệt!
        </p>
      </>
    )
  },
  '5': {
    title: 'Nguyên lý màu sắc trong thiết kế UI: Từ lý thuyết đến thực chiến',
    category: 'Design',
    date: '10/04/2024',
    readTime: '12 phút đọc',
    author: 'Design Lab',
    tags: ['Color Theory', 'UI Design', 'UX', 'Accessibility'],
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
    content: (
      <>
        <p className="lead text-xl text-secondary mb-8 font-medium border-l-4 border-accent pl-4">
          Màu sắc không chỉ là yếu tố trang trí. Trong UI Design, màu sắc điều hướng mắt người dùng, tạo cảm xúc và xây dựng hệ thống phân cấp thông tin. Nếu bạn thấy thiết kế của mình "thiếu thiếu" gì đó, 90% là do cách phối màu chưa chuẩn.
        </p>
        <img src="https://images.unsplash.com/photo-1716471330459-063b3baf247e?q=80&w=2000&auto=format&fit=crop" alt="Color Theory" className="w-full rounded-2xl mb-4 shadow-lg" />
        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">1. Quy luật 60-30-10: Tỉ lệ vàng</h2>
        <p className="text-secondary mb-4 leading-relaxed">
          Đây là quy tắc kinh điển nhất để tạo sự cân bằng trong bố cục. Hãy chia bảng màu của bạn thành 3 phần:
        </p>
        <div className="grid grid-cols-12 h-16 rounded-xl overflow-hidden mb-4 border border-border shadow-sm">
          <div className="col-span-7 bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">60% Màu chủ đạo</div>
          <div className="col-span-4 bg-gray-800 flex items-center justify-center text-xs font-bold text-white">30% Màu phụ</div>
          <div className="col-span-1 bg-accent flex items-center justify-center text-xs font-bold text-white">10%</div>
        </div>
        <ul className="list-disc list-inside space-y-2 mb-6 text-secondary bg-surface p-6 rounded-2xl">
          <li><strong>60% Màu chủ đạo (Dominant Color):</strong> Thường là màu nền (background), màu trung tính. Nó tạo không gian nghỉ cho mắt.</li>
          <li><strong>30% Màu phụ (Secondary Color):</strong> Dùng cho các thẻ (cards), header, footer. Nó hỗ trợ màu chủ đạo nhưng vẫn tạo sự khác biệt.</li>
          <li><strong>10% Màu điểm nhấn (Accent Color):</strong> Dành cho nút bấm (CTA), link, thông báo quan trọng. Đây là nơi bạn muốn người dùng click vào.</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">2. Các cách phối màu cơ bản</h2>
        
        <h3 className="text-lg font-bold text-primary mt-6 mb-2">Monochromatic (Đơn sắc)</h3>
        <p className="text-secondary mb-4">
          Sử dụng một màu gốc (Hue) và thay đổi độ đậm nhạt (Saturation/Brightness). Cách này an toàn nhất, tạo cảm giác chuyên nghiệp, sạch sẽ và không bao giờ lỗi mốt.
        </p>
        <div className="flex h-12 rounded-lg overflow-hidden mb-6">
           <div className="flex-1 bg-blue-900"></div>
           <div className="flex-1 bg-blue-700"></div>
           <div className="flex-1 bg-blue-500"></div>
           <div className="flex-1 bg-blue-300"></div>
           <div className="flex-1 bg-blue-100"></div>
        </div>

        <h3 className="text-lg font-bold text-primary mt-6 mb-2">Analogous (Tương đồng)</h3>
        <p className="text-secondary mb-4">
          Sử dụng 3 màu nằm cạnh nhau trên vòng thuần sắc (ví dụ: Xanh lá - Xanh lam - Tím). Tạo cảm giác hài hòa, tự nhiên, thường thấy trong các ứng dụng về thiên nhiên hoặc thư giãn.
        </p>

        <h3 className="text-lg font-bold text-primary mt-6 mb-2">Complementary (Bổ túc)</h3>
        <p className="text-secondary mb-4">
          Sử dụng 2 màu đối diện nhau (ví dụ: Cam - Xanh dương). Tạo độ tương phản cực mạnh, gây sự chú ý cao. Dùng cẩn thận kẻo gây chói mắt.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">3. Tương phản và Tính tiếp cận (Accessibility)</h2>
        <p className="text-secondary mb-4 leading-relaxed">
          Đừng chỉ thiết kế cho người mắt sáng. Hãy nghĩ đến người già, người mù màu hay người dùng điện thoại ngoài trời nắng. Độ tương phản (Contrast) giữa chữ và nền là yếu tố sống còn.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
           <div className="bg-gray-200 p-6 rounded-xl flex items-center justify-center">
              <span className="text-gray-400 font-bold text-xl">Low Contrast (Khó đọc)</span>
           </div>
           <div className="bg-primary p-6 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">High Contrast (Dễ đọc)</span>
           </div>
        </div>
        <p className="text-secondary mb-4">
          Theo chuẩn WCAG, tỉ lệ tương phản tối thiểu nên là:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-secondary">
          <li><strong>4.5:1</strong> cho văn bản thường.</li>
          <li><strong>3:1</strong> cho văn bản lớn (bold 18pt+).</li>
        </ul>
        <p className="text-secondary italic text-sm">
          Tip: Sử dụng các plugin như "Contrast" trên Figma để kiểm tra tự động.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-4">4. Tâm lý học màu sắc</h2>
        <p className="text-secondary mb-4 leading-relaxed">
          Mỗi màu sắc gợi lên một cảm xúc khác nhau. Chọn sai màu có thể truyền tải sai thông điệp thương hiệu.
        </p>
        <div className="space-y-3">
           <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-blue-500 mt-1 shrink-0"></div>
              <p className="text-secondary text-sm"><strong>Xanh dương:</strong> Tin tưởng, an toàn, công nghệ (Ngân hàng, MXH, Tech).</p>
           </div>
           <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-red-500 mt-1 shrink-0"></div>
              <p className="text-secondary text-sm"><strong>Đỏ:</strong> Năng lượng, khẩn cấp, đam mê (Đồ ăn, Sale, Cảnh báo).</p>
           </div>
           <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-green-500 mt-1 shrink-0"></div>
              <p className="text-secondary text-sm"><strong>Xanh lá:</strong> Tăng trưởng, tiền bạc, sức khỏe (Tài chính, Y tế, Eco).</p>
           </div>
           <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-black mt-1 shrink-0"></div>
              <p className="text-secondary text-sm"><strong>Đen/Trắng:</strong> Sang trọng, tối giản, cao cấp (Thời trang, Xe hơi).</p>
           </div>
        </div>

        <h3 className="text-xl font-bold text-primary mt-8 mb-4">Lời khuyên cuối cùng</h3>
        <p className="text-secondary leading-relaxed">
          Đừng cố gắng dùng quá nhiều màu. Một UI đẹp thường chỉ cần 1 màu chủ đạo, 1 màu xám (cho text phụ) và 1 màu accent. Hãy bắt đầu đơn giản, và chỉ thêm màu khi thực sự cần thiết.
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