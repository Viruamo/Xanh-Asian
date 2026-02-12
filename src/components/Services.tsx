import React from 'react';
import { Code2, Smartphone, Cloud, BarChart3, Lock, Headphones } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: 'xxx',
      description: 'xxx',
    },
    {
      icon: Smartphone,
      title: 'xxx',
      description: 'xxx',
    },
    {
      icon: Cloud,
      title: 'xxx',
      description: 'xxx',
    },
    {
      icon: BarChart3,
      title: 'xxx',
      description: 'xxx',
    },
    {
      icon: Lock,
      title: 'xxx',
      description: 'xxx',
    },
    {
      icon: Headphones,
      title: 'xxx',
      description: 'xxx',
    },
  ];

  return (
    <div id="services" className="py-20 bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp một loạt các dịch vụ công nghệ toàn diện để đáp ứng nhu cầu của bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = ['from-emerald-400', 'from-teal-400', 'from-green-400', 'from-emerald-400', 'from-teal-400', 'from-green-400'];
            const bgColors = ['bg-emerald-100', 'bg-teal-100', 'bg-green-100', 'bg-emerald-100', 'bg-teal-100', 'bg-green-100'];
            const iconColors = ['text-emerald-600', 'text-teal-600', 'text-green-600', 'text-emerald-600', 'text-teal-600', 'text-green-600'];
            
            return (
              <div
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all group border-2 border-gray-100 hover:border-transparent hover:scale-105 hover:-translate-y-2 duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${colors[index % 6]} to-${colors[index % 6].split('-')[1]}-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all`}>
                  <Icon className={`w-7 h-7 ${iconColors[index % 6]}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
