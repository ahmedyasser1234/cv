import { useTranslation } from 'react-i18next';
import { Sun, Moon, Globe, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ toggleTheme, theme }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.skills'), href: '#skills' },
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '0.8rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '94%',
      zIndex: 1000,
      padding: '0.6rem 1.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', flexShrink: 1, minWidth: 0 }}>
        <div className="logo-icon-container" style={{ position: 'relative', flexShrink: 0 }}>
          <svg className="nav-logo-svg" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}>
            <defs>
              <linearGradient id="gold-luxury" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBDB8F" />
                <stop offset="50%" stopColor="#E6B55E" />
                <stop offset="100%" stopColor="#8A6B2D" />
              </linearGradient>
              <filter id="bevel">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
                <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="20" lightingColor="white" result="specOut">
                  <fePointLight x="-5000" y="-10000" z="20000" />
                </feSpecularLighting>
                <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litGraphic" />
              </filter>
            </defs>

            <path d="M22.5 4L40 13V32L22.5 41L5 32V13L22.5 4Z" fill="url(#gold-luxury)" fillOpacity="0.05" stroke="url(#gold-luxury)" strokeWidth="1.5" />
            
            <g filter="url(#bevel)">
               <circle cx="22.5" cy="22.5" r="14" stroke="url(#gold-luxury)" strokeWidth="1" opacity="0.2" />
               <path d="M16 17H29" stroke="url(#gold-luxury)" strokeWidth="3" strokeLinecap="round" />
               <path d="M16 22.5H27" stroke="url(#gold-luxury)" strokeWidth="3" strokeLinecap="round" />
               <path d="M16 28H29" stroke="url(#gold-luxury)" strokeWidth="3" strokeLinecap="round" />
               <path d="M16 17V28" stroke="url(#gold-luxury)" strokeWidth="3" strokeLinecap="round" />
            </g>
          </svg>
          <div className="logo-glow" style={{ position: 'absolute', inset: '8px', background: '#E6B55E', filter: 'blur(15px)', opacity: 0.15, zIndex: -1 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', overflow: 'hidden' }}>
          <span className="logo-text" style={{ 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            letterSpacing: '1px', 
            fontFamily: 'var(--font-en-serif)',
            background: 'linear-gradient(to bottom, #FFF, #E6B55E, #8A6B2D)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
            whiteSpace: 'nowrap'
          }}>
            ELKOKOWEB
          </span>
          <span className="logo-subtext" style={{ fontSize: '0.5rem', letterSpacing: '2px', opacity: 0.6, textTransform: 'uppercase', fontWeight: 600, color: '#E6B55E' }}>
            CREATIVE SOLUTIONS
          </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-only">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8 }}>{link.name}</a>
          </li>
        ))}
      </ul>

      <div className="actions" style={{ display: 'flex', gap: 'clamp(0.5rem, 2vw, 1.5rem)', alignItems: 'center', flexShrink: 0 }}>
        <button onClick={toggleLanguage} style={{ opacity: 0.8, display: 'flex', alignItems: 'center' }}>
          <Globe size={18} />
          <span style={{ marginLeft: '4px', fontSize: '0.7rem', fontWeight: 600 }} className="hide-mobile-small">
            {i18n.language === 'ar' ? 'EN' : 'AR'}
          </span>
        </button>
        <button style={{ opacity: 0.8 }} title="Search" className="hide-mobile-small">
          <Search size={18} />
        </button>
        <button className="mobile-only menu-btn" onClick={() => setIsOpen(!isOpen)} style={{ padding: '4px' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '110%',
              left: 0,
              right: 0,
              background: 'rgba(0,0,0,0.95)',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              textAlign: 'center',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500 }}>{link.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-logo-svg { width: 45px; height: 45px; }
        .logo-text { font-size: 1.4rem; }
        
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .nav-logo-svg { width: 32px; height: 32px; }
          .logo-text { font-size: 1rem !important; }
          .logo-subtext { display: none; }
          .logo-icon-container { width: 32px; height: 32px; }
        }
        
        @media (max-width: 480px) {
          .hide-mobile-small { display: none !important; }
          .actions { gap: 0.8rem !important; }
        }

        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
