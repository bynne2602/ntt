import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded password for demo: "admin"
    if (pass === 'admin') {
      localStorage.setItem('ntt_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Sai mật khẩu! (Hint: admin)');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 bg-surface border border-border rounded-3xl shadow-lg">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent mx-auto mb-4">
            <Lock size={24} />
          </div>
          <h1 className="text-2xl font-bold text-primary">CMS Login</h1>
          <p className="text-secondary">Truy cập hệ thống quản trị</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Mật khẩu"
            value={pass}
            onChange={e => setPass(e.target.value)}
            className="w-full bg-white border border-border rounded-xl px-4 py-3 text-primary focus:border-accent outline-none shadow-sm"
          />
          <button className="w-full bg-accent text-white font-bold py-3 rounded-xl hover:bg-accent/80 transition-colors shadow-md">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};