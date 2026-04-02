import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Compass, BarChart3, LayoutTemplate, Calendar, Server, Database, Code2, Globe, Laptop, ShoppingBag, Palette, Brush, Briefcase, Video, Play, Monitor } from 'lucide-react';

const Experience = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const academicItems = [
    {
      id: 'uni',
      icon: <GraduationCap size={24} />,
      bgIcon: <GraduationCap size={160} />,
      title: t('experience.university_title'),
      place: t('experience.university_place'),
      desc: t('experience.university_desc'),
      category: isRTL ? 'أكاديمي' : 'Academic',
      color: '#3b82f6'
    },
    {
      id: 'php',
      icon: <Award size={24} />,
      bgIcon: <Globe size={160} />,
      title: t('experience.php_title'),
      place: t('experience.php_place'),
      desc: t('experience.php_desc'),
      category: isRTL ? 'برمجيات' : 'Software Dev',
      color: '#8b5cf6'
    },
    {
      id: 'node',
      icon: <Server size={24} />,
      bgIcon: <Code2 size={160} />,
      title: t('experience.node_title'),
      place: t('experience.node_place'),
      desc: t('experience.node_desc'),
      category: isRTL ? 'تطوير خلفي' : 'Backend Dev',
      color: '#10b981'
    }
  ];

  const professionalItems = [
    {
      id: 'aqrablik',
      icon: <Video size={24} />,
      bgIcon: <Play size={160} />,
      title: t('experience.aqrablik_title'),
      place: t('experience.aqrablik_place'),
      desc: t('experience.aqrablik_desc'),
      category: isRTL ? 'ميديا وتطوير' : 'Media & Web',
      color: '#f43f5e',
      status: 'present'
    },
    {
      id: 'erp',
      icon: <LayoutTemplate size={24} />,
      bgIcon: <Database size={160} />,
      title: t('experience.erp_title'),
      place: t('experience.erp_place'),
      desc: t('experience.erp_desc'),
      category: isRTL ? 'أنظمة أعمال' : 'Business Systems',
      color: '#f59e0b',
      status: 'completed'
    },
    {
      id: 'survey',
      icon: <Compass size={24} />,
      bgIcon: <Compass size={160} />,
      title: t('experience.surveyor_title'),
      place: t('experience.surveyor_place'),
      desc: t('experience.surveyor_desc'),
      category: isRTL ? 'مساحة طرق' : 'Road Surveying',
      color: '#4ade80',
      status: 'completed'
    },
    {
      id: 'tech_office',
      icon: <BarChart3 size={24} />,
      bgIcon: <Laptop size={160} />,
      title: t('experience.tech_office_title'),
      place: t('experience.tech_office_place'),
      desc: t('experience.tech_office_desc'),
      category: isRTL ? 'مكتب فني' : 'Technical Office',
      color: '#ec4899',
      status: 'completed'
    },
    {
      id: 'freelance_web',
      icon: <Briefcase size={24} />,
      bgIcon: <Code2 size={160} />,
      title: t('experience.freelance_web_title'),
      place: t('experience.freelance_web_place'),
      desc: t('experience.freelance_web_desc'),
      category: isRTL ? 'برمجة مستقلة' : 'Freelance Dev',
      color: '#60a5fa',
      status: 'completed'
    },
    {
      id: 'freelance_cms',
      icon: <ShoppingBag size={24} />,
      bgIcon: <LayoutTemplate size={160} />,
      title: t('experience.freelance_cms_title'),
      place: t('experience.freelance_cms_place'),
      desc: t('experience.freelance_cms_desc'),
      category: isRTL ? 'ووردبريس وشوبفاى' : 'CMS & E-commerce',
      color: '#fbbf24',
      status: 'completed'
    },
    {
      id: 'freelance_design',
      icon: <Palette size={24} />,
      bgIcon: <Brush size={160} />,
      title: t('experience.freelance_design_title'),
      place: t('experience.freelance_design_place'),
      desc: t('experience.freelance_design_desc'),
      category: isRTL ? 'هوية بصرية' : 'Creative Design',
      color: '#f87171',
      status: 'completed'
    }
  ];

  const ExperienceGrid = ({ items }) => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
      gap: '2rem', 
      position: 'relative' 
    }}>
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
          whileHover={{ y: -10 }}
          className="glass"
          style={{ 
            padding: '2rem', 
            borderRadius: '35px', 
            border: `1px solid ${item.color}20`,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            textAlign: isRTL ? 'right' : 'left',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '360px',
            direction: isRTL ? 'rtl' : 'ltr'
          }}
        >
           {/* Thematic Background Icon (Watermark) */}
           <div style={{ 
              position: 'absolute', 
              [isRTL ? 'left' : 'right']: '-20px', 
              bottom: '-20px', 
              opacity: 0.04, 
              color: item.color,
              zIndex: 0,
              transform: 'rotate(-10deg)',
              pointerEvents: 'none'
           }}>
              {item.bgIcon}
           </div>

           {/* Localized Glow Background */}
           <div style={{ position: 'absolute', top: '-50px', [isRTL ? 'left' : 'right']: '-50px', width: '200px', height: '200px', background: `${item.color}08`, filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none' }} />

           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '18px', 
                background: '#050505', 
                border: `1px solid ${item.color}50`, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: item.color,
                boxShadow: `0 0 40px ${item.color}20`,
                position: 'relative'
              }}>
                {item.icon}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ position: 'absolute', inset: -6, borderRadius: '24px', border: `1px solid ${item.color}`, opacity: 0.2 }} 
                />
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                opacity: item.status === 'present' ? 0.9 : 0.5, 
                fontSize: '0.7rem', 
                fontWeight: 800, 
                letterSpacing: '1px',
                color: item.status === 'present' ? 'var(--accent-gold)' : 'inherit'
              }}>
                 <Calendar size={13} />
                 <span>{t(`experience.status_${item.status || 'completed'}`)}</span>
              </div>
           </div>

           <div style={{ position: 'relative', zIndex: 1, flexGrow: 1 }}>
              <span style={{ 
                 fontSize: '0.65rem', 
                 fontWeight: 900, 
                 color: item.color, 
                 textTransform: 'uppercase', 
                 letterSpacing: '2px',
                 background: `${item.color}15`,
                 padding: '6px 14px',
                 borderRadius: '12px',
                 marginBottom: '15px',
                 display: 'inline-block',
                 border: `1px solid ${item.color}30`
              }}>
                 {item.category}
              </span>
              <h3 className="serif" style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>{item.title}</h3>
              <h4 style={{ color: 'var(--accent-gold)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', opacity: 0.95 }}>
                 {item.place}
              </h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: '1.9', fontWeight: 400 }}>
                 {item.desc}
              </p>
           </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 5%' }}>
        <div style={{ textAlign: isRTL ? 'right' : 'left', marginBottom: '4rem' }} className="text-center-mobile">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="serif" 
            style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', color: '#fff', marginBottom: '1rem' }}
          >
            {t('experience.title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 'auto' }}
            viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: isRTL ? 'flex-start' : 'flex-start' }} 
            className="flex-center-mobile"
          >
              <div style={{ width: '60px', height: '2px', background: 'var(--accent-gold)' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6 }}>3.. Career & Growth</span>
          </motion.div>
        </div>

        <div style={{ marginBottom: '6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', opacity: 0.9, textAlign: isRTL ? 'right' : 'left' }}>
             <div style={{ width: '4px', height: '24px', background: 'var(--accent-gold)', borderRadius: '4px' }} />
             <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', letterSpacing: '1px' }}>{t('experience.professional_subtitle')}</h3>
          </div>
          <ExperienceGrid items={professionalItems} />
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', opacity: 0.9, textAlign: isRTL ? 'right' : 'left' }}>
             <div style={{ width: '4px', height: '24px', background: '#3b82f6', borderRadius: '4px' }} />
             <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', letterSpacing: '1px' }}>{t('experience.academic_subtitle')}</h3>
          </div>
          <ExperienceGrid items={academicItems} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
