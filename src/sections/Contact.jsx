import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const contactInfo = [
    { icon: <Mail size={20} />, label: t('contact.info.email'), value: 'ahmedyasser697@gmail.com' },
    { icon: <Phone size={20} />, label: t('contact.info.phone'), value: '01091678935' },
    { icon: <MapPin size={20} />, label: 'Egypt', value: 'Mansoura' },
  ];

  return (
    <section id="contact" style={{ paddingBottom: '150px', direction: 'ltr' }}>
      <div className="contact-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'minmax(0, 1fr) 1.5fr', 
        gap: 'clamp(2rem, 5vw, 5rem)' 
      }}>
         {/* Left: Contact Info */}
         <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 4vw, 3.2rem)' }}>
            <h2 className="serif" style={{ fontSize: 'clamp(2.2rem, 8vw, 4rem)', fontWeight: 500, textAlign: isRTL ? 'right' : 'left', direction: isRTL ? 'rtl' : 'ltr' }}>
              {t('contact.title')}
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', direction: isRTL ? 'rtl' : 'ltr' }}>
               {contactInfo.map((info, idx) => (
                 <div key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.2rem',
                    flexDirection: isRTL ? 'row' : 'row'
                 }}>
                    <div className="glass" style={{ 
                      width: 'clamp(50px, 12vw, 60px)', 
                      height: 'clamp(50px, 12vw, 60px)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: 'var(--accent-gold)',
                      flexShrink: 0,
                      borderRadius: '16px'
                    }}>
                       {info.icon}
                    </div>
                    <div style={{ 
                      textAlign: isRTL ? 'right' : 'left',
                      minWidth: 0,
                      flex: 1
                    }}>
                       <p style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', opacity: 0.5, marginBottom: '2px' }}>{info.label}</p>
                       <p style={{ 
                         fontWeight: 600, 
                         fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', 
                         wordBreak: 'break-word',
                         overflowWrap: 'break-word'
                       }}>{info.value}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Right: Contact Form */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="glass" 
           style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '32px' }}
         >
            <form style={{ display: 'grid', gap: 'clamp(1.5rem, 3vw, 2rem)', direction: isRTL ? 'rtl' : 'ltr' }}>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <div className="input-group">
                     <label>{t('contact.form.name')}</label>
                     <input type="text" className="glass" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', outline: 'none' }} />
                  </div>
                  <div className="input-group">
                     <label>{t('contact.form.email')}</label>
                     <input type="email" className="glass" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', outline: 'none' }} />
                  </div>
               </div>
               <div className="input-group">
                  <label>{t('contact.form.message')}</label>
                  <textarea rows="5" className="glass" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', outline: 'none', resize: 'none' }} />
               </div>
               <button type="submit" className="glass" style={{ 
                 padding: '1rem 2rem', 
                 display: 'flex', 
                 alignItems: 'center', 
                 justifyContent: 'center', 
                 gap: '1rem', 
                 fontWeight: 800,
                 background: 'linear-gradient(var(--accent-gold), #b3853d)',
                 color: '#000',
                 borderRadius: '16px',
                 textTransform: 'uppercase',
                 letterSpacing: isRTL ? '0' : '1px'
               }}>
                  {t('contact.form.send')} <Send size={20} />
               </button>
            </form>
         </motion.div>
      </div>

      <style>{`
        .input-group label { font-weight: 600; opacity: 0.8; font-size: 0.9rem; }
        @media (max-width: 992px) {
           .contact-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
        @media (max-width: 600px) {
           .contact-grid { padding: 0 5%; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
