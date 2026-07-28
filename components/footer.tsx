import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1E1E22]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white text-lg font-semibold">
            Kodex Byte
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="text-white/40 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-white/40 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-white/40 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub" className="text-white/30 hover:text-white transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="text-white/30 hover:text-white transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/30 hover:text-white transition-colors">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-white/20">
          &copy; {new Date().getFullYear()} Kodex Byte
        </div>
      </div>
    </footer>
  );
}
