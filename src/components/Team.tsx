import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const team = [
    {
      name: 'xxx',
      role: 'xxx',
      bio: 'xxx',
      avatar: '👨‍💼',
    },
    {
      name: 'xxx',
      role: 'xxx',
      bio: 'xxx',
      avatar: '👩‍💻',
    },
    {
      name: 'xxx',
      role: 'xxx',
      bio: 'xxx',
      avatar: '👨‍🔧',
    },
    {
      name: 'xxx',
      role: 'xxx',
      bio: 'xxx',
      avatar: '👩‍🎨',
    },
  ];

  return (
    <div id="team" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-5 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-5 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Đội ngũ của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Những chuyên gia tài năng và tận tâm, luôn sẵn sàng mang lại giá trị tốt nhất cho bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={member.name}
              className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border-2 border-emerald-100 text-center shadow-md hover:shadow-2xl group hover:scale-110 transition-all duration-300 hover:-translate-y-4"
            >
              <div className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{member.avatar}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">{member.name}</h3>
              <p className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4 h-16 overflow-hidden group-hover:text-gray-800 transition-colors">{member.bio}</p>
              <div className="flex justify-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition hover:scale-125 transform">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition hover:scale-125 transform">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition hover:scale-125 transform">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
