import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Profilepic from '../img/Profilepic.jpg'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
        <div className="banner-heading">  
          <h1>Ravi Shrestha</h1>
          <img
              src={Profilepic}
              alt="avatar"
              className="avatar-img"
              />
          </div>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | PHP | WordPress | Nodejs | SQL</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/shrestharavee1/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/ravshrestha9" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Medium */}
          <a href="https://medium.com/@ravishrestha" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-medium" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
