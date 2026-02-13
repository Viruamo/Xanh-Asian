// Services Section Component
import { t } from './translations.js';

export function Services() {
  const div = document.createElement('div');
  div.id = 'services';
  div.className = 'py-20 bg-gray-50';
  div.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16">${t('services')}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        ${[
          { emoji: '🌐', titleKey: 'webDev', descKey: 'webDevDesc' },
          { emoji: '📱', titleKey: 'mobileApp', descKey: 'mobileAppDesc' },
          { emoji: '☁️', titleKey: 'cloudSolution', descKey: 'cloudSolutionDesc' },
          { emoji: '📊', titleKey: 'dataAnalysis', descKey: 'dataAnalysisDesc' },
          { emoji: '🔒', titleKey: 'security', descKey: 'securityDesc' },
          { emoji: '📞', titleKey: 'support24', descKey: 'support24Desc' }
        ].map(service => `
          <div class="bg-white p-8 rounded-2xl shadow hover:shadow-lg border-t-4 border-green-500">
            <div class="text-4xl mb-4">${service.emoji}</div>
            <h3 class="font-bold mb-2 text-green-700">${t(service.titleKey)}</h3>
            <p class="text-gray-600">${t(service.descKey)}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  return div;
}
