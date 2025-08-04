import React from 'react';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import TimelineTile from './TimelineTile';

const events = [
    { year: 2021, title: 'Started University', description: 'Began my computer science degree, diving deep into the fundamentals of software engineering and algorithms.', icon: GraduationCap, company: 'KBTCOE', location: 'Nashik' },
    { year: 2023, title: 'Honours Degree', description: 'To further my passion for solving complex problems, I pursued an Honours degree in Artificial Intelligence and Machine Learning.', icon: Code, company: 'KBTCOE', location: 'Nashik' },
    { year: 2024, title: 'First Internship', description: 'Joined a startup as a backend intern. Gained hands-on experience with Nestjs and modern web development practices.', icon: Briefcase, company: 'Weoto Technologies', location: 'Nashik' },
];

function TimelineStrip() {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/20" />
      
      <div className="relative flex flex-col gap-y-12 md:gap-y-16">
        {events.map((event, index) => (
          <TimelineTile 
            key={index} 
            event={event} 
            index={index} 
            delay={0.2 * (index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
export default TimelineStrip;