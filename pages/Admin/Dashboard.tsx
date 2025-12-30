import React, { useState, useEffect } from 'react';
import { cmsStore, CustomPage } from '../../store/cmsStore';
import { FileText, Eye, Edit, Trash, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const [pages, setPages] = useState<CustomPage[]>([]);

  useEffect(() => {
    setPages(cmsStore.getPages());
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-8">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-surface p-6 rounded-2xl border border-border">
          <div className="flex justify-between items-start mb-4">
             <div className="p-3 bg-accent/10 rounded-xl text-accent"><FileText size={24} /></div>
             <span className="text-xs font-bold bg-black/5 px-2 py-1 rounded text-primary">Total</span>
          </div>
          <h3 className="text-4xl font-bold text-primary mb-1">{pages.length}</h3>
          <p className="text-secondary text-sm">Trang đã tạo</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-xl font-bold text-primary">Danh sách trang</h2>
        <Link to="/admin/builder" className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-accent transition-colors">
          <Plus size={18} /> Tạo trang mới
        </Link>
      </div>

      {/* Pages List */}
      <div className="bg-surface rounded-2xl border border-border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-black/5 text-secondary text-xs uppercase">
            <tr>
              <th className="px-6 py-4">Tên trang</th>
              <th className="px-6 py-4">URL Slug</th>
              <th className="px-6 py-4">Trạng thái</th>
              <th className="px-6 py-4">Ngày tạo</th>
              <th className="px-6 py-4 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {pages.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-secondary">
                  Chưa có trang nào. Hãy tạo trang mới!
                </td>
              </tr>
            )}
            {pages.map((page) => (
              <tr key={page.id} className="hover:bg-black/5 transition-colors">
                <td className="px-6 py-4 font-bold text-primary">{page.title}</td>
                <td className="px-6 py-4 text-secondary font-mono text-sm">/p/{page.slug}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${page.status === 'published' ? 'bg-green-500/10 text-green-600' : 'bg-yellow-500/10 text-yellow-600'}`}>
                    {page.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-secondary text-sm">
                  {new Date(page.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                   <div className="flex justify-end gap-2">
                     <a href={`/p/${page.slug}`} target="_blank" rel="noreferrer" className="p-2 hover:bg-black/10 rounded-lg text-secondary hover:text-primary">
                       <Eye size={18} />
                     </a>
                     <Link to={`/admin/builder?id=${page.id}`} className="p-2 hover:bg-black/10 rounded-lg text-secondary hover:text-accent">
                       <Edit size={18} />
                     </Link>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};