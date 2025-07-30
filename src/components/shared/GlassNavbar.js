import React, { useState } from 'react';
import useScrambleText from '../../hooks/useScrambleText';
import logo from '../../assets/logo.png';
// (Code for GlassNavbar is unchanged and remains the same as previous versions)
function NavItem({ text, index, onTap }) {
    const [isHovering, setIsHovering] = useState(false);
    const { scrambledText } = useScrambleText({ originalText: text, isHovering });
    return (
        <button
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => onTap?.(index)}
            className="px-3 py-2 text-xs text-gray-200/80 hover:text-white transition-colors duration-300 relative font-nunito tracking-normal"
        >
            {scrambledText}
            <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#A367B1] transition-all duration-300 ${isHovering ? 'w-full' : 'w-0'
                    }`}
            />
        </button>
    );
}
function GlassNavbar({ onNavigationTap }) {
    const navItems = [
        { text: 'About', index: 1 },
        { text: 'Timeline', index: 2 },
        { text: 'Works', index: 3 },
        { text: 'Contact', index: 5 },
    ];
    return (
        <nav className="fixed top-0 left-0 right-0 z-40 h-16 backdrop-blur-md bg-[#121212]/30 border-b border-white/10">
            <div className="w-full max-w-screen-2xl mx-auto h-full flex justify-between items-center px-12">
                <button onClick={() => onNavigationTap?.(0)} className="cursor-pointer">
                    <img src={logo} alt="Logo" className="h-20 text-white" style={{ filter: 'brightness(0) invert(1)' }} />
                </button>
                <div className="hidden md:flex items-center space-x-10">
                    {navItems.map((item) => (
                        <NavItem key={item.text} text={item.text} index={item.index} onTap={onNavigationTap} />
                    ))}
                </div>
                <div className="md:hidden">
                    {/* Mobile menu could be implemented here */}
                </div>
            </div>
        </nav>
    );
}
export default GlassNavbar;