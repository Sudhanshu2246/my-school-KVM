import HeroSection from '@/components/about-us/AboutHero'
import CoreValues from '@/components/about-us/CoreValues'
import Facilities from '@/components/about-us/Facilities'
import OurFounder from '@/components/about-us/MeetFounder'
import MeetTeachers from '@/components/about-us/MeetTeachers'
import OurManager from '@/components/about-us/OurManager'
import MissionVision from '@/components/about-us/OurMission'
import PrincipalMessage from '@/components/about-us/OurPrinciple'
import SchoolJourney from '@/components/about-us/SchoolJourney'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <OurFounder />
      <OurManager />
      <MeetTeachers />
      <MissionVision />
      <SchoolJourney />
      <PrincipalMessage />
      <Facilities />
      <CoreValues />
    </div>
  )
}

export default page
