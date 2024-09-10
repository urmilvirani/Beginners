// import React, { useState } from 'react'
// import './design.css'
// import { Button, Nav, Offcanvas } from 'react-bootstrap'

// const Design = () => {

//     const [open, setOpen] = useState(false)
//     const modalOpen = () => setOpen(true)
//     const modalClose = () => setOpen(false)

//     return (
//         <>


//             <div className='d-flex '>
//                 <Nav className='d-flex d-none d-lg-flex flex-column drawer align-items-center m-lg-0'>
//                     <Nav.Link>Design</Nav.Link>
//                     <Nav.Link>Bootstrap</Nav.Link>
//                     <Nav.Link>Material UI</Nav.Link>
//                     <Nav.Link>tailwind css</Nav.Link>

//                 </Nav>
//                 <div className='content'>
//                     <div style={{ backgroundColor: 'red', display: "flex", justifyContent: 'space-between' }}>
//                         <Nav className='d-lg-none'>

//                             <Button className='bg-secondary' onClick={modalOpen}>
//                                 ☰
//                             </Button>

//                             <Offcanvas show={open} onHide={modalClose} placement='start' >

//                                 <Offcanvas.Header closeButton>
//                                     <Offcanvas.Title>Menu</Offcanvas.Title>
//                                 </Offcanvas.Header>

//                                 <Offcanvas.Body>
//                                     <Offcanvas.Title>Design</Offcanvas.Title>
//                                     <Offcanvas.Title>Bootstrap</Offcanvas.Title>
//                                     <Offcanvas.Title>Material UI</Offcanvas.Title>
//                                     <Offcanvas.Title>tailwind css</Offcanvas.Title>

//                                 </Offcanvas.Body>
//                             </Offcanvas>

//                         </Nav>
//                         <p style={{ display: "flex", justifyContent: "flex-end", backgroundColor: 'red' }}>this is the text </p>
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default Design


// // #1e293b

// // #0f172a


// import React, { useState } from 'react'
// import { Button, Card, Dropdown, Form, Modal, Nav, Navbar, Offcanvas, Spinner, Tab, Table, Tabs } from 'react-bootstrap'
// import './design.css'

// const Design = () => {


//     return (
//         <div className='' style={{ position: 'relative' }}>

//             {/* <div className='d-flex justify-content-end'>
//                 <img
//                     src={require('./Background.png')}
//                     style={{ objectFit: 'cover', height: '100vh', width: "60vw", top: 0, right: 0, }}
//                 />
//             </div> */}

//             <div className='d-flex position-absolute top-0' style={{ width: '100vw' }}>
//                 <div className='col-4 d-flex justify-content-evenly'>
//                     <p>Home</p>
//                     <p>About</p>
//                     <p>Contact</p>
//                 </div>
//                 <p className='col-4 text-center fw-bold fs-4' style={{ color: "#37447E" }}>Landing</p>
//                 <div className='col-4 d-flex justify-content-center align-items-center'>
//                     <p style={{
//                         backgroundColor: '#111B47',
//                         width: '30%',
//                         color: 'white',
//                         display: "flex",
//                         justifyContent: "center",
//                         borderRadius: 5
//                     }}>Buy Now</p>
//                 </div>
//             </div>

//             <div>

//             </div>

//         </div>


//     )
// }

// export default Design


import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'

const Design = () => {

    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
    }

    return (
        <div className='container-fluid d-flex'>

            <div
                className='col-lg-3 col-md-3 d-none d-lg-flex d-md-flex'
                style={{ height: '100vh', backgroundColor: " #1e293b" }}
            >

            </div>
            <div
                className='col-lg-9 col-md-9 col-sm-12 d-sm-flex'
                style={{ backgroundColor: 'lightgray', height: '100vh' }}
            >
                <div className='h-25 bg-light col-12 d-flex justify-content-between'>
                    <div className='d-lg-none'>
                        <button onClick={toggle}>
                            ☰
                        </button>
                        <Offcanvas show={show} onHide={toggle} placement='start'>
                            <Offcanvas.Header closeButton>

                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Offcanvas.Title>hello</Offcanvas.Title>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                    <p>Click here</p>
                </div>
            </div>

        </div>
    )
}

export default Design