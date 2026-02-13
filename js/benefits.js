// Benefits Section Component
import { t } from './translations.js';

export function Benefits() {
  const div = document.createElement('div');
  div.className = 'py-16 bg-white';
  div.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <!-- Title Section -->
      <div class="bg-green-900 text-white py-6 px-8 rounded-lg mb-12">
        <h2 class="text-4xl font-bold">${t('benefits3Promises')}</h2>
      </div>

      <!-- Benefits Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Item 1 -->
        <div class="flex gap-6">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-24 w-24 rounded-full bg-gray-100">
              <img src="/images/khong khoi.svg" alt="Không khói" class="h-16 w-16" />
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">${t('noSmoke')}</h3>
            <p class="text-gray-700 text-sm">${t('noSmokeDescFull')}</p>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="flex gap-6">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-24 w-24 rounded-full bg-gray-100">
              <img src="/images/không nuoc.svg" alt="Không nước" class="h-16 w-16" />
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">${t('noWastewater')}</h3>
            <p class="text-gray-700 text-sm">${t('noWastewaterDescFull')}</p>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="flex gap-6">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-24 w-24 rounded-full bg-gray-100">
              <img src="/images/không tro.svg" alt="Không tro" class="h-16 w-16" />
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">${t('noAsh')}</h3>
            <p class="text-gray-700 text-sm">${t('noAshDescFull')}</p>
          </div>
        </div>
      </div>
    </div>
  `;
  return div;
}
