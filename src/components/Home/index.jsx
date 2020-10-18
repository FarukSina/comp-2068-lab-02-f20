import React from 'react';
import {Link} from "react-router-dom"
// You need to import your shared header...
import Header from "../shared/Header/index"
import classes from '../Home/home.module.css'
const Home = () => {
  
  return (
    <>
      {/* You need to use your shared header component... */}
      <Header title="Home">
      </Header>
      {/* You need a link to your about page as a call to action */}
      <Link to="about">
      <button className={classes.button}>
        Go to About
      </button>
      </Link>
    </>
  );
}
 
export default Home;