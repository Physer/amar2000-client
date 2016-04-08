import React, { Component } from 'react';

import './splashscreen.scss';

export default class SplashScreen extends Component {
  render() {
    return (
      <div className="splashloader safe">
        <div className="outer-circle">
          <div className="circle">
            <div className="text">
              <h1>AMAR <span>2000</span></h1>
              <p className="unit">Everything is okay</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
