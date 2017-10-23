import React from 'react';
import Scrollchor from 'react-scrollchor';

export default function Projects() {
  const styles = {
    background: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      filter: 'opacity(10%) grayscale(100%)',
    },
    xs: {
      backgroundImage: 'url(\'/images/xs/e9cde980f3596fe6d03cd9a3931b96a3.jpg\')',
    },
    sm: {
      backgroundImage: 'url(\'/images/sm/e9cde980f3596fe6d03cd9a3931b96a3.jpg\')',
    },
    md: {
      backgroundImage: 'url(\'/images/md/e9cde980f3596fe6d03cd9a3931b96a3.jpg\')',
    },
    lg: {
      backgroundImage: 'url(\'/images/lg/e9cde980f3596fe6d03cd9a3931b96a3.jpg\')',
    },
    parent: {
      position: 'absolute',
      height: '100%',
      width: '100%',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      fontSize: '1.7rem',
    },
    fullHeight: {
      height: '100%',
    }
  };

  return (
    <div>
      <div className="visible-xs-block" style={Object.assign({}, styles.background, styles.xs)} />
      <div className="visible-sm-block" style={Object.assign({}, styles.background, styles.sm)} />
      <div className="visible-md-block" style={Object.assign({}, styles.background, styles.md)} />
      <div className="visible-lg-block" style={Object.assign({}, styles.background, styles.lg)} />
      <div className="container" style={styles.parent}>
        <div className="row" style={{height: '100%'}}>
          <div className="col-md-8 col-md-offset-2" style={styles.fullHeight}>
            <div style={styles.container}>
              <h2>Projects</h2>
              <hr/>
              <p style={{fontSize: '3 rem'}}>
              <Scrollchor to="#soundCrowd" className="nav-link">SoundCrowd</Scrollchor> | <Scrollchor to="#middlePlace" className="nav-link">MiddlePlace</Scrollchor> | <Scrollchor to="#forte" className="nav-link">Forte</Scrollchor>
              </p>
            </div>
            <div style={{textAlign: 'center', fontSize: '2.5rem', position: 'relative', marginTop: '-50px', zIndex: 999}}>
              <Scrollchor to="#soundCrowd" className="nav-link">
                <span className="glyphicon glyphicon-menu-down" />
              </Scrollchor>
            </div>
          </div>
        </div>
        <div className="row" style={styles.fullHeight} id="soundCrowd">
          <div className="col-md-8 col-md-offset-2" style={styles.fullHeight}>
            <div style={styles.container}>
              <h4>SoundCrowd</h4>
              <p><a href="https://github.com/Team-Paper/soundcrowd" target="new">GitHub</a> | <a href="https://thesoundcrowd.herokuapp.com/" target="new">Website</a></p>
              <p style={{textAlign: 'center'}}><em>An in-browser digital audio workstation plus social network.</em></p>
              <div className="row" style={{width: '100%'}}>
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/FmdvYdB9jMc" />
                    </div>
                </div>
              </div>
              <p style={{textAlign: 'center', paddingTop: '1rem'}}><b>Technologies:</b> Web Audio API, Firebase, React, Redux, React-Redux, NodeJS/ExpressJS, React-Router, Postgres</p>
              <div style={{textAlign: 'center', fontSize: '2.5rem'}}>
                <Scrollchor to="#" className="nav-link">
                  <span className="glyphicon glyphicon-menu-up" />
                </Scrollchor>
                <Scrollchor to="#middlePlace" className="nav-link">
                  <span className="glyphicon glyphicon-menu-down" />
                </Scrollchor>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={styles.fullHeight} id="middlePlace">
          <div className="col-md-8 col-md-offset-2" style={styles.fullHeight}>
            <div style={styles.container}>
              <h4>MiddePlace</h4>
              <p><a href="https://github.com/christophersk/middleplace" target="new">GitHub</a></p>
              <p style={{textAlign: 'center'}}><em>An iOS application that finds entertainment spots (restaurants, bars, etc.) near the midpoint (by travel time) of the user's current location and another user-provided location. Fullstack Academy "Stackathon" popular vote winner for "best app."</em></p>
              <div className="row" style={{width: '100%'}}>
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Ev8J2Xo0-iw" />
                    </div>
                </div>
              </div>
              <p style={{textAlign: 'center', paddingTop: '1rem'}}><b>Technologies:</b> React-Native, Google Directions API, Google Places API, Airbnb React Native Mapview</p>
              <div style={{textAlign: 'center', fontSize: '2.5rem'}}>
                <Scrollchor to="soundCrowd" className="nav-link">
                  <span className="glyphicon glyphicon-menu-up" />
                </Scrollchor>
                <Scrollchor to="#forte" className="nav-link">
                  <span className="glyphicon glyphicon-menu-down" />
                </Scrollchor>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={styles.fullHeight} id="forte">
          <div className="col-md-8 col-md-offset-2" style={styles.fullHeight}>
            <div style={styles.container}>
              <h4>Forte</h4>
              <p><a href="https://github.com/musicStackers/musicStack" target="new">GitHub</a></p>
              <p style={{textAlign: 'center'}}><em>An iOS application that finds entertainment spots (restaurants, bars, etc.) near the midpoint (by travel time) of the user's current location and another user-provided location. Fullstack Academy "Stackathon" popular vote winner for "best app."</em></p>
              <div className="row" style={{width: '100%'}}>
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <a href="https://musicstack-forte.herokuapp.com/" target="new">
                    <img className="img img-responsive" src="/images/forteScreenshot.png" />
                  </a>
                </div>
              </div>
              <p style={{textAlign: 'center', paddingTop: '1rem'}}><b>Technologies:</b> React-Native, Google Directions API, Google Places API, Airbnb React Native Mapview</p>
              <div style={{textAlign: 'center', fontSize: '2.5rem'}}>
                <Scrollchor to="middlePlace" className="nav-link">
                  <span className="glyphicon glyphicon-menu-up" />
                </Scrollchor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// <div>
// <div className="row">
//   <div className="col-md-8 col-md-offset-2" style={{marginTop: '6rem', marginBottom: '6rem'}}>
//     <hr />
//   </div>
//   <div className="col-md-8 col-md-offset-2">
//     <div style={styles.container}>
//       <h4>Personal Site</h4>
//       <img className="img img-responsive" src="http://via.placeholder.com/320x180" />
//       <p style={{textAlign: 'center', paddingTop: '1rem'}}><b>Technologies:</b> React, Server-Side React, NodeJS/ExpressJS, React-Router, React-Router-Transition</p>
//     </div>
//   </div>
//   <div className="col-md-8 col-md-offset-2" style={{marginTop: '6rem', marginBottom: '6rem'}}>
//     <hr />
//   </div>
//   <div className="col-md-8 col-md-offset-2">
//     <div style={styles.container}>
//       <h4>SoundCrowd</h4>
//       <p><a href="https://github.com/Team-Paper/soundcrowd" target="new">GitHub</a> | <a href="https://thesoundcrowd.herokuapp.com/" target="new">Website</a></p>
//       <p style={{textAlign: 'center'}}><em>An in-browser digital audio workstation plus social network.</em></p>
//       <img className="img img-responsive" src="http://via.placeholder.com/320x180" />
//       <p style={{textAlign: 'center', paddingTop: '1rem'}}><b>Technologies:</b> Web Audio API, Firebase, React, Redux, React-Redux, NodeJS/ExpressJS, React-Router, Postgres</p>
//     </div>
//   </div>
//   <div className="col-md-8 col-md-offset-2" style={{marginTop: '6rem', marginBottom: '6rem'}}>
//     <hr />
//   </div>
//   <div className="col-md-8 col-md-offset-2">
//     <div style={styles.container}>
//       <h4>MiddePlace</h4>
//       <p><a href="https://github.com/christophersk/middleplace" target="new">GitHub</a></p>
//       <p style={{textAlign: 'center'}}><em>An iOS application that finds entertainment spots (restaurants, bars, etc.) near the midpoint (by travel time) of the user's current location and another user-provided location. Fullstack Academy "Stackathon" popular vote winner for "best app."</em></p>
//       <img className="img img-responsive" src="http://via.placeholder.com/320x180" />
//       <p style={{textAlign: 'center', paddingTop: '1rem'}}><b>Technologies:</b> React-Native, Google Directions API, Google Places API, Airbnb React Native Mapview</p>
//     </div>
//   </div>
// </div>
// </div>
