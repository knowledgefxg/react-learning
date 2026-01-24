import { useState, useEffect } from 'react';
import { categories, type Resource } from './data/resources';
import { Search, Github, Menu, X, ExternalLink } from 'lucide-react';
import clsx from 'clsx';
import reactLogo from './assets/react.svg';

function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // 监听滚动以更新当前激活的分类
  useEffect(() => {
    const handleScroll = () => {
      // 增加偏移量，确保标题刚进入视口时即激活
      const scrollPosition = window.scrollY + 120;
      
      // 倒序查找，找到第一个满足条件的 section
      for (let i = categories.length - 1; i >= 0; i--) {
        const cat = categories[i];
        const section = document.getElementById(cat.id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(cat.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header height + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveCategory(id);
      setSidebarOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveCategory(categories[0].id);
    setSidebarOpen(false);
  };

  const filteredCategories = categories.map(cat => ({
    ...cat,
    resources: cat.resources.filter(res => 
      res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      res.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.resources.length > 0);

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/20 selection:text-primary">
      
      {/* 移动端菜单按钮 */}
      <div className="lg:hidden fixed top-4 right-4 z-50 p-2.5 bg-card/80 backdrop-blur-md rounded-full shadow-lg border border-white/10" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
      </div>

      {/* Sidebar */}
      <aside className={clsx(
        "fixed top-0 left-0 z-40 w-72 h-screen transition-transform duration-300 ease-out bg-sidebar/95 backdrop-blur-xl border-r border-white/5",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex items-center gap-3 px-6 h-20 border-b border-white/5">
          <a href="https://react.dev" target="_blank" rel="noreferrer" className="group">
             <img src={reactLogo} className="w-8 h-8 animate-[spin_10s_linear_infinite] group-hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.6)] transition-all" alt="React Logo" />
          </a>
          <button 
            onClick={scrollToTop}
            className="text-lg font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
          >
            React 学习导航
          </button>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-5rem)] custom-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={clsx(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                activeCategory === category.id 
                  ? "bg-primary/10 text-primary shadow-[0_0_20px_rgba(97,218,251,0.1)]" 
                  : "text-text-muted hover:bg-white/5 hover:text-white"
              )}
            >
              <category.icon size={18} className={clsx(
                "transition-colors duration-200 relative z-10",
                activeCategory === category.id ? "text-primary" : "text-gray-500 group-hover:text-gray-300"
              )} />
              <span className="relative z-10">{category.title}</span>
              
              {/* Active Indicator Bar */}
              {activeCategory === category.id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full shadow-[0_0_8px_rgba(97,218,251,0.8)]" />
              )}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        
        {/* Sticky Header */}
        <header className="sticky top-0 z-30 px-4 lg:px-8 py-4 bg-background/80 backdrop-blur-lg border-b border-white/5 transition-all duration-200">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
             {/* 占位，保持布局平衡，或者可以放面包屑 */}
             <div className="hidden md:block text-sm text-text-muted font-medium">
                {categories.find(c => c.id === activeCategory)?.title || "浏览资源"}
             </div>

            <div className="relative w-full md:w-80 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-500 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                placeholder="搜索资源 (Cmd+K)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-4 py-2.5 rounded-full text-sm leading-5 bg-card/50 border border-transparent text-text placeholder-gray-500 focus:outline-none focus:bg-card focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
              />
            </div>
          </div>
        </header>

        <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-16 pb-20">
          {/* Hero Section (Optional, if searchTerm is empty) */}
          {!searchTerm && (
            <div className="text-center py-10 space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                探索 <span className="text-primary inline-block animate-pulse">React</span> 全栈生态
              </h1>
              <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
                精选全栈开发学习资源，从入门基础到源码解析，助你构建现代化 Web 应用。
              </p>
            </div>
          )}

          {filteredCategories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-32 animate-in fade-in duration-500 slide-in-from-bottom-4">
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/5">
                <div className="p-2 bg-card rounded-lg border border-white/5">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                <span className="text-xs font-mono text-text-muted bg-white/5 px-2 py-0.5 rounded-full ml-auto">
                  {category.resources.length}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {category.resources.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>
            </section>
          ))}
          
          {filteredCategories.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-text-muted">
              <Search size={48} className="mb-4 opacity-20" />
              <p className="text-lg">没有找到 "{searchTerm}" 相关资源</p>
              <button onClick={() => setSearchTerm('')} className="mt-4 text-primary hover:underline">清除搜索</button>
            </div>
          )}
        </div>

        <footer className="mt-20 border-t border-white/5 py-12 text-center text-text-muted text-sm bg-black/20">
          <div className="flex items-center justify-center gap-6 mb-6">
             <a href="https://github.com/react-learning" className="hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5">
              <Github size={20} />
             </a>
          </div>
          <p>© 2026 React Navigation Station. Built with <span className="text-primary">React</span> & Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const getFaviconUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch {
      return '';
    }
  };

  return (
    <a 
      href={resource.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col h-full bg-card hover:bg-card-hover border border-white/5 hover:border-primary/50 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/5 relative overflow-visible hover:z-10"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-[#2b313c] p-2 flex items-center justify-center border border-white/5 group-hover:border-primary/20 transition-colors shadow-inner">
          <img 
            src={getFaviconUrl(resource.url)} 
            alt="" 
            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            onError={(e) => {
              // @ts-ignore
              e.target.style.display = 'none';
              // @ts-ignore
              e.target.parentElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
            }}
          />
        </div>
        <ExternalLink size={14} className="text-gray-600 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-300" />
      </div>
      
      <div className="flex-1">
        <h3 className="text-base font-semibold text-gray-100 group-hover:text-primary transition-colors line-clamp-1 mb-2">
          {resource.title}
        </h3>
        <p className="text-sm text-text-muted/80 line-clamp-2 group-hover:line-clamp-none leading-relaxed min-h-[2.5rem] transition-all duration-300">
          {resource.description || "暂无描述"}
        </p>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-primary/20 transition-all duration-300 pointer-events-none" />
    </a>
  );
}

export default App;
