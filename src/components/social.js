import React from 'react';
import {Row, Grid, Col} from 'react-bootstrap';
import {SocialIcons} from 'react-social-icons';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import { rhythm } from '../utils/typography';
// Stylesheets
import './social.css';

class Bio extends React.Component {
  render() {
    const urls = [
      'https://github.com/jfehrman',
      'https://twitter.com/joseph_fehrman',
      'https://stackexchange.com/users/10229104/joseph-fehrman'
    ];

    return (
      <div id="social_buttons">
        <center>
          <SocialIcons urls={urls}/>
        </center>
      </div>
    )
  }
}

export default Bio
