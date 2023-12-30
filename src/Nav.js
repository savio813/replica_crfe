// import React from 'react';
// import { Navbar, Nav, } from 'react-bootstrap';
// import { Link } from 'react-scroll'; // Install react-scroll for smooth scrolling

// const AppNavbar = () => {
//   return (
//     <Navbar bg="black" expand="lg" variant="dark" fixed="top">
//       <Navbar.Brand href="https://static.cuttingroomfl.com/assets/images/logo.svg"></Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbar-nav" />
//       <Navbar.Collapse id="navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to="section1" smooth={true} duration={500}>Section 1</Nav.Link>
//           <Nav.Link as={Link} to="section2" smooth={true} duration={500}>Section 2</Nav.Link>
//           <Nav.Link as={Link} to="section3" smooth={true} duration={500}>Section 3</Nav.Link>
//         </Nav>
        
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default AppNavbar;








import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll'; // Install react-scroll for smooth scrolling
import './Nav.css';

const AppNavbar = () => {
  return (
    <Navbar bg="transperent" expand="lg" variant="dark" fixed="top">
      <Navbar.Brand href="#">
        <img src='https://static.cuttingroomfl.com/assets/images/logo.svg' alt='logo' className='logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto custom-nav">
          <Nav.Link as={Link} to="section1" smooth={true} duration={500}>HOME</Nav.Link>
          <Nav.Link as={Link} to="section2" smooth={true} duration={500}>OUR WORK</Nav.Link>
          <Nav.Link as={Link} to="section3" smooth={true} duration={500}>OUR SERVICES</Nav.Link>
          <Nav.Link as={Link} to="section4" smooth={true} duration={500}>ABOUT US</Nav.Link>
          <Nav.Link as={Link} to="section5" smooth={true} duration={500}>CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
