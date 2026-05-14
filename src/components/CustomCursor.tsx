import { useState, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const cursorX = useSpring(mousePosition.x - (isHovering ? 20 : 10), { damping: 25, stiffness: 200 });
  const cursorY = useSpring(mousePosition.y - (isHovering ? 20 : 10), { damping: 25, stiffness: 200 });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-primary-500 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2.5 : 1,
          opacity: 1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-primary-500/30 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      />
    </>
  );
}
