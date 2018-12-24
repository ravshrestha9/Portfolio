import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Profilepic from '../img/Profilepic.jpg'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div>
              <img
                src={Profilepic}
                alt="avatar"
                style={{height: '200px', borderRadius: '12pc'}}
                 />
            </div>

            <h2>Ravi Shrestha</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Adapting to various work cultures, identifying and resolving bottlenecks and prioritizing have been striking features of my working style. In addition to the above, I strongly believe in learning and sharing my knowledge with my colleagues. Knowledge parted is knowledge gained has been my motto in life. I am keen to learn and am sharp at identifying and solving problems.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>502 S. Main Street, Apt D, Kirksville, MO, 63501</p>
            <h5>Phone</h5>
            <p>(318) 267-8595</p>
            <h5>Email</h5>
            <p>shrestharavee1@gmail.com</p>
            <h5>Web</h5>
            <p>ravishrestha.netlify.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2018}
              schoolName="University Of Louisiana At Monroe"
              schoolDescription="Bachelor's degree in Computer Science. Cum laude graduate. -Member of Upsilon Pi Upsilon
              -Member of the Honors Society at ULM
              -Member of National Society of Collegiate Scholars
              -Emerging Scholar at ULM"
               />
              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Web Developer At Truman State Univeristy"
              jobDescription="Use various programming and scripting languages like React.js, Php, HTML, CSS, Javascript, Bootstrap, Jquery to build complex web-based applications backed by relational databases.
              Author complex web pages involving intricate design and/ or user interaction.
              Maintain existing codebases to include troubleshooting and adding new features.
              Assist in project planning and web strategic planning.
              Determine new web technologies to implement, such as libraries, frameworks or APIs.
              Work with internal customers to gather requirements, troubleshoot problems, and provide training and consultation.
              Extend WordPress through the development of custom plug-ins and themes.
              "
              />

              <Experience
                startYear={2015}
                endYear={2018}
                jobName="Computer Lab Technician At University Of Louisiana At Monroe"
                jobDescription="Implemented company policies, technical procedures and standards for preserving the integrity and security of data, reports and access.
                Provided continued maintenance and development of bug fixes and patch sets for existing web applications.
                Diagnosed and troubleshooted UNIX and Windows processing problems and applied solutions to increase company efficiency.
                Advocated for end-users to perform testing and problem analysis for server, desktop and IT infrastructure work.
                Ensured network, system and data availability and integrity through preventative maintenance and upgrades."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                   <Skills
                  skill="Wordpress"
                  progress={80}
                  />
                   <Skills
                  skill="PHP"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={85}
                      />
                       <Skills
                      skill="SQL"
                      progress={60}
                      />



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
