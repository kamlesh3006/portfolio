import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import logo from '../../assets/logo.png';
// --- STEP 1: VERIFY YOUR FILE LOCATION ---
// 1. Make sure you have a folder named `assets` inside your `public` folder.
// 2. Make sure your `logo.png` file is inside that `assets` folder.
//
// Your folder structure should look like this:
// ├── public/
// │   ├── assets/
// │   │   └── logo.png  <-- YOUR LOGO MUST BE HERE
// ├── src/
// ...etc.

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
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const indianTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const timeString = indianTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      setLocalTime(timeString);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#1a1a1a] border-t border-white/10 py-8 px-4 md:px-8 font-nunito text-sm">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div className="text-gray-400">&copy; {new Date().getFullYear()} Kamlesh.</div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-48 text-gray-400">
              <span>kamleshkhatod30@gmail.com</span>
              <span>Nashik, {localTime}</span>
            </div>
            <div className="flex items-center space-x-6">
              <SocialIcon icon={Github} url="https://github.com/kamlesh3006" tooltip="GitHub" />
              <SocialIcon icon={Linkedin} url="https://www.linkedin.com/in/kamlesh-khatod/" tooltip="LinkedIn" />
              <SocialIcon icon={Instagram} url="https://www.instagram.com/_kamlesh_khatod_/" tooltip="Instagram" />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-64" 
            />
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
export default Footer;
