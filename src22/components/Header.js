import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const headerStyle={
   h:{
    fontSize:"100px"
   },
   header:{
    background:"red"
   }
}

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={headerStyle.header} className="header">
      <h1 style={headerStyle.h}>Welcome</h1>
    </header>
  );
}

export default Header;
