export interface CustomPage {
  id: string;
  title: string;
  slug: string;
  htmlContent: string;
  cssContent: string;
  createdAt: string;
  status: 'published' | 'draft';
}

const STORAGE_KEY = 'ntt_cms_pages';

export const cmsStore = {
  getPages: (): CustomPage[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  getPageBySlug: (slug: string): CustomPage | undefined => {
    const pages = cmsStore.getPages();
    return pages.find(p => p.slug === slug);
  },

  savePage: (page: CustomPage) => {
    const pages = cmsStore.getPages();
    const existingIndex = pages.findIndex(p => p.id === page.id);
    
    if (existingIndex >= 0) {
      pages[existingIndex] = page;
    } else {
      pages.push(page);
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
  },

  deletePage: (id: string) => {
    const pages = cmsStore.getPages();
    const newPages = pages.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPages));
  }
};