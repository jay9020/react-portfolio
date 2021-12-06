import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './App.css'

function App() {
  return (
    <div className="App">

	  <Navbar collapseOnSelect expand="lg">
	  	<Navbar.Brand href="/">Jamie Allen</Navbar.Brand>
	  	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
	  	<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
	  	<Nav className="justify-content-end" style={{ width: "100%" }}>
	  		<Nav.Link href="#features" style={{ color: "#fff" }}>About</Nav.Link>
	  		<Nav.Link href="#pricing" style={{ color: "#fff" }} >Projects</Nav.Link>
	  		</Nav>
	  		</Navbar.Collapse>
	  	</Navbar>

	  <div className="site-container">
          
	 	 <div className="header-section">

	  	<Image src="https://styles.redditmedia.com/t5_2txf4/styles/communityIcon_9tb7fpieqvz51.png?width=256&s=e4475878d6b9e8aaa43e1d3f613e74a9c3806954" roundedCircle />
	  	<p></p>
	  	<p></p>

	  	<h2 style={{textAlign: 'center'}}>
	  	Hi, I'm Jamie Allen, an IT Operations Team Lead based in the UK.
	  	</h2>
	
	  	<p style={{textAlign: 'center'}}>
	  	If you would like to contact me, please get in touch via email at <a href="jamie@twistercreative.co.uk">jamie@twistercreative.co.uk<a/>
          	</p>

	  	</div>

		<div className="section">
	        
	  	</div>

	  </div>

     </div>
  );
}

export default App;
