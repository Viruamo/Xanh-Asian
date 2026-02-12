import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="group">
            <div className="flex items-center gap-2 mb-4 hover:scale-110 transition-transform duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:-rotate-12 transition-all">
                <span className="text-white font-bold text-lg">✦</span>
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Xanh Asian</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Công nghệ năng lượng xanh cho tương lai bền vững.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-emerald-400 hover:scale-125 transition-all duration-300 transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 hover:scale-125 transition-all duration-300 transform">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 hover:scale-125 transition-all duration-300 transform">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 hover:scale-125 transition-all duration-300 transform">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-emerald-400 hover:translate-x-2 transition-all inline-block">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-400 hover:translate-x-2 transition-all inline-block">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-emerald-400 hover:translate-x-2 transition-all inline-block">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-emerald-400 hover:translate-x-2 transition-all inline-block">
                  Đội ngũ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-400 hover:translate-x-2 transition-all inline-block">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">Dịch vụ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 hover:translate-x-2 transition-all inline-block">
                  xxx
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 hover:translate-x-2 transition-all inline-block">
                  xxx
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 hover:translate-x-2 transition-all inline-block">
                  xxx
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 hover:translate-x-2 transition-all inline-block">
                  xxx
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 hover:translate-x-2 transition-all inline-block">
                  xxx
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">📮 Đăng ký bản tin</h4>
            <p className="text-gray-400 text-sm mb-4">
              📰 Nhận những tin tức mới nhất từ chúng tôi.
            </p>
            <div className="flex gap-2 group">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all group-hover:border-blue-500"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded font-bold transition shadow-lg hover:shadow-xl hover:scale-105 transform duration-300">
                ✉️
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
              <p>&copy; 2024 Xanh Asian. All rights reserved. | <a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a> | <a href="#" className="hover:text-emerald-400 transition">Terms of Service</a></p>
            </div>
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-br from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-lg transition shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1 transform duration-300"
              title="Lên đầu trang"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
