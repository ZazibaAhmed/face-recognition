import React from 'react'
import Tilt from 'react-tilt'
import logo from './logo.png'

const Logo= () =>{
	return(
	  <div className="ma4 mt0" style={{ display:"flex",justifyContent:"center"}}>
		<Tilt className="Tilt br2 shadow-2 tc" options={{ max : 50 }} style={{height: 100, width: 100 }} >
		 	<div className="Tilt-inner pa2"><img alt="logo" src={logo}/></div>
		</Tilt>
	  </div>
	);
}

export default Logo;