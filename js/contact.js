// Contact Section Component
import { t } from './translations.js';

export function Contact() {
  const div = document.createElement('div');
  div.id = 'contact';
  div.className = 'py-20 bg-gray-900 text-white';
  div.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16">${t('contactHeading')}</h2>
      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <p class="mb-6">${t('location')}</p>
          <p class="mb-6">${t('phone')}</p>
          <p>${t('email')}</p>
        </div>
        <form class="space-y-4">
          <input type="text" placeholder="${t('name')}" class="w-full bg-gray-800 rounded px-4 py-2 text-white" />
          <input type="email" placeholder="${t('emailField')}" class="w-full bg-gray-800 rounded px-4 py-2 text-white" />
          <textarea placeholder="${t('message')}" rows="4" class="w-full bg-gray-800 rounded px-4 py-2 text-white"></textarea>
          <button class="w-full bg-green-600 py-2 rounded text-white font-semibold">${t('send')}</button>
        </form>
      </div>
    </div>
  `;
  return div;
}
