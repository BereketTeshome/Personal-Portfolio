import React from 'react'
import {MdVerified}  from 'react-icons/md'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>HTML/CSS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>

          </div>
        </div>

        {/* End of Frontend */}

        <div className="experience__backend">

          <h3>Backend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Express</h4>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon'/>
              <div>
                <h4>Rest API</h4>
              </div>
            </article> 

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience