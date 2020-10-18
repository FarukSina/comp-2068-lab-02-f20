import React from 'react';
import Header from '../shared/Header';
import classes from '../About/about.module.css'

const Home = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
      <Header title="Faruk">Bat</Header>
      {/* You need a paragraph describing a fun fact about you */}
      <p className={classes.p}>Fun Fact About me : I am Batman</p>
    </>
  );
}
 
export default Home;