// Hero Section Component
import { t } from './translations.js';

export function Hero() {
  const div = document.createElement('div');
  div.id = 'home';
  div.className = 'bg-gray-200 py-20';
  div.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-5xl md:text-5xl font-bold text-green-900 mb-6">${t('heroTitle')}</h2>
          <p class="text-xl text-gray-700 mb-8">${t('heroDescription')}</p>
          <div class="flex gap-4">
            <a href="/contact.html" class="bg-green-600 text-white px-8 py-3 rounded-lg">${t('contactButton')}</a>
            <a href="/about.html" class="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg">${t('learnMore')}</a>
          </div>
        </div>
        <div class="h-96 bg-green-500 rounded-2xl overflow-hidden shadow-lg">
          <iframe class="w-full h-full" src="https://www.youtube.com/embed/jI3UxAehfuQ" title="Xanh Asian - Green Energy Technology" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  `;
  return div;
}
