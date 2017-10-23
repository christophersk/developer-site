import React from 'react';

export default function Home() {
  const styles = {
    background: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      top: 0,
      left: 0,
      filter: 'blur(0px) brightness(100%) grayscale(0%)',
    },
    xs: {
      backgroundImage: 'url(\'/images/xs/f7007317e15a729366216402720a1c01.jpg\')',
    },
    sm: {
      backgroundImage: 'url(\'/images/sm/f7007317e15a729366216402720a1c01.jpg\')',
    },
    md: {
      backgroundImage: 'url(\'/images/md/f7007317e15a729366216402720a1c01.jpg\')',
    },
    lg: {
      backgroundImage: 'url(\'/images/lg/f7007317e15a729366216402720a1c01.jpg\')',
    },
    parent: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
    },
    fullHeight: {
      height: '100%',
    }
  };

  return (
    <div>
    <div className="visible-lg-block" style={Object.assign({}, styles.background, styles.lg)} />
    <div style={styles.parent}>
      <div className="row" style={styles.fullHeight}>
        <div className="col-md-8 col-md-offset-2" style={styles.fullHeight}>
          <div style={styles.container}>
            <h1 style={{fontFamily: 'Roboto Slab', fontSize: '6rem', textShadow: '2px 2px 20px #000000', color: '#ECEBE7', textAlign: 'center', marginTop: '-6rem'}}>Chris Skene</h1>
            <h2 style={{color: '#ECEBE7', textAlign: 'center', textShadow: '2px 2px 20px #000000'}}>Web Developer</h2>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
