// About Section Component
import { t } from './translations.js';

export function About() {
  const div = document.createElement('div');
  div.id = 'about';
  div.className = 'py-20 bg-gray-100';
  div.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <!-- Title with Orange Bar -->
      <div class="mb-12">
        <div class="h-1 bg-orange-500 mb-4"></div>
        <h2 class="text-3xl font-bold text-center text-gray-800">${t('breakthoughTechnology')}</h2>
      </div>
      
      <!-- 3 Column Layout -->
      <div class="grid grid-cols-3 gap-8 bg-white p-8 rounded-lg shadow">
        
        <!-- Column 1: Công Nghệ -->
        <div>
          <h3 class="text-sm font-bold text-gray-800 mb-6 pb-3 border-b-2 border-orange-500">${t('breakthoughTechnology')}</h3>
          <div class="flex justify-center">
            <img src="/images/xanh 2.drawio.png" alt="Công Nghệ" class="w-full h-auto" />
          </div>
        </div>
        
        <!-- Column 2: Lò Nhiệt Hoá -->
        <div>
          <h3 class="text-sm font-bold text-gray-800 mb-6 pb-3 border-b-2 border-orange-500">${t('furnace')}</h3>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• xxx</li>
            <li>• xxx</li>
            <li>• xxx</li>
            <li>• xxx</li>
            <li>• xxx</li>
          </ul>
        </div>
        
        <!-- Column 3: Lợi Thế Cạnh Tranh -->
        <div>
          <h3 class="text-sm font-bold text-gray-800 mb-6 pb-3 border-b-2 border-orange-500">${t('differences')}</h3>
          <div class="overflow-x-auto text-xs">
            <table class="w-full border-collapse">
              <thead>
                <tr>
                  <th class="bg-gray-800 text-white border border-gray-400 p-2 text-left">${t('criteria')}</th>
                  <th class="bg-gray-500 text-white border border-gray-400 p-2 text-center">${t('ourTechnology')}</th>
                  <th class="bg-green-600 text-white border border-gray-400 p-2 text-center">${t('xanhAsian')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-2 font-semibold">${t('investmentBudget')}</td>
                  <td class="border border-gray-300 p-2 text-center bg-gray-200">${t('high')}<br/>(2-3 tỷ VND)</td>
                  <td class="border border-gray-300 p-2 text-center bg-green-100 text-green-700">${t('optimal')}<br/>(0.9 tỷ VND)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-semibold">${t('processingCost')}</td>
                  <td class="border border-gray-300 p-2 text-center bg-gray-200">${t('high')}<br/>(800K VND/tấn)</td>
                  <td class="border border-gray-300 p-2 text-center bg-green-100 text-green-700">${t('optimal')}<br/>(250K VND/tấn)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-semibold">${t('powerConsumption')}</td>
                  <td class="border border-gray-300 p-2 text-center bg-gray-200">${t('large')}<br/>(120-150 kWh/tấn)</td>
                  <td class="border border-gray-300 p-2 text-center bg-green-100 text-green-700">${t('saving')}<br/>(Syngas cấp nhiệt)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-semibold">${t('installationArea')}</td>
                  <td class="border border-gray-300 p-2 text-center bg-gray-200">${t('large')}<br/>(10-20ha)</td>
                  <td class="border border-gray-300 p-2 text-center bg-green-100 text-green-700">${t('compact')}<br/>(1ha/100 tấn)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-semibold">${t('staff')}</td>
                  <td class="border border-gray-300 p-2 text-center bg-gray-200">${t('dense')}<br/>(300 người/1000 tấn)</td>
                  <td class="border border-gray-300 p-2 text-center bg-green-100 text-green-700">${t('slim')}<br/>(15 người/200 tấn)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-semibold">${t('paybackPeriod')}</td>
                  <td class="border border-gray-300 p-2 text-center bg-gray-200">${t('slow')}<br/>(10-15 năm)</td>
                  <td class="border border-gray-300 p-2 text-center bg-green-100 text-green-700">${t('fast')}<br/>(3.5-5 năm)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-semibold">${t('furnaceTemperature')}</td>
                  <td class="border border-gray-300 p-2 text-center bg-gray-200">${t('highRisk')}<br/>(800-1000°C)</td>
                  <td class="border border-gray-300 p-2 text-center bg-green-100 text-green-700">${t('lowTemp')}<br/>(280-320°C)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-semibold">${t('emissions')}</td>
                  <td class="border border-gray-300 p-2 text-center bg-gray-200">${t('hazard')}<br/>(Cần xử lý)</td>
                  <td class="border border-gray-300 p-2 text-center bg-green-100 text-green-700">${t('noSmoke2')}<br/>(Không tro xỉ)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2 font-semibold">${t('applicationModel')}</td>
                  <td class="border border-gray-300 p-2 text-center bg-gray-200">${t('largeArea')}<br/>(>500 tấn/ngày)</td>
                  <td class="border border-gray-300 p-2 text-center bg-green-100 text-green-700">${t('flexible')}<br/>(50-200 tấn/ngày)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  `;
  return div;
}
