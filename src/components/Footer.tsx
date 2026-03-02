import { Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950 pt-32 pb-12 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-4xl md:text-6xl mb-8">Let's create <br />something <span className="italic">eternal</span>.</h2>
            <p className="text-white/40 max-w-sm font-light">Available for international assignments, exhibitions, and fine art prints.</p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8 font-bold">Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="mailto:hello@natura.com" className="hover:text-white transition-colors">hello@natura.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a></li>
              <li className="text-white/40 pt-4">Based in Zurich, Switzerland</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8 font-bold">Social</h4>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">© 2024 Natura Photography Portfolio</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
