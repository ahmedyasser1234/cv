import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const { t } = useTranslation();

  const projectItems = [
    {
      id: 'galaxy',
      img: 'https://res.cloudinary.com/dk3wwuy5d/image/upload/v1769535128/galaxy_mockup_bp6ccv.png',
      link: 'https://www.galaxyrepairuae.com/',
      tags: ['React', 'Next.js', 'Vite'],
      title: t('projects.items.galaxy.title'),
      desc: t('projects.items.galaxy.desc'),
    },
    {
      id: 'sharik',
      img: 'https://res.cloudinary.com/dabnrt77g/image/upload/v1773534913/mock_sharik_tiujs1.png',
      link: 'https://sharke1.netlify.app/',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      title: t('projects.items.sharik.title'),
      desc: t('projects.items.sharik.desc'),
    },
    {
      id: 'fustan',
      img: 'https://res.cloudinary.com/dabnrt77g/image/upload/v1773535775/FUSTAN_mjjbgl.png',
      link: 'https://fustan.cloud/',
      tags: ['E-commerce', 'Full Stack', 'Node.js'],
      title: t('projects.items.fustan.title'),
      desc: t('projects.items.fustan.desc'),
    },
    {
      id: 'shelter',
      img: 'https://res.cloudinary.com/dabnrt77g/image/upload/v1773534912/mock_2_ihpirx.png',
      link: 'https://shelterhouseofcheese.com/',
      tags: ['UI/UX', 'Branding', 'Web Design'],
      title: t('projects.items.shelter.title'),
      desc: t('projects.items.shelter.desc'),
    },
    {
      id: 'eldoksh',
      img: 'https://res.cloudinary.com/dk3wwuy5d/image/upload/v1775156965/Screenshot_2026-04-02_210913_siuauk.png',
      link: 'https://eldokshmators.netlify.app/',
      tags: ['React', 'Car Trading', 'UI/UX'],
      title: t('projects.items.eldoksh.title'),
      desc: t('projects.items.eldoksh.desc'),
    }
  ];

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" style={{ position: 'relative', padding: '100px 0', width: '100%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '0 4%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '4rem' }}>
           <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 500, letterSpacing: '-1px' }}>
             {t('projects.title')}
           </h2>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.8 }}>
              <div style={{ width: '60px', height: '1px', background: 'var(--accent-gold)' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.6 }}>Portfolio Highlights</span>
           </div>
        </div>

        <div 
          className="projects-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', 
            gap: '3rem' 
          }}
        >
           {projectItems.map((project, idx) => (
             <motion.div
               key={project.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               whileHover={{ y: -15 }}
               className="glass"
               style={{ 
                 overflow: 'hidden', 
                 display: 'flex', 
                 flexDirection: 'column', 
                 gap: '1.5rem', 
                 padding: '1.5rem',
                 borderRadius: '32px',
                 border: '1px solid rgba(255,255,255,0.05)',
                 background: 'rgba(255,255,255,0.01)',
                 boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
               }}
             >
               <div 
                 onClick={() => openLink(project.link)}
                 style={{ height: '240px', borderRadius: '22px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
               >
                  <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                     {project.tags.map(tag => (
                       <span key={tag} style={{ 
                         background: 'rgba(0,0,0,0.8)', 
                         backdropFilter: 'blur(10px)',
                         padding: '0.4rem 0.8rem', 
                         borderRadius: '12px', 
                         fontSize: '0.65rem', 
                         fontWeight: 700,
                         textTransform: 'uppercase',
                         letterSpacing: '0.5px',
                         border: '1px solid rgba(255,255,255,0.1)'
                       }}>{tag}</span>
                     ))}
                  </div>
               </div>

               <div style={{ padding: '0 0.5rem' }}>
                  <h3 className="serif" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p style={{ opacity: 0.5, lineHeight: '1.6', fontSize: '0.9rem', minHeight: '3.5rem' }}>{project.desc}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                     <button 
                       onClick={() => openLink(project.link)}
                       style={{ 
                         color: 'var(--accent-gold)', 
                         display: 'flex', 
                         alignItems: 'center', 
                         gap: '0.6rem', 
                         fontWeight: 700,
                         fontSize: '0.9rem',
                         textTransform: 'uppercase',
                         letterSpacing: '1px'
                       }}
                     >
                       {t('projects.view_project')} <ExternalLink size={18} />
                     </button>
                     <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
                        <Github size={20} />
                     </div>
                  </div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
