import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Copy, Check } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- POPUP STATE ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // --- POPUP CONFIGURATION ---
  const phoneNumberDisplay = "+1 (839) 274-9946";
  const phoneNumberLink = "tel:+18392749946";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${phoneNumberLink}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumberDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#expertise", label: "Expertise" },
    { href: "#ventures", label: "Ventures" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/60 backdrop-blur-xl border-b border-white/10 supports-[backdrop-filter]:bg-background/60"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-20">
            <a href="#" className="text-xl font-bold text-foreground">
              FA<span className="text-primary">.</span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary py-2.5 px-6 text-sm shadow-lg shadow-primary/20"
                >
                  Get in Touch
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden absolute top-20 left-4 right-4 bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden"
            >
              <ul className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg text-muted-foreground hover:text-foreground hover:bg-black/5 transition-all font-medium p-3 rounded-xl"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="btn-primary w-full text-center shadow-lg shadow-primary/20"
                  >
                    Get in Touch
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* --- POPUP MODAL (OPTIMIZED) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Reduced backdrop blur slightly for performance, still looks glassy
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              // Switched to "easeOut" (Tween) for snappy performance without lag
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-8 max-w-sm w-full shadow-2xl shadow-blue-500/10 relative text-center overflow-hidden ring-1 ring-white/40"
            >
              {/* Reflective Shine */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 via-blue-50/10 to-transparent -z-0 pointer-events-none" />

              {/* Close Icon - FIXED: Increased Z-Index to 50 */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 bg-white/50 backdrop-blur-sm border border-white/60 rounded-full hover:bg-white/80 transition-all z-50 cursor-pointer active:scale-95 group"
              >
                {/* Added pointer-events-none to SVG to prevent click stealing */}
                <X className="w-5 h-5 text-slate-600 group-hover:text-slate-900 pointer-events-none" />
              </button>

              <h3 className="text-3xl font-bold text-slate-800 mb-2 relative z-10 tracking-tight">Contact Fahad</h3>
              <p className="text-slate-500 font-medium text-sm mb-8 relative z-10">Scan or click to call directly</p>

              {/* QR Code */}
              <div className="bg-white/40 backdrop-blur-md p-4 border border-white/60 rounded-3xl inline-block mb-8 shadow-sm relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                 <img src={qrCodeUrl} alt="Scan to Call" className="w-44 h-44 relative z-10 mix-blend-multiply" />
              </div>

              {/* Phone Number Display */}
              <div className="bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl p-4 flex items-center justify-between gap-3 mb-6 group hover:bg-white/70 transition-all">
                <div className="text-left pl-2">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Phone Number</p>
                  <a href={phoneNumberLink} className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                    {phoneNumberDisplay}
                  </a>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-3 bg-white/60 border border-white/80 rounded-xl hover:bg-white hover:scale-105 hover:shadow-sm transition-all active:scale-95"
                >
                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-slate-600" />}
                </button>
              </div>

              {/* Call Button */}
              <a
                href={phoneNumberLink}
                className="flex items-center justify-center gap-2 w-full bg-primary/90 hover:bg-primary backdrop-blur-sm text-white font-bold py-4 rounded-2xl active:scale-95 transition-all shadow-lg shadow-primary/25 text-lg"
              >
                <Phone className="w-5 h-5" />
                Place Direct Call
              </a>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
