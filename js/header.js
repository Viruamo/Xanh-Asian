// Header Component
import { t } from './translations.js';

export function Header() {
  const div = document.createElement('div');
  div.className = 'bg-white shadow-lg sticky top-0 z-50';
  
  const lang = localStorage.getItem('language') || 'vi';
  
  div.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <a href="/" class="flex items-center gap-4 transition">
        <img src="/images/logocty.svg" alt="Xanh Asian Logo" class="h-24" />
        <div class="flex flex-col leading-tight">
          <span class="text-3xl font-bold text-green-700">Xanh Asian</span>
          <span class="text-xs font-semibold text-green-600">${t('tagline')}</span>
        </div>
      </a>
      <nav class="hidden md:flex gap-8">
        <div class="relative group">
          <a href="/about.html" class="text-gray-700 font-semibold text-lg py-2">${t('aboutTitle')}</a>
          <div class="absolute left-0 mt-0 w-48 bg-white border-t-4 border-green-600 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <a href="/about.html" class="block px-4 py-3 text-gray-700 border-b">${t('aboutCompany')}</a>
            <a href="/about.html" class="block px-4 py-3 text-gray-700">${t('history')}</a>
          </div>
        </div>
        
        <div class="relative group">
          <a href="/services.html" class="text-gray-700 font-semibold text-lg py-2">${t('technologyTitle')}</a>
          <div class="absolute left-0 mt-0 w-48 bg-white border-t-4 border-green-600 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <a href="/services.html" class="block px-4 py-3 text-gray-700 border-b">${t('information')}</a>
            <a href="/services.html" class="block px-4 py-3 text-gray-700">${t('technicalConsult')}</a>
          </div>
        </div>
        
        <div class="relative group">
          <a href="/team.html" class="text-gray-700 font-semibold text-lg py-2">${t('staffTitle')}</a>
          <div class="absolute left-0 mt-0 w-48 bg-white border-t-4 border-green-600 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <a href="/team.html" class="block px-4 py-3 text-gray-700 border-b">${t('expertTeam')}</a>
            <a href="/team.html" class="block px-4 py-3 text-gray-700 border-b">${t('achievements')}</a>
            <a href="/team.html" class="block px-4 py-3 text-gray-700">${t('recruitment')}</a>
          </div>
        </div>
        
        <div class="relative group">
          <a href="/contact.html" class="text-gray-700 font-semibold text-lg py-2">${t('contactTitle')}</a>
          <div class="absolute left-0 mt-0 w-48 bg-white border-t-4 border-green-600 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <a href="/contact.html" class="block px-4 py-3 text-gray-700 border-b">${t('contact')}</a>
            <a href="/contact.html" class="block px-4 py-3 text-gray-700 border-b">${t('customerSupport')}</a>
            <a href="/contact.html" class="block px-4 py-3 text-gray-700">${t('directions')}</a>
          </div>
        </div>
      </nav>
      
      <div class="flex items-center gap-4">
        <div class="language-switcher flex gap-2 border-l pl-4">
          <button class="lang-btn ${lang === 'vi' ? 'text-green-600 font-bold' : 'text-gray-500'} transition text-sm font-semibold" data-lang="vi">VI</button>
          <span class="text-gray-300">|</span>
          <button class="lang-btn ${lang === 'en' ? 'text-green-600 font-bold' : 'text-gray-500'} transition text-sm font-semibold" data-lang="en">EN</button>
        </div>
        <button class="md:hidden text-3xl text-gray-700">☰</button>
      </div>
    </div>
  `;
  
  // Add language switcher event listeners
  const langBtns = div.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.dataset.lang;
      localStorage.setItem('language', selectedLang);
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: selectedLang } }));
      location.reload();
    });
  });
  
  return div;
}
