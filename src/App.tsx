// import React, { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Offcanvas, Button } from 'react-bootstrap';

// const App = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       {/* Main Navbar */}
//       <Navbar bg="primary" expand="lg" className="d-lg-none">
//         <Button variant="primary" onClick={handleShow}>
//           Open Drawer
//         </Button>
//         <Navbar.Brand href="#home" className="ml-auto">React-Bootstrap</Navbar.Brand>
//       </Navbar>

//       {/* Offcanvas Drawer for small screens */}
//       <Offcanvas show={show} onHide={handleClose} placement="start">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>React-Bootstrap</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>

//       {/* Regular Navbar for large screens */}
//       <Navbar bg="primary" expand="lg" className="d-none d-lg-flex">
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// }

// export default App;

import React from 'react'
import Design from './Design'
import Home from './data/home/views/Home'
import Lending from './src/web/Lending/views/Lending'

const App = () => {
  return (

    // <Design />
    // <Home />
    <Lending />

  )
}

export default App