// Team Section Component
import { t } from './translations.js';

export function Team() {
  const div = document.createElement('div');
  div.id = 'team';
  div.className = 'py-20 bg-white';
  div.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16">${t('team')}</h2>
      <div class="grid md:grid-cols-4 gap-8">
        ${[
          { emoji: '👨‍💼', name: 'Nguyễn Văn A', roleKey: 'ceoFounder' },
          { emoji: '👩‍💻', name: 'Trần Thị B', roleKey: 'cto' },
          { emoji: '👨‍🔧', name: 'Lê Văn C', roleKey: 'leadDeveloper' },
          { emoji: '👩‍🎨', name: 'Phạm Thị D', roleKey: 'designLead' }
        ].map(member => `
          <div class="border-2 border-green-300 p-6 rounded-2xl text-center hover:bg-green-50">
            <div class="text-6xl mb-4">${member.emoji}</div>
            <h3 class="font-bold mb-1 text-green-900">${member.name}</h3>
            <p class="text-sm text-green-600">${t(member.roleKey)}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  return div;
}
