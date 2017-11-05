import React from 'react'
import Link from 'gatsby-link'
import {Navbar} from 'react-bootstrap';
import 'bootswatch/slate/bootstrap.min.css';

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const siteTitle = "DevJoe";
    let header = 
      (<Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">{siteTitle}</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>);

    return (
      <div>
        {header}
        <div className="container">
          {children()}
        </div>
      </div>
    )
  }
}

export default Template
