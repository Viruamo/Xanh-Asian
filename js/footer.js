// Footer Component
import { t } from './translations.js';

export function Footer() {
  const div = document.createElement('div');
  div.className = 'bg-black text-gray-400 py-12';
  div.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 text-center">
      <img src="/images/logocty.svg" alt="Logo" class="w-10 h-10 mx-auto mb-4" />
      <p class="mb-8">${t('copyright')}</p>
    </div>
  `;
  return div;
}
