import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { LibraryPage } from './pages/LibraryPage';
import { ContactPage } from './pages/ContactPage';
import { AdminLayout } from './pages/Admin/AdminLayout';
import { AdminLogin } from './pages/Admin/AdminLogin';
import { Dashboard } from './pages/Admin/Dashboard';
import { PageBuilder } from './pages/Admin/PageBuilder';
import { DynamicPage } from './pages/DynamicPage';
import { useEffect } from 'react';

// Wrapper to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout wrapper for public pages (with Header/Footer)
const PublicLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
      <AIChat />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="w-full overflow-hidden bg-background min-h-screen flex flex-col">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
          <Route path="/services" element={<PublicLayout><ServicesPage /></PublicLayout>} />
          <Route path="/library" element={<PublicLayout><LibraryPage /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
          
          {/* Dynamic User Created Pages (No default Header/Footer, full control) */}
          <Route path="/p/:slug" element={<DynamicPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="pages" element={<Dashboard />} />
            <Route path="builder" element={<PageBuilder />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;