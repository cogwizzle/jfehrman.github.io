import React from 'react';
import {Row, Grid, Col} from 'react-bootstrap';
import {SocialIcons} from 'react-social-icons';
import GatsbyConfig from '../../gatsby-config';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import { rhythm } from '../utils/typography';
// Stylesheets
import './social.css';

class Social extends React.Component {
  render() {
    const urls = GatsbyConfig.siteMetadata.socialLinks;

    return (
      <div id="social_buttons">
        <center>
          <SocialIcons urls={urls}/>
        </center>
      </div>
    )
  }
}

export default Social
