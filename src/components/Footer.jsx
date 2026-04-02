import { Twitter, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      padding: '4rem var(--section-padding-x)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: '0.9rem',
      marginTop: '100px',
      background: 'rgba(0,0,0,0.2)'
    }}>
      <div className="footer-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', opacity: 1 }}>
        <div style={{ position: 'relative', width: '50px', height: '50px' }}>
          <svg width="50" height="50" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gold-luxury-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBDB8F" />
                <stop offset="50%" stopColor="#E6B55E" />
                <stop offset="100%" stopColor="#8A6B2D" />
              </linearGradient>
              <filter id="bevel-footer">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
                <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="20" lightingColor="white" result="specOut">
                  <fePointLight x="-5000" y="-10000" z="20000" />
                </feSpecularLighting>
                <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litGraphic" />
              </filter>
            </defs>
            <path d="M22.5 4L40 13V32L22.5 41L5 32V13L22.5 4Z" fill="url(#gold-luxury-footer)" fillOpacity="0.05" stroke="url(#gold-luxury-footer)" strokeWidth="1.5" />
            <g filter="url(#bevel-footer)">
               <circle cx="22.5" cy="22.5" r="14" stroke="url(#gold-luxury-footer)" strokeWidth="1" opacity="0.2" />
               <path d="M16 17H29" stroke="url(#gold-luxury-footer)" strokeWidth="3" strokeLinecap="round" />
               <path d="M16 22.5H27" stroke="url(#gold-luxury-footer)" strokeWidth="3" strokeLinecap="round" />
               <path d="M16 28H29" stroke="url(#gold-luxury-footer)" strokeWidth="3" strokeLinecap="round" />
               <path d="M16 17V28" stroke="url(#gold-luxury-footer)" strokeWidth="3" strokeLinecap="round" />
            </g>
          </svg>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ 
            fontWeight: 800, 
            fontSize: '1.4rem', 
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            background: 'linear-gradient(to bottom, #FFF, #E6B55E, #8A6B2D)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            display: 'block' 
          }}>
            ELKOKOWEB
          </span>
          <span style={{ fontSize: '0.6rem', letterSpacing: '4px', opacity: 0.5, color: '#E6B55E', fontWeight: 600 }}>WEB SOLUTIONS</span>
        </div>
      </div>
      
      <div className="copyright" style={{ opacity: 0.5 }}>
        © {new Date().getFullYear()} ELKOKOWEB. All rights reserved.
      </div>

      <div className="socials" style={{ display: 'flex', gap: '2rem', opacity: 0.6 }}>
        <Twitter size={20} style={{ cursor: 'pointer' }} />
        <Github size={20} style={{ cursor: 'pointer' }} />
        <Heart size={20} style={{ color: '#E6B55E' }} />
      </div>
    </footer>
  );
};

export default Footer;
