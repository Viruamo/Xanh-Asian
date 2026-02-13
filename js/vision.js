// Vision Section Component
import { t } from './translations.js';

export function Vision() {
  const div = document.createElement('div');
  div.id = 'vision';
  div.className = 'py-20 bg-gray-50';
  div.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <!-- Title with Orange Bar -->
      <div class="mb-16">
        <div class="h-1 bg-orange-500 mb-4"></div>
        <h2 class="text-3xl font-bold text-center text-gray-800">${t('visionTitle')}</h2>
        <p class="text-center text-gray-600 mt-4">${t('visionSubtitle')}</p>
      </div>

      <!-- Vision and Mission Cards -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <!-- Vision Card -->
        <div class="bg-white p-8 rounded-lg shadow-lg border-t-4 border-orange-500">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">${t('ourVision')}</h3>
          <p class="text-gray-700 leading-relaxed">${t('visionContent')}</p>
        </div>

        <!-- Mission Card -->
        <div class="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-600">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">${t('ourMission')}</h3>
          <p class="text-gray-700 leading-relaxed">${t('missionContent')}</p>
        </div>
      </div>

      <!-- Core Values -->
      <div>
        <h3 class="text-2xl font-bold text-center text-gray-800 mb-8">${t('coreValues')}</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Value 1: Innovation -->
          <div class="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">💡</span>
            </div>
            <h4 class="text-lg font-semibold text-gray-800 mb-3">${t('innovation')}</h4>
            <p class="text-gray-600 text-sm">${t('innovationDesc')}</p>
          </div>

          <!-- Value 2: Sustainability -->
          <div class="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">🌍</span>
            </div>
            <h4 class="text-lg font-semibold text-gray-800 mb-3">${t('sustainability')}</h4>
            <p class="text-gray-600 text-sm">${t('sustainabilityDesc')}</p>
          </div>

          <!-- Value 3: Responsibility -->
          <div class="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">🤝</span>
            </div>
            <h4 class="text-lg font-semibold text-gray-800 mb-3">${t('responsibility')}</h4>
            <p class="text-gray-600 text-sm">${t('responsibilityDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  `;
  return div;
}
