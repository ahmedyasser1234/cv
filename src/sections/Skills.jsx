import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, Cpu, CheckCircle2, X, Zap, ArrowRight, ArrowLeft } from 'lucide-react';
import imgCoding from '../assets/skill_coding.png';
import imgDesign from '../assets/skill_design.png';
import imgOffice from '../assets/skill_office.png';
import imgAi from '../assets/skill_ai.png';

const Skills = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedGroup, setSelectedGroup] = useState(null);

  const skillGroups = [
    {
      id: 'dev',
      icon: <Code size={30} />,
      title: isRTL ? 'البرمجة والتطوير' : 'Coding & Development',
      desc: isRTL ? 'بناء تطبيقات ويب متكاملة (Frontend/Backend) باستخدام أحدث التقنيات البرمجية.' : 'Building comprehensive web applications (Frontend/Backend) using modern coding standards.',
      details: isRTL ? 'متخصص في إنشاء بنية تحتية قوية للويب، مع التركيز على سرعة الأداء وكفاءة الكود وقابلية التوسع. نضمن لك موقعاً سريعاً، آمناً، ومتوافقاً مع كافة محركات البحث.' : 'Specializing in robust web architecture, performance optimization, and scalable code structures. We ensure your site is fast, secure, and SEO-friendly.',
      features: isRTL ? ['تطوير واجهات تفاعلية (React)', 'بناء قواعد بيانات متطورة', 'برمجة الدوال الخلفية (Node.js/PHP)', 'تأمين البيانات والحماية'] : ['Interactive UI (React)', 'Advanced Database Design', 'Backend Logic (Node/PHP)', 'Data Security & Protection'],
      skills: ['Node.js', 'React', 'PHP', 'MySQL', 'PostgreSQL', 'JavaScript'],
      image: imgCoding,
      color: '#6366f1'
    },
    {
      id: 'design',
      icon: <Palette size={30} />,
      title: isRTL ? 'برامج التصميم' : 'Design Software',
      desc: isRTL ? 'إبداع تصاميم واجهة مستخدم (UI) جذابة وبناء هويات بصرية احترافية تترك انطباعاً دائماً.' : 'Creating attractive UI designs and building professional visual identities that leave a lasting impression.',
      details: isRTL ? 'نركز على تجربة المستخدم (UX) لضمان تفاعل سلس ومنطقي. تصاميمنا ليست مجرد ألوان، بل هي استراتيجية تهدف لزيادة ثقة عملائك في علامتك التجارية.' : 'Focusing on intuitive user experiences (UX) to ensure seamless interaction. Our designs are strategy-driven to build brand trust.',
      features: isRTL ? ['تصميم شعارات مبتكرة', 'واجهات تطبيقات ومواقع', 'تحسين تجربة المستخدم', 'تصاميم سوشيال ميديا'] : ['Creative Logo Design', 'App & Web UI', 'UX Optimization', 'Social Media Graphics'],
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'UI/UX Design'],
      image: imgDesign,
      color: '#ec4899'
    },
    {
      id: 'office',
      icon: <CheckCircle2 size={30} />,
      title: isRTL ? 'برامج الأوفيس' : 'MS Office Expert',
      desc: isRTL ? 'إدارة البيانات والمستندات بخبرة كبيرة في مجموعة برامج Microsoft Office لإنجاز الأعمال بدقة.' : 'Managing data and documents with extensive expertise in the Microsoft Office suite for precision work.',
      details: isRTL ? 'خبرة عميقة في الأوفيس تمكننا من تحويل البيانات المعقدة إلى تقارير واضحة وعروض تقديمية مبهرة. نساعد المنظمات على أتمتة مهامها المكتبية وزيادة الكفاءة.' : 'Deep Office expertise allows transforming complex data into clear reports and stunning presentations. We help organizations automate office tasks efficiently.',
      features: isRTL ? ['برمجة ملفات Excel متطورة', 'كتابة وتنسيق التقارير الرسمية', 'عروض تقديمية (PowerPoint)', 'إدارة قواعد بيانات Access'] : ['Advanced Excel Automation', 'Official Report Formatting', 'Premium PPT Design', 'Access Database Mgmt'],
      skills: ['MS Excel', 'MS Word', 'MS PowerPoint', 'Data Management'],
      image: imgOffice,
      color: '#10b981'
    },
    {
      id: 'ai',
      icon: <Cpu size={30} />,
      title: isRTL ? 'أدوات الذكاء الاصطناعي' : 'AI Productivity',
      desc: isRTL ? 'استخدام أحدث تقنيات الذكاء الاصطناعي لتسريع الإنتاجية وتحسين جودة الكود والعمليات.' : 'Utilizing the latest AI technologies to accelerate productivity and enhance code quality.',
      details: isRTL ? 'نستغل قوة الذكاء الاصطناعي في اختصار الوقت وتحويل الأفكار المعقدة إلى برمجيات حقيقية بسرعة فائقة. نساعدك على دمج أدوات الذكاء الاصطناعي في سير عملك اليومي.' : 'Leveraging AI power to shorten dev time and turn complex ideas into real software rapidly. We help integrate AI tools into your daily workflow.',
      features: isRTL ? ['أتمتة العمليات بالذكاء الاصطناعي', 'توليد المحتوى والأكواد', 'تحسين جودة المخرجات', 'تدريب الفريق على أدوات AI'] : ['AI Process Automation', 'Content & Code Gen', 'Output Quality Control', 'AI Tools Training'],
      skills: ['AI Assistants', 'Automation', 'Workflow Optimization'],
      image: imgAi,
      color: '#f59e0b'
    }
  ];

  return (
    <section id="skills" style={{ gap: '2rem', position: 'relative', paddingTop: '150px' }}>
      {/* Background Arc Decoration */}
      <div className="hide-mobile" style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        border: '1px solid var(--accent-gold-glow)',
        borderRadius: '50%',
        top: '50px',
        [isRTL ? 'right' : 'left']: '-50px',
        opacity: 0.1,
        zIndex: 0
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '3rem', zIndex: 1, textAlign: isRTL ? 'right' : 'left' }} className="text-center-mobile">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="serif" 
           style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: 500, letterSpacing: '-1px' }}
         >
           {t('skills.title')}
         </motion.h2>
         <motion.div 
           initial={{ opacity: 0, width: 0 }}
           whileInView={{ opacity: 1, width: 'auto' }}
           viewport={{ once: true }}
           style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.8, justifyContent: isRTL ? 'flex-start' : 'flex-start' }} 
           className="flex-center-mobile"
         >
            <div style={{ width: '60px', height: '1px', background: 'var(--accent-gold)' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>2..Services</span>
         </motion.div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', 
        gap: '2rem', 
        zIndex: 1, 
        direction: isRTL ? 'rtl' : 'ltr' 
      }}>
         {skillGroups.map((group, idx) => (
           <motion.div
             key={group.id}
             layoutId={`card-${group.id}`}
             whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
             className="glass"
             style={{ 
               padding: 'clamp(1.5rem, 4vw, 2.5rem)', 
               display: 'flex', 
               flexDirection: 'column', 
               border: '1px solid var(--glass-border)',
               borderRadius: '30px',
               position: 'relative',
               overflow: 'hidden',
               background: 'var(--glass-bg)',
               textAlign: isRTL ? 'right' : 'left',
               minHeight: '480px'
             }}
           >
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }} className="flex-center-mobile">
                    <motion.div 
                      layoutId={`img-${group.id}`}
                      style={{ width: '70px', height: '90px', borderRadius: '15px', background: 'rgba(255,255,255,0.02)', overflow: 'hidden', flexShrink: 0 }}
                    >
                       <img src={group.image} alt={group.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
                    </motion.div>
                    <div style={{ flex: 1 }}>
                       <motion.div layoutId={`icon-${group.id}`} style={{ color: 'var(--accent-gold)', marginBottom: '0.8rem' }}>{group.icon}</motion.div>
                       <motion.h3 layoutId={`title-${group.id}`} className="serif" style={{ fontSize: '1.6rem', marginBottom: '0.4rem', color: '#fff' }}>{group.title}</motion.h3>
                       <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: '1.8' }}>
                         {group.desc}
                       </p>
                    </div>
                 </div>
                 
                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }} className="flex-center-mobile">
                    {group.skills.map(s => (
                       <span key={s} style={{ 
                         fontSize: '0.75rem', 
                         padding: '0.4rem 0.8rem', 
                         borderRadius: '15px', 
                         background: 'rgba(255,255,255,0.05)',
                         border: '1px solid rgba(255,255,255,0.03)',
                         opacity: 0.8
                       }}>{s}</span>
                    ))}
                 </div>
              </div>

              <button 
                onClick={() => setSelectedGroup(group)}
                className="glass-btn" 
                style={{ 
                  padding: '1rem 2rem', 
                  borderRadius: '16px', 
                  fontSize: '0.9rem', 
                  fontWeight: 800,
                  alignSelf: isRTL ? 'flex-start' : 'flex-start',
                  marginTop: '1.5rem',
                  border: '1px solid var(--accent-gold)',
                  color: 'var(--accent-gold)',
                  cursor: 'pointer',
                  width: 'fit-content',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                {isRTL ? 'اقرأ المزيد' : 'Learn More'}
                {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </button>
           </motion.div>
         ))}
      </div>

      {/* COOL FULL-SECTION ANIMATED MODAL */}
      <AnimatePresence>
        {selectedGroup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            style={{ 
              position: 'fixed', 
              inset: 0, 
              zIndex: 2000, 
              background: 'rgba(5,5,5,0.95)', 
              backdropFilter: 'blur(30px) saturate(150%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(10px, 5vw, 40px)'
            }}
            onClick={() => setSelectedGroup(null)}
          >
             <motion.div 
               layoutId={`card-${selectedGroup.id}`}
               className="glass"
               style={{ 
                 width: '100%', 
                 maxWidth: '900px', 
                 maxHeight: '90vh',
                 background: '#0a0a0a', 
                 border: '1px solid rgba(230, 181, 94, 0.3)', 
                 borderRadius: '40px',
                 overflowY: 'auto',
                 boxShadow: '0 50px 150px rgba(0,0,0,0.9)',
                 position: 'relative',
                 scrollbarWidth: 'none'
               }}
               onClick={(e) => e.stopPropagation()}
             >
                {/* Close Button - STICKY */}
                <button 
                  onClick={() => setSelectedGroup(null)}
                  className="modal-close"
                  style={{ 
                    position: 'sticky', 
                    top: '20px', 
                    [isRTL ? 'left' : 'right']: '20px', 
                    zIndex: 100,
                    float: isRTL ? 'left' : 'right',
                    background: 'rgba(0,0,0,0.5)', 
                    border: '1px solid rgba(255,255,255,0.2)', 
                    borderRadius: '50%', 
                    width: '45px', 
                    height: '45px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: '#fff', 
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
                  }}
                >
                  <X size={20} />
                </button>

                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', marginTop: '-45px' }}>
                   {/* Header Detail Visual */}
                   <div style={{ height: 'clamp(200px, 40vh, 350px)', position: 'relative', flexShrink: 0 }}>
                      <motion.img 
                        layoutId={`img-${selectedGroup.id}`}
                        src={selectedGroup.image} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} 
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0a, transparent 70%)' }} />
                      
                      <div style={{ position: 'absolute', bottom: '30px', [isRTL ? 'right' : 'left']: '30px' }}>
                         <motion.div layoutId={`icon-${selectedGroup.id}`} style={{ color: 'var(--accent-gold)', marginBottom: '0.8rem' }}>
                            {selectedGroup.icon}
                         </motion.div>
                         <motion.h2 layoutId={`title-${selectedGroup.id}`} className="serif" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', lineHeight: '1' }}>
                            {selectedGroup.title}
                         </motion.h2>
                      </div>
                   </div>

                   {/* Body Content */}
                   <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', textAlign: isRTL ? 'right' : 'left', direction: isRTL ? 'rtl' : 'ltr' }}>
                      <section style={{ marginBottom: '3rem' }}>
                         <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Box size={14} /> {isRTL ? 'نبذة عن الخدمة' : 'About the Service'}
                         </h4>
                         <motion.p 
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.2 }}
                           style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)', opacity: 0.9, lineHeight: '2', color: '#eee', fontWeight: 400 }}
                         >
                           {selectedGroup.details}
                         </motion.p>
                      </section>
                      
                      <section style={{ marginBottom: '3rem' }}>
                         <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Layers size={14} /> {isRTL ? 'ما الذي أقدمه لك في هذا المجال؟' : 'What I Offer in this Field'}
                         </h4>
                         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
                            {selectedGroup.features.map((feature, i) => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'rgba(255,255,255,0.02)', padding: '1.2rem', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}
                              >
                                 <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(230, 181, 94, 0.1)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                                    <Zap size={16} color="var(--accent-gold)" />
                                 </div>
                                 <span style={{ fontSize: '1rem', fontWeight: 600, opacity: 0.95 }}>{feature}</span>
                              </motion.div>
                            ))}
                         </div>
                      </section>

                      {/* Technique Tags */}
                      <section style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2.5rem' }}>
                         <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <externalLink size={14} /> {isRTL ? 'البرامج والتقنيات المستخدمة' : 'Technologies & Tools Used'}
                         </h4>
                         <motion.div 
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.6 }}
                           style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}
                         >
                            {selectedGroup.skills.map(s => (
                              <span key={s} className="glass" style={{ padding: '0.7rem 1.4rem', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 800, color: '#fff', border: '1px solid rgba(255, 230, 150, 0.1)' }}>{s}</span>
                            ))}
                         </motion.div>
                      </section>
                   </div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .modal-overlay::-webkit-scrollbar { display: none; }
        .glass-btn:hover { background: var(--accent-gold) !important; color: #000 !important; }
        .modal-close:hover { background: var(--accent-gold) !important; color: #000 !important; transform: scale(1.1); }
      `}</style>
    </section>
  );
};

export default Skills;
