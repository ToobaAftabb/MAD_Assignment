import React from 'react';
import {Image} from 'react-native';
 // Tell webpack this JS file uses this image

console.log(design); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <Image style={styles.logo} source={require('../assets/design.PNG')} />
}

export default Header;