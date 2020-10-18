import React from 'react';
import Styles from './styles';

const Header = (props) => {
  return (
    <Styles.Header>
      <div>
      <h1>{props.title}</h1>
      </div>
      <div>
      <p>{props.children}</p>
      </div>
    </Styles.Header>
  );
}
 
export default Header;