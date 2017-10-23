import React from 'react';
import Scrollchor from 'react-scrollchor';

export default function Media() {
  const styles = {
    background: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage: 'url(\'/images/daniil-silantev-318853.jpg\')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      filter: 'opacity(10%) grayscale(100%)',
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
      <div style={styles.background} />
      <div className="container" style={styles.parent}>
        <div className="row" style={{height: '100%'}}>
          <div className="col-md-8 col-md-offset-2" style={styles.fullHeight}>
            <div style={styles.container}>
              <h2>Media</h2>
              <hr/>
              <p style={{fontSize: '3 rem'}}>
                <Scrollchor to="#techTalk" className="nav-link">Tech Talk: Server-Side React</Scrollchor>
              </p>
            </div>
            <div style={{textAlign: 'center', fontSize: '2.5rem', position: 'relative', marginTop: '-50px', zIndex: 999}}>
              <Scrollchor to="#techTalk" className="nav-link">
                <span className="glyphicon glyphicon-menu-down" />
              </Scrollchor>
            </div>
          </div>
        </div>
        <div className="row" style={styles.fullHeight} id="techTalk">
          <div className="col-md-8 col-md-offset-2" style={styles.fullHeight}>
            <div style={styles.container}>
              <h3>Fullstack Academy Tech Talk:</h3>
              <h4>Implementing Server-Side React</h4>
              <p>9/21/17</p>
              <div className="row" style={{width: '100%'}}>
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/c9TT9PS5IyM" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
