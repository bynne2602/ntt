import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cmsStore, CustomPage } from '../store/cmsStore';
import { ArrowLeft } from 'lucide-react';

export const DynamicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [page, setPage] = useState<CustomPage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const foundPage = cmsStore.getPageBySlug(slug);
      setPage(foundPage || null);
    }
    setLoading(false);
  }, [slug]);

  if (loading) return <div className="min-h-screen bg-background flex items-center justify-center text-primary">Loading...</div>;

  if (!page) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-display font-black text-gray-200">404</h1>
        <h2 className="text-3xl font-bold text-primary mb-4">Không tìm thấy trang</h2>
        <Link to="/" className="text-accent hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Quay về trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Inject CSS */}
      <style>{page.cssContent}</style>
      
      {/* Navigation Helper (optional, can be removed if user wants pure blank page) */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/" className="w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors">
          <ArrowLeft size={20} />
        </Link>
      </div>

      {/* Inject HTML */}
      <div 
        dangerouslySetInnerHTML={{ __html: page.htmlContent }} 
      />
    </div>
  );
};