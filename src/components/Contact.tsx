import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.');
  };

  return (
    <div id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hãy để lại thông tin của bạn và chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Thông tin liên hệ</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 group hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-125 transition-all">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Địa chỉ</p>
                  <p className="text-gray-300">Tòa nhà Xanh Asian, 123 Đường Năng lượng Xanh</p>
                  <p className="text-gray-300">Hà Nội, Việt Nam 100000</p>
                </div>
              </div>

              <div className="flex gap-4 group hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-125 transition-all">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Điện thoại</p>
                  <p className="text-gray-300">(+84) 123 456 7890</p>
                  <p className="text-gray-300">(+84) 123 456 7891</p>
                </div>
              </div>

              <div className="flex gap-4 group hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-125 transition-all">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300">hello@xanhasian.vn</p>
                  <p className="text-gray-300">support@xanhasian.vn</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-emerald-500/50 hover:border-teal-500/50 transition-all shadow-lg group hover:shadow-xl">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">Giờ làm việc</h4>
              <div className="space-y-2 text-gray-300">
                <p className="group-hover:text-emerald-300 transition-colors">Thứ Hai - Thứ Sáu: 8:00 - 17:00</p>
                <p className="group-hover:text-teal-300 transition-colors">Thứ Bảy: 9:00 - 13:00</p>
                <p className="group-hover:text-green-300 transition-colors">Chủ Nhật: Đóng cửa</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border-2 border-emerald-500/50 hover:border-teal-500/50 transition-all group">
            {/* Background shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  Họ và tên
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên của bạn"
                  required
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập email của bạn"
                  required
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  Điện thoại
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại của bạn"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  Tin nhắn
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nhập tin nhắn của bạn"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border-2 border-gray-600 text-white placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 rounded-lg transition shadow-lg hover:shadow-xl hover:scale-105 transform duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                ✉️ Gửi tin nhắn
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
