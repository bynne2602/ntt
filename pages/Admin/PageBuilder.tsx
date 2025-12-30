import React, { useState, useEffect } from 'react';
import { Save, Eye, ArrowLeft, Trash } from 'lucide-react';
import { cmsStore, CustomPage } from '../../store/cmsStore';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export const PageBuilder: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get('id');

  const [formData, setFormData] = useState<CustomPage>({
    id: '',
    title: '',
    slug: '',
    htmlContent: '<div class="custom-page">\n  <h1>Xin chào!</h1>\n  <p>Viết HTML của bạn ở đây...</p>\n</div>',
    cssContent: '.custom-page {\n  padding: 40px;\n  color: #18181B;\n  text-align: center;\n}\n\nh1 {\n  color: #FF4D00;\n}',
    createdAt: new Date().toISOString(),
    status: 'published'
  });

  useEffect(() => {
    if (editId) {
      const pages = cmsStore.getPages();
      const page = pages.find(p => p.id === editId);
      if (page) setFormData(page);
    } else {
      setFormData(prev => ({ ...prev, id: uuidv4() }));
    }
  }, [editId]);

  const handleSave = (silent = false) => {
    if (!formData.title || !formData.slug) {
      alert('Vui lòng nhập Tiêu đề và Slug');
      return false;
    }
    cmsStore.savePage(formData);
    if (!silent) {
      alert('Đã lưu thành công!');
      navigate('/admin/pages');
    }
    return true;
  };

  const handlePreview = () => {
    // Save before previewing to ensure localStorage is updated
    if (handleSave(true)) {
      window.open(`/p/${formData.slug}`, '_blank');
    }
  };

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa trang này?')) {
      cmsStore.deletePage(formData.id);
      navigate('/admin/pages');
    }
  };

  return (
    <div className="max-w-6xl mx-auto pb-20">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/admin/pages')} className="p-2 bg-surface rounded-full border border-border hover:bg-black/5 text-primary">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-3xl font-bold text-primary">{editId ? 'Chỉnh sửa trang' : 'Tạo trang mới'}</h1>
        </div>
        <div className="flex gap-3">
          {editId && (
            <button onClick={handleDelete} className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-lg font-bold hover:bg-red-500/20">
              <Trash size={18} /> Xóa
            </button>
          )}
          <button 
            onClick={handlePreview}
            className="flex items-center gap-2 px-4 py-2 bg-surface text-primary border border-border rounded-lg font-bold hover:bg-black/5"
          >
            <Eye size={18} /> Xem trước
          </button>
          <button onClick={() => handleSave(false)} className="flex items-center gap-2 px-6 py-2 bg-accent text-white rounded-lg font-bold hover:bg-accent/80">
            <Save size={18} /> Lưu trang
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Settings Column */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-surface p-6 rounded-2xl border border-border">
            <h3 className="text-primary font-bold mb-4">Cấu hình chung</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-secondary text-xs uppercase mb-2">Tiêu đề trang</label>
                <input 
                  type="text" 
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-white border border-border rounded-lg p-3 text-primary focus:border-accent outline-none shadow-sm"
                />
              </div>
              <div>
                <label className="block text-secondary text-xs uppercase mb-2">URL Slug</label>
                <div className="flex items-center bg-white border border-border rounded-lg px-3 shadow-sm">
                  <span className="text-secondary text-sm">/p/</span>
                  <input 
                    type="text" 
                    value={formData.slug}
                    onChange={e => setFormData({...formData, slug: e.target.value})}
                    className="w-full bg-transparent border-none p-3 text-primary focus:ring-0 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-secondary text-xs uppercase mb-2">Trạng thái</label>
                <select 
                  value={formData.status}
                  onChange={e => setFormData({...formData, status: e.target.value as any})}
                  className="w-full bg-white border border-border rounded-lg p-3 text-primary focus:border-accent outline-none shadow-sm"
                >
                  <option value="published">Đã xuất bản</option>
                  <option value="draft">Bản nháp</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Code Editor Column */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-surface rounded-2xl border border-border overflow-hidden flex flex-col h-[500px]">
             <div className="bg-gray-100 px-4 py-2 border-b border-border flex justify-between items-center">
               <span className="text-xs font-mono text-accent">HTML Structure</span>
             </div>
             <textarea 
               value={formData.htmlContent}
               onChange={e => setFormData({...formData, htmlContent: e.target.value})}
               className="flex-1 w-full bg-[#1e1e1e] text-gray-300 font-mono text-sm p-4 outline-none resize-none"
               spellCheck={false}
             />
          </div>

          <div className="bg-surface rounded-2xl border border-border overflow-hidden flex flex-col h-[300px]">
             <div className="bg-gray-100 px-4 py-2 border-b border-border flex justify-between items-center">
               <span className="text-xs font-mono text-blue-500">CSS Styling</span>
             </div>
             <textarea 
               value={formData.cssContent}
               onChange={e => setFormData({...formData, cssContent: e.target.value})}
               className="flex-1 w-full bg-[#1e1e1e] text-gray-300 font-mono text-sm p-4 outline-none resize-none"
               spellCheck={false}
             />
          </div>
        </div>
      </div>
    </div>
  );
};