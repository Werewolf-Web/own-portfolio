import React from 'react'
import Navbar from '../component/navbar/Navbar'
import FooterPage from '../component/footer/FooterPage'
import MyWorkExperince from '../component/work-experince/MyWorkExperince'
import ProjectIdea from '../component/project-idea/ProjectIdea'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <MyWorkExperince/>
    <ProjectIdea/>
    <FooterPage/>
    </>
  )
}

export default HomePage