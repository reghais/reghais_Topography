import React from 'react';
import Hero from '../components/Hero';
import CourseOverview from '../components/CourseOverview';

export default function HomePage({ setActiveTab }) {
  return (
    <div className="space-y-0">
      <Hero setActiveTab={setActiveTab} />
      <CourseOverview setActiveTab={setActiveTab} />
    </div>
  );
}
