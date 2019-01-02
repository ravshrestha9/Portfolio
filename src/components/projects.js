import React, {Component} from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card
            shadow={5}
            style={{
            minWidth: '450',
            margin: 'auto'
          }}>
            <CardTitle
              style={{
              color: '#fff',
              height: '176px',
              background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
            }}>Nursing Application</CardTitle>
            <CardText>
              Room Scheduling Program Software for the Kitty Degree School of Nursing to help
              manage the room utilization for their school.
            </CardText>
            <CardActions border>
              <a href='https://github.com/ravshrestha9/Nursing-Application'>
                <Button colored>GitHub</Button>
              </a>

            </CardActions>
            <CardMenu style={{
              color: '#fff'
            }}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card
            shadow={5}
            style={{
            minWidth: '450',
            margin: 'auto'
          }}>
            <CardTitle
              style={{
              color: '#fff',
              height: '176px',
              background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
            }}>Virtual Tour</CardTitle>
            <CardText>
              This is a virtual tour app that I have been working on for Truman State
              University. Worked with Opengraph, react-snapshot, google analytics and much
              more.
            </CardText>
            <CardActions border>
              <a href='https://tour.truman.edu/mcclain'>
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{
              color: '#fff'
            }}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card
            shadow={5}
            style={{
            minWidth: '450',
            margin: 'auto'
          }}>
            <CardTitle
              style={{
              color: '#fff',
              height: '176px',
              background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
            }}>React Ecommerce Application</CardTitle>
            <CardText>
            This is a react eCommerce website using react, react-router, bootstrap, Context API, PayPal API.
            </CardText>
            <CardActions border>
            <a href='https://ravi-store.netlify.com/'>
                <Button colored>Live Demo</Button>
              </a>
              <a href='https://github.com/ravshrestha9/react-ecommerce-website'>
                <Button colored>Github</Button>
              </a>
            </CardActions>
            <CardMenu style={{
              color: '#fff'
            }}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>

      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card
            shadow={5}
            style={{
            minWidth: '450',
            margin: 'auto'
          }}>
            <CardTitle
              style={{
              color: 'black',
              height: '176px',
              background: 'url(http://php.net/images/logos/new-php-logo.png) center / cover'
            }}>Nursing Application Backend</CardTitle>
            <CardText>
              This is the backend portion for the Nursing Application. All the APIs is written
              in Php with the help of Slim Framework.
            </CardText>
            <CardActions border>
              <a href='https://github.com/ravshrestha9/Nursing-Application-Backend'>
                <Button colored>GitHub</Button>
              </a>

            </CardActions>
            <CardMenu style={{
              color: '#0000'
            }}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card
            shadow={5}
            style={{
            minWidth: '450',
            margin: 'auto'
          }}>
            <CardTitle
              style={{
              color: 'black',
              height: '176px',
              background: 'url(http://php.net/images/logos/new-php-logo.png) center / cover'
            }}>WordPress Plugin</CardTitle>
            <CardText>
              This is a custom wordpress Plugin I am currently working on. Full list of
              sections and features Modular Administration Area CPT Manager Custom Taxonomy
              Manager Widget to Upload and Display media in sidebars Post and Pages Gallery
              integration Testimonial section: Comment in the front-end, Admins can approve
              comments, select which comments to display Custom template section Ajax based
              Login/Register system Membership protected area.
            </CardText>
            <CardActions border>
              <a href='https://github.com/ravshrestha9/Nursing-Application-Backend'>
                <Button colored>GitHub</Button>
              </a>

            </CardActions>
            <CardMenu style={{
              color: '#fff'
            }}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card
            shadow={5}
            style={{
            minWidth: '450',
            margin: 'auto'
          }}>
            <CardTitle
              style={{
              color: 'black',
              height: '176px',
              background: 'url(http://php.net/images/logos/new-php-logo.png) center / cover'
            }}>College Ambassador Plugin</CardTitle>
            <CardText>
              This is a wordpress Plugin I created for Truman State University. Full list of
              college Ambassador. Used HTML, CSS, Bootstrap, JQuery for the frontend and php for the admin section.
            </CardText>
            <CardActions border>
              <a href='http://gmarsh.sites.truman.edu/collegeambassador/'>
                <Button colored>GitHub</Button>
              </a>

            </CardActions>
            <CardMenu style={{
              color: '#fff'
            }}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>

      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card
          shadow={5}
          style={{
          minWidth: '450',
          margin: 'auto'
        }}>
          <CardTitle
            style={{
            color: 'black',
            height: '176px',
            background: 'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'
          }}>Restaurant Website</CardTitle>
          <CardText>
            This is responsive website for a sushi restaurant. Used HTML 5, CSS, Bootstrap and Jquery.
          </CardText>
          <CardActions border>
            <a href='https://github.com/ravshrestha9/restaurant-website'>
              <Button colored>GitHub</Button>
            </a>

            <a href='https://sushi-restaurant.netlify.com/'>
              <Button colored>Live Demo</Button>
            </a>

          </CardActions>
          <CardMenu style={{
            color: '#0000'
          }}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
       </div>
      )
    }

  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({activeTab: tabId})}
          ripple>
          <Tab>React</Tab>
          <Tab>Php/Wordpress</Tab>
          <Tab>Javascript/HTML/CSS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects;
