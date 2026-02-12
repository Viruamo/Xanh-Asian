import React from 'react';
import { CheckCircle2, Users, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Khách hàng hài lòng', value: '500+' },
    { icon: Award, label: 'Năm kinh nghiệm', value: '10+' },
    { icon: Zap, label: 'Dự án hoàn thành', value: '1000+' },
  ];

  const features = [
    'Giải pháp tùy chỉnh theo nhu cầu',
    'Hỗ trợ kỹ thuật 24/7',
    'Công nghệ mới nhất',
    'xxxx',
  ];

  return (
    <div id="about" className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Về chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Với hơn 10 năm kinh nghiệm trong ngành công nghệ, chúng tôi cam kết mang lại giải pháp tốt nhất cho doanh nghiệp của bạn.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const colors = ['from-emerald-400 to-emerald-600', 'from-teal-400 to-teal-600', 'from-green-400 to-green-600'];
            return (
              <div key={stat.label} className={`bg-gradient-to-br ${colors[idx]} p-8 rounded-2xl border-2 border-white shadow-lg text-white text-center group hover:shadow-2xl hover:scale-110 transition-all hover:-translate-y-4 duration-300`}>
                <Icon className="w-12 h-12 mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all" />
                <p className="text-5xl font-bold mb-2 group-hover:text-6xl transition-all">{stat.value}</p>
                <p className="text-white/90 font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 rounded-3xl p-12 text-white flex flex-col justify-center shadow-2xl hover:shadow-3xl transition-all group relative overflow-hidden">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 group-hover:translate-x-96 transition-transform duration-1000"></div>
            
            <h3 className="text-3xl font-bold mb-6 relative z-10">Tại sao chọn chúng tôi?</h3>
            <ul className="space-y-4 relative z-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  <span className="text-lg font-semibold">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Sứ mệnh của chúng tôi</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Chúng tôi tin rằng công nghệ nên dễ tiếp cận và giúp ích cho mọi doanh nghiệp, từ startup nhỏ đến doanh nghiệp lớn.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Mục tiêu của chúng tôi là trở thành đối tác đáng tin cậy giúp bạn đạt được mục tiêu kinh doanh thông qua các giải pháp công nghệ sáng tạo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
