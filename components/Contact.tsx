import React, { useState } from 'react';
import { Section } from './Section';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

  const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxcW7jYZ7fbiIBp53m0Mruja8jvH6hVrob_BLEddEdn9AdFbRwykyDUS1PXiJETpbWtUw/exec';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const body = new URLSearchParams();
    body.append('name', name);
    body.append('email', email);
    body.append('phone', phone);
    body.append('subject', subject);
    body.append('message', message);

    await fetch(SCRIPT_URL, {
      method: 'POST',
      body,
      mode: 'no-cors',
    });

    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  } catch (err) {
    console.error(err);
    alert('Có lỗi xảy ra. Vui lòng thử lại.');
  } finally {
    setLoading(false);
  }
};


  return (
    <Section id="contact" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
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

        {/* RIGHT: FORM */}
        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="border-border rounded-3xl p-8 md:p-10 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Họ và tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-4
                text-black placeholder-black/40
                focus:outline-none focus:border-accent transition"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-4
                text-black placeholder-black/40
                focus:outline-none focus:border-accent transition"
              />
            </div>

            <input
              type="tel"
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-4
              text-black placeholder-black/40
              focus:outline-none focus:border-accent transition"
            />
            <input
              type="text"
              placeholder="Chủ đề"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full bg-background border border-border rounded-lg px-4 py-4
              text-black placeholder-black/40
              focus:outline-none focus:border-accent transition"
            />

            <textarea
              rows={5}
              placeholder="Nội dung"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full bg-background border border-border rounded-lg px-4 py-4
              text-black placeholder-black/40 resize-none
              focus:outline-none focus:border-accent transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 self-start
              bg-accent text-white font-bold
              px-6 py-3 rounded-lg
              hover:bg-accent/90 transition
              disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Đang gửi...' : 'Gửi tin nhắn'}
              <ArrowRight size={18} />
            </button>
          </form>
        </Reveal>

      </div>
      {showSuccess && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div className="bg-white rounded-2xl p-8 text-center max-w-sm w-full">
      <h3 className="text-2xl font-bold mb-3 text-primary">
        Gửi thành công
      </h3>
      <p className="text-secondary mb-6">
        Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm.
      </p>
      <button
        onClick={() => setShowSuccess(false)}
        className="bg-accent text-white px-6 py-3 rounded-lg font-semibold"
      >
        Đóng
      </button>
    </div>
  </div>
)}
    </Section>
  );
};
