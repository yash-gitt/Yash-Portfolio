import React from 'react';
import Tittle from '../components/Tittle';
import ImageSection from '../components/ImageSection';
import SkillSection from '../components/SkillSection';
function About() {
  return (
    <div className="about">
        <Tittle title={'About Me'} span={'About Me'}/>
        <ImageSection/>
        <Tittle title={'My Skills'} span={'My Skills'}/>
        <div className="skils-container">
             <SkillSection skill={'Javascript'} progress={'60%'} width={'60%'}/>
             <SkillSection skill={'Java'} progress={'40%'} width={'40%'}/>
             <SkillSection skill={'Css3'} progress={'65%'} width={'65%'}/>
             <SkillSection skill={'Html5'} progress={'65%'} width={'65%'}/>
             <SkillSection skill={'Mysql'} progress={'60%'} width={'60%'}/>
             <SkillSection skill={'React.js'} progress={'60%'} width={'60%'}/>
             <SkillSection skill={'Web Design'} progress={'50%'} width={'50%'}/>
        </div>
    </div>
  )
}



export default About;