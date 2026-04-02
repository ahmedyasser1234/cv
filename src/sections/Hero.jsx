import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section id="home" className="hero-container" style={{
      display: 'flex',
      flexDirection: isRTL ? 'row' : 'row-reverse',
      alignItems: 'center',
      minHeight: '100vh',
      gap: '4rem',
      position: 'relative',
      paddingTop: 'clamp(140px, 18vh, 200px)',
      direction: 'ltr'
    }}>
      {/* TEXT COLUMN */}
      <div className="hero-text" style={{ 
        flex: 1.1,
        zIndex: 10, 
        textAlign: isRTL ? 'right' : 'left',
        direction: isRTL ? 'rtl' : 'ltr'
      }}>
        <motion.div
           initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
        >
          <div style={{ position: 'relative', marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
             {/* Background Refined Heading (Role) */}
             <h1 className="serif hide-mobile" style={{ 
                fontSize: 'clamp(3rem, 8vw, 7.5rem)', 
                lineHeight: '0.8', 
                opacity: 0.02, 
                position: 'absolute', 
                top: '5rem', 
                [isRTL ? 'right' : 'left']: '-1rem',
                zIndex: -1,
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.2)',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                WebkitTextFillColor: 'transparent',
                whiteSpace: 'nowrap'
             }}>
                {t('hero.title')}
             </h1>
             
             <h1 className="serif main-title" style={{ 
                fontSize: 'clamp(1.8rem, 6.5vw, 5rem)', 
                lineHeight: '1.1', 
                textTransform: 'uppercase',
                color: '#fff',
                letterSpacing: isRTL ? '0' : '-0.5px',
                zIndex: 2,
                position: 'relative',
                fontWeight: 600
             }}>
                <span style={{ 
                  display: 'block', 
                  fontSize: '0.35em', 
                  letterSpacing: isRTL ? '0' : '3px', 
                  opacity: 0.9, 
                  marginBottom: '0.8rem', 
                  color: 'var(--accent-gold)',
                  fontWeight: 500
                }}>
                  {t('hero.name')}
                </span>
                <span className="text-gradient-gold">
                  {t('hero.title')}
                </span>
             </h1>
          </div>

          <p className="hero-summary" style={{ 
            maxWidth: '550px', 
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
            lineHeight: '1.8', 
            opacity: 0.8, 
            color: 'var(--text-secondary)',
            margin: isRTL ? '0 0 0 auto' : '0 auto 0 0'
          }}>
            {t('hero.summary')}
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '1.2rem', 
            marginTop: '2.5rem', 
            justifyContent: isRTL ? 'flex-start' : 'flex-start',
            flexWrap: 'wrap'
          }} className="flex-center-mobile">
             <button className="glass highlight-btn" style={{ 
               background: 'linear-gradient(var(--accent-gold), #b3853d)', 
               color: '#000', 
               padding: '1rem 2.8rem', 
               borderRadius: '16px', 
               fontWeight: 800,
               fontSize: '1rem',
               letterSpacing: isRTL ? '0' : '1px',
               boxShadow: '0 10px 30px rgba(230, 181, 94, 0.3)',
               border: 'none',
               cursor: 'pointer'
             }}>
               {t('hero.cta_contact')}
             </button>
             
             <button className="glass" style={{ 
               border: '1px solid var(--accent-gold)', 
               padding: '1rem 2.5rem', 
               borderRadius: '16px', 
               fontWeight: 700, 
               color: 'var(--accent-gold)',
               background: 'transparent',
               cursor: 'pointer'
             }}>
               {t('hero.cta_cv')}
             </button>
          </div>
        </motion.div>
      </div>

      {/* VISUAL COLUMN */}
      <div className="hero-visual" style={{ 
        flex: 0.8,
        position: 'relative', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        zIndex: 5
      }}>
         {/* CINEMATIC NEON LIGHT HALO */}
         <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
           className="halo-ring"
           style={{
             position: 'absolute',
             width: 'min(580px, 90vw)',
             height: 'min(580px, 90vw)',
             border: '2px solid rgba(255, 230, 150, 0.3)',
             borderRadius: '50%',
             zIndex: 3,
             pointerEvents: 'none',
             filter: 'blur(1px)',
             boxShadow: `
               0 0 25px rgba(230, 181, 94, 0.3), 
               0 0 50px rgba(230, 181, 94, 0.1),
               inset 0 0 40px rgba(230, 181, 94, 0.1)
             `
           }}
         >
           <div className="halo-point" style={{
             position: 'absolute',
             width: '30px',
             height: '30px',
             background: '#fff',
             borderRadius: '50%',
             top: '-15px',
             left: '50%',
             boxShadow: '0 0 30px #fff, 0 0 60px var(--accent-gold)',
             filter: 'blur(1px)'
           }} />
         </motion.div>

         {/* VISUAL TECH OVERLAY */}
         <div style={{ position: 'absolute', inset: -20, zIndex: 4, pointerEvents: 'none' }}>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="glass floating-element hide-mobile"
              style={{ position: 'absolute', top: '15%', left: '0', padding: '8px 12px', fontSize: '0.7rem', color: 'var(--accent-gold)' }}
            >
              <code>const App = () =&gt; &#123;</code>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="glass floating-element hide-mobile"
              style={{ position: 'absolute', top: '75%', right: '0', padding: '10px', borderRadius: '12px' }}
            >
               <div style={{ width: '15px', height: '15px', background: 'linear-gradient(45deg, #F24E1E, #A259FF)', borderRadius: '4px' }} />
            </motion.div>
         </div>

         {/* CIRCULAR PORTRAIT */}
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2 }}
           className="portrait-container"
           style={{ 
             width: 'min(540px, 85vw)', 
             height: 'min(540px, 85vw)', 
             borderRadius: '50%', 
             overflow: 'hidden', 
             position: 'relative', 
             zIndex: 2,
             boxShadow: '0 0 50px rgba(0,0,0,0.8)',
             border: '1px solid rgba(255,255,255,0.05)'
           }}
         >
           <img 
             src="/12.png" 
             alt={t('hero.name')} 
             style={{ 
               width: '100%', 
               height: '100%', 
               objectFit: 'cover',
               objectPosition: 'top center',
               filter: 'brightness(1.1)'
             }} 
           />
           <div style={{ 
             position: 'absolute', 
             inset: 0, 
             background: 'linear-gradient(to bottom, transparent 80%, rgba(0,0,0,0.8) 100%)' 
           }} />
         </motion.div>
      </div>

      <style>{`
        .text-gradient-gold {
          background: linear-gradient(135deg, #fff 0%, var(--accent-gold) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 1100px) {
           .hero-container { 
             flex-direction: column-reverse !important; 
             padding-top: 140px !important; 
             gap: 3rem !important; 
             text-align: center !important;
           }
           .hero-text { 
             flex: none !important; 
             width: 100%;
             display: flex; 
             flex-direction: column; 
             align-items: center !important; 
           }
           .hero-text div { text-align: center !important; }
           .flex-center-mobile { justify-content: center !important; }
           .hero-summary { margin: 0 auto !important; }
           .hero-visual { flex: none !important; order: 1; }
           .main-title { font-size: clamp(2.8rem, 12vw, 5rem) !important; }
        }

        @media (max-width: 480px) {
           .hero-container { padding-top: 100px !important; gap: 2.5rem !important; }
           .flex-center-mobile { flex-direction: column; width: 100%; gap: 1rem !important; }
           .highlight-btn, .glass { width: 100%; }
        }

        @media (min-width: 1101px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
