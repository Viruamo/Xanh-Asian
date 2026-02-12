import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-600 px-4 py-2 rounded-full mb-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Sparkles size={16} className="text-teal-600" />
              <span className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Giải pháp tiên tiến</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-lg">
              Chuyển đổi kinh doanh <br /> của bạn với công nghệ
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
              Chúng tôi cung cấp các giải pháp công nghệ hàng đầu để giúp doanh nghiệp của bạn phát triển nhanh chóng trong kỷ nguyên số.
            </p>

            <div className="flex gap-4 flex-col sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-2xl hover:scale-105 transform duration-300"
              >
                Bắt đầu ngay
                <ArrowRight size={20} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 px-8 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg hover:scale-105 transform duration-300"
              >
                Tìm hiểu thêm
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-500/50 group-hover:opacity-75 transition-opacity"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-125 transition-transform" style={{animationDelay: '1s'}}></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center animate-bounce">
                <div className="w-32 h-32 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white group-hover:scale-125 transition-transform">✦</span>
                </div>
                <p className="text-white text-xl font-bold drop-shadow-lg">Công nghệ hàng đầu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
