import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import techVisual from '../assets/about_tech.png';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const highlights = [
    t('about.highlights.fullstack'),
    t('about.highlights.backend'),
    t('about.highlights.ai'),
    t('about.highlights.problem_solving')
  ];

  return (
    <section id="about" className="about-container" style={{
      display: 'flex',
      flexDirection: isRTL ? 'row' : 'row-reverse',
      gap: '5rem',
      alignItems: 'center',
      minHeight: '80vh',
      paddingTop: '150px',
      direction: 'ltr'
    }}>
      {/* TEXT CONTENT */}
      <div className="about-text" style={{ 
        flex: 1, 
        textAlign: isRTL ? 'right' : 'left',
        direction: isRTL ? 'rtl' : 'ltr'
      }}>
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
             <h2 className="serif" style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: 500, letterSpacing: '-1px' }}>
               {t('about.title')}
             </h2>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.7 }} className="flex-center-mobile">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                   <div style={{ width: 'clamp(60px, 10vw, 120px)', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                   <div style={{ marginLeft: '-3px', borderLeft: '4px solid rgba(255,255,255,0.2)', borderTop: '4px solid transparent', borderBottom: '4px solid transparent' }} />
                </div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>1..About</span>
             </div>
          </div>

          <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', lineHeight: '2', opacity: 0.8, marginBottom: '3rem', maxWidth: '600px' }} className="text-center-mobile">
            {t('about.bio')}
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.5rem',
            textAlign: isRTL ? 'right' : 'left',
            marginBottom: '4rem'
          }} className="highlights-grid">
            {highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="flex-center-mobile">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
                <span style={{ fontSize: '1rem', fontWeight: 500, opacity: 0.9 }}>{h}</span>
              </div>
            ))}
          </div>

          {/* LANGUAGES SECTION */}
          <div className="glass" style={{ 
            padding: '2rem', 
            borderRadius: '24px', 
            maxWidth: '500px', 
            border: '1px solid rgba(255, 230, 150, 0.05)',
            background: 'rgba(255, 255, 255, 0.01)'
          }}>
             <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>
                {t('languages.title')}
             </h4>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Arabic */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                      <span style={{ fontWeight: 600 }}>{t('languages.arabic')}</span>
                      <span style={{ opacity: 0.6 }}>{t('languages.arabic_level')}</span>
                   </div>
                   <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{ height: '100%', background: 'var(--accent-gold)' }} 
                      />
                   </div>
                </div>
                {/* English */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                      <span style={{ fontWeight: 600 }}>{t('languages.english')}</span>
                      <span style={{ opacity: 0.6 }}>{t('languages.english_level')}</span>
                   </div>
                   <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '65%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                        style={{ height: '100%', background: 'var(--accent-gold)' }} 
                      />
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>

      {/* TECH VISUAL IMAGE */}
      <div className="about-visual" style={{ 
        flex: 1,
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
           style={{ 
             width: '100%', 
             maxWidth: '500px',
             height: 'min(550px, 60vh)', 
             borderRadius: '24px', 
             overflow: 'hidden', 
             position: 'relative',
             border: '1px solid rgba(255, 255, 255, 0.05)',
             boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)'
           }}
         >
           <img src={techVisual} alt="Coding & Design Visualization" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
           <div style={{ 
             position: 'absolute', 
             inset: 0, 
             background: 'linear-gradient(to bottom, transparent 40%, #0a0a0a 100%)' 
           }} />
         </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
           .about-container { flex-direction: column-reverse !important; gap: 4rem !important; text-align: center !important; }
           .about-text { width: 100%; padding: 0 5%; }
           .about-visual { width: 100%; order: 1; margin-bottom: 2rem; }
           .highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
