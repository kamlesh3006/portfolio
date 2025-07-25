import React from 'react';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import TimelineTile from './TimelineTile';

const events = [
    { year: 2021, title: 'Started University', description: 'Began my computer science degree, diving deep into the fundamentals of software engineering and algorithms.', icon: GraduationCap, company: 'KBTCOE', location: 'Nashik' },
    { year: 2023, title: 'Honours Degree', description: 'To further my passion for solving complex problems, I pursued an Honours degree in Artificial Intelligence and Machine Learning,', icon: Code, company: 'KBTCOE', location: 'Nashik' },
    { year: 2024, title: 'First Internship', description: 'Joined a startup as a backend intern. Gained hands-on experience with Nestjs and modern web development practices.', icon: Briefcase, company: 'Weoto Technologies', location: 'Nashik' },
];

function TimelineStrip({ scrollContainerRef }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      {/* The center line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/10" />
      
      <div className="relative flex flex-col gap-12">
        {events.map((event, index) => (
          <TimelineTile 
            key={index} 
            event={event} 
            index={index} 
            scrollContainerRef={scrollContainerRef}
          />
        ))}
      </div>
    </div>
  );
}
export default TimelineStrip;