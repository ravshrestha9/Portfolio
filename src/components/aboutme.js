import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Sketch1 from '../img/Sketch1.png';
import Sketch2 from '../img/Sketch2.jpg';
import Img from '../img/Img.jpeg';

class About extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={6}>
            <h2>About Me</h2>
            <p>My name is Ravi Shrestha and I am a full stack web developer. I am currently working in Truman State University. My résumé includes a wide variety of life experience, pertinent coursework, and fieldwork in my desired area of practice. I have been consistently working in this field and expanding my knowledge. Working as a full-time web developer as well as an intern throughout the years has given me exposure to HTML, CSS, JavaScript, jQuery, React, Wordpress. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            
            <img
              src={Img}
              alt="avatar"
              style={{width: '400px', height: '300px'}}
              />

            <p></p>
          </Cell>
          <Cell className="resume-right-col" col={6}>
            <h2>Volunteer </h2>
            <p>I like to volunteer for a social cause during my spare time. Volunteering always has a significance in my life because my father and my brother has always taught me to help others. Currently, I am volunteer at Twin Pines elder Care in Kirksville, months
              Every Saturday, I visit the residents and help the staff organize recreational activities such as Bingo, Birthday parties and festivals. I believe that "Every individual has the power to bring a positive change in the society, and volunteering is a way for my contribution."
            </p>
            <h2>Hobbies </h2>
          <p>One of my hobby that I have picked up over the months is sketching. I try to sketch atleast twice a week and trying to craft my skill.</p>
            <img
              src={Sketch1}
              alt="avatar"
              style={{width: '250px', height: '300px', marginRight: '10px'}}
              />

              <img
              src={Sketch2}
              alt="avatar"
              style={{width: '250px', height: '300px'}}
              />



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
