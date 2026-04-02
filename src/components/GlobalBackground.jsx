import { motion } from 'framer-motion';

const GlobalBackground = () => {
  const symbols = [
    // Coding
    { text: '{ }', top: '5%', left: '10%', size: '3rem', color: 'var(--accent-gold)', delay: 0 },
    { text: '</>', top: '15%', right: '15%', size: '2.5rem', color: 'var(--accent-gold)', delay: 2 },
    { text: 'const', top: '35%', left: '5%', size: '1.5rem', color: 'var(--accent-gold)', delay: 4 },
    { text: 'await', top: '55%', right: '10%', size: '1.8rem', color: 'var(--accent-gold)', delay: 1 },
    { text: '() =>', top: '75%', left: '15%', size: '2rem', color: 'var(--accent-gold)', delay: 3 },
    { text: 'Node.js', top: '90%', right: '5%', size: '1.2rem', color: 'var(--accent-gold)', delay: 5 },
    
    // Office
    { text: 'W', top: '10%', right: '25%', size: '4rem', color: '#2b579a', delay: 2 },
    { text: 'X', top: '45%', left: '20%', size: '4.5rem', color: '#217346', delay: 4 },
    { text: 'P', top: '65%', right: '20%', size: '4rem', color: '#d24726', delay: 1 },
    
    // Design
    { text: 'Figma', top: '25%', left: '25%', size: '1.25rem', color: 'var(--accent-gold)', delay: 3 },
    { text: 'Layers', top: '80%', right: '25%', size: '1.1rem', color: 'var(--accent-gold)', delay: 6 },
  ];

  return (
    <div className="global-bg-layer" style={{
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      pointerEvents: 'none',
      overflow: 'hidden',
      opacity: 0.12 /* Increased from 0.05 */
    }}>
      {symbols.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.4, 1, 0.4], /* Increased visibility */
            y: [0, -40, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 10 + i * 2, 
            repeat: Infinity, 
            delay: s.delay,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: s.top,
            left: s.left,
            right: s.right,
            fontSize: s.size,
            color: s.color,
            fontWeight: 800,
            fontFamily: 'monospace',
            filter: 'blur(0.2px)' /* Reduced blur for more clarity */
          }}
        >
          {s.text}
        </motion.div>
      ))}

      {/* Design Curves (SVG paths) spread across the height */}
      <svg style={{ position: 'absolute', top: '20%', left: 0, width: '100%', height: '100%', opacity: 0.4 }} viewBox="0 0 1440 1000">
        <motion.path 
          animate={{ d: [
            "M0 100 Q 360 250, 720 100 T 1440 100",
            "M0 100 Q 360 -50, 720 100 T 1440 100",
            "M0 100 Q 360 250, 720 100 T 1440 100"
          ]}}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          d="M0 100 Q 360 250, 720 100 T 1440 100" 
          stroke="var(--accent-gold)" 
          strokeWidth="0.5" 
          fill="none" 
        />
        <motion.path 
          animate={{ d: [
            "M0 500 Q 360 350, 720 500 T 1440 500",
            "M0 500 Q 360 650, 720 500 T 1440 500",
            "M0 500 Q 360 350, 720 500 T 1440 500"
          ]}}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: 5 }}
          d="M0 500 Q 360 350, 720 500 T 1440 500" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="0.5" 
          fill="none" 
        />
      </svg>
    </div>
  );
};

export default GlobalBackground;
