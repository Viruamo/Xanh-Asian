// History Section Component
import { t } from './translations.js';

export function History() {
  const div = document.createElement('div');
  div.id = 'history';
  div.className = 'py-20 bg-white';
  div.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <!-- Title with Orange Bar -->
      <div class="mb-16">
        <div class="h-1 bg-orange-500 mb-4"></div>
        <h2 class="text-3xl font-bold text-center text-gray-800">${t('historyTitle')}</h2>
        <p class="text-center text-gray-600 mt-4">${t('historySubtitle')}</p>
      </div>

      <!-- Timeline -->
      <div class="max-w-4xl mx-auto">
        <!-- Timeline Item 1 -->
        <div class="grid grid-cols-12 gap-4 mb-12">
          <div class="col-span-5">
            <div class="bg-green-700 text-white p-6 rounded-lg">
              <h3 class="text-2xl font-bold mb-2">${t('year2015')}</h3>
              <h4 class="text-lg font-semibold mb-3">${t('founded')}</h4>
              <p class="text-sm">${t('foundedDesc')}</p>
            </div>
          </div>
          <div class="col-span-2 flex justify-center">
            <div class="w-1 bg-orange-500"></div>
          </div>
          <div class="col-span-5"></div>
        </div>

        <!-- Timeline Item 2 -->
        <div class="grid grid-cols-12 gap-4 mb-12">
          <div class="col-span-5"></div>
          <div class="col-span-2 flex justify-center">
            <div class="w-1 bg-orange-500"></div>
          </div>
          <div class="col-span-5">
            <div class="bg-green-700 text-white p-6 rounded-lg">
              <h3 class="text-2xl font-bold mb-2">${t('year2017')}</h3>
              <h4 class="text-lg font-semibold mb-3">${t('techDeveloped')}</h4>
              <p class="text-sm">${t('techDevelopedDesc')}</p>
            </div>
          </div>
        </div>

        <!-- Timeline Item 3 -->
        <div class="grid grid-cols-12 gap-4 mb-12">
          <div class="col-span-5">
            <div class="bg-green-700 text-white p-6 rounded-lg">
              <h3 class="text-2xl font-bold mb-2">${t('year2019')}</h3>
              <h4 class="text-lg font-semibold mb-3">${t('firstProject')}</h4>
              <p class="text-sm">${t('firstProjectDesc')}</p>
            </div>
          </div>
          <div class="col-span-2 flex justify-center">
            <div class="w-1 bg-orange-500"></div>
          </div>
          <div class="col-span-5"></div>
        </div>

        <!-- Timeline Item 4 -->
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-5"></div>
          <div class="col-span-2 flex justify-center">
            <div class="w-1 bg-orange-500"></div>
          </div>
          <div class="col-span-5">
            <div class="bg-green-700 text-white p-6 rounded-lg">
              <h3 class="text-2xl font-bold mb-2">${t('year2023')}</h3>
              <h4 class="text-lg font-semibold mb-3">${t('expansion')}</h4>
              <p class="text-sm">${t('expansionDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return div;
}
