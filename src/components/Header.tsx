import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-600">Xanh Asian</div>
        
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-gray-700 hover:text-emerald-600">About</a>
          <a href="#services" className="text-gray-700 hover:text-emerald-600">Services</a>
          <a href="#team" className="text-gray-700 hover:text-emerald-600">Team</a>
          <a href="#contact" className="text-gray-700 hover:text-emerald-600">Contact</a>
        </nav>

        <button className="hidden md:block px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
          Get Started
        </button>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-3">
          <a href="#about" className="block text-gray-700 hover:text-emerald-600">About</a>
          <a href="#services" className="block text-gray-700 hover:text-emerald-600">Services</a>
          <a href="#team" className="block text-gray-700 hover:text-emerald-600">Team</a>
          <a href="#contact" className="block text-gray-700 hover:text-emerald-600">Contact</a>
          <button className="w-full px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
