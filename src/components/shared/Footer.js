import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SocialIcon = ({ icon: Icon, url, tooltip }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#A367B1] hover:scale-110 transition-all duration-300"
    title={tooltip}
  >
    <Icon size={20} />
  </a>
);

function Footer() {
  const [jakartaTime, setJakartaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const gmt7Time = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
      const timeString = gmt7Time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      setJakartaTime(timeString);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#1a1a1a] border-t border-white/10 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Raihan.</div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-gray-400 text-sm">
              <span>lraihan@hackermail.com</span>
              <span>Jakarta, {jakartaTime}</span>
            </div>
            <div className="flex items-center space-x-6">
              <SocialIcon icon={Github} url="https://github.com/lraihan" tooltip="GitHub" />
              <SocialIcon icon={Linkedin} url="https://www.linkedin.com/in/raihan-fadli-dev/" tooltip="LinkedIn" />
              <SocialIcon icon={Instagram} url="https://www.instagram.com/locio_raihan/" tooltip="Instagram" />
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-8 flex justify-center">
            <img src="/assets/images/logo.png" alt="Logo" className="h-12" style={{ filter: 'brightness(0) invert(0.8)'}} />
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
export default Footer;