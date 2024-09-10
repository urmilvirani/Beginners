// import React, { useState } from 'react';
// import './style.css';
// import { Dropdown } from 'react-bootstrap';
// import { LuLanguages } from "react-icons/lu";
// import { FaChevronRight } from "react-icons/fa6";

// const Lending = () => {
//     const [item, setItem] = useState('English');
//     const handleChange = (eventKey: any) => {
//         setItem(eventKey);
//     };

//     return (
//         <div className='landing-page container-fluid'>
//             <div className='background-img'></div>
//             <div className='content'>
//                 <div className='d-flex '>
//                     <div className='col-lg-3 col-sm-6 text-center'>
//                         <img
//                             src={require('../../../assets/netflix_logo.png')}
//                             className='logo'
//                             alt='logo'
//                         />
//                     </div>
//                     <div className='col-lg-5' />
//                     <div className='col-lg-4 col-sm-6 d-flex justify-content-center'>
//                         <Dropdown onSelect={handleChange}>
//                             <Dropdown.Toggle className='language'>
//                                 <LuLanguages />
//                                 <p style={{ margin: 0 }}>{item}</p>
//                             </Dropdown.Toggle>
//                             <Dropdown.Menu>
//                                 <Dropdown.Item eventKey='English'>English</Dropdown.Item>
//                                 <Dropdown.Item eventKey='हिंदी'>हिंदी</Dropdown.Item>
//                             </Dropdown.Menu>
//                         </Dropdown>

//                         <div>
//                             <p style={{ backgroundColor: "#e50914", padding: '7px 20px', borderRadius: '5px', marginLeft: '10px', color: 'white' }}>Sign out</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='text fs-lg-5'>
//                     <p style={{ margin: 0 }}>Unlimited movies, TV</p>
//                     <p style={{ margin: 0 }}>shows and more</p>
//                 </div>

//                 <p style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>Starts at ₹149. Cancel anytime.</p>

//                 <div className='d-flex justify-content-center'>
//                     <div className='sign-up-button w-auto'>
//                         <p style={{ margin: 0 }}>Finish Sign Up</p>
//                         <FaChevronRight />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Lending;


// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function UncontrolledExample() {
//     return (
//         <Carousel >
//             {
//                 data.map((item) =>
//                     <Carousel.Item>
//                         <img src={item.img} style={{ height: "100vh", width: "100vw" }} />
//                         <Carousel.Caption>
//                             <p>{item.text}</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>

//                 )
//             }
//         </Carousel>
//     );
// }

// export default UncontrolledExample;

// const data = [
//     {
//         id: 1,
//         img: 'https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg',
//         text: 'first slide'
//     },
//     {
//         id: 2,
//         img: 'https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg',
//         text: 'second slide'
//     },
//     {
//         id: 3,
//         img: 'https://images.freecreatives.com/wp-content/uploads/2015/03/Huge-Backgrounds-17.jpg',
//         text: 'third slide'
//     },

// ]

// import React, { useEffect, useState } from 'react'
// import { Button, Toast } from 'react-bootstrap'

// const Lending = () => {

//     const [show, setShow] = useState(false)

//     const handleOpen = () => setShow(true)
//     const handleClose = () => setShow(false)

//     useEffect(() => {
//         setTimeout(() => {
//             setShow(false)
//         }, 5000);
//     }, [show])

//     return (
//         <>
//             <Button onClick={handleOpen}>Confirm</Button>

//             <Toast show={show} onClose={handleClose}>
//                 <Toast.Header >
//                     <h1 className='mx-auto'>success</h1>
//                 </Toast.Header>
//                 <Toast.Body>
//                     <p>wwriasdasdZdzcZ</p>
//                 </Toast.Body>
//             </Toast>
//         </>
//     )
// }

// export default Lending

// import React from 'react'
// import { Table } from 'react-bootstrap'

// const Lending = () => {
//     return (
//         <Table striped bordered hover responsive>
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>First Name</th>
//                     <th>Second Name</th>
//                     <th>USername</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>urmil</td>
//                     <td colSpan={2}>virani</td>

//                 </tr>
//             </tbody>
//         </Table>
//     )
// }

// export default Lending

// import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Placeholder from 'react-bootstrap/Placeholder';

// function CardExample() {

//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {

//         const timer = setTimeout(() => {
//             setIsLoading(false)
//         }, 4000);

//         return () => clearTimeout(timer)
//     }, [])


//     return (
//         <div className="d-flex justify-content-around">
//             {!isLoading ? <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src={require('../../../assets/netflix_logo.png')} />
//                 <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                         Some quick example text to build on the card title and make up the
//                         bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//             </Card>
//                 :

//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={require('../../../assets/netflix_logo.png')} />
//                     <Card.Body>
//                         <Placeholder as={Card.Title} animation='glow'>
//                             <Placeholder xs={6} />
//                         </Placeholder>
//                         <Placeholder as={Card.Text} animation="glow">
//                             <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
//                             <Placeholder xs={6} /> <Placeholder xs={8} />
//                         </Placeholder>
//                         <Placeholder.Button variant="primary" xs={6} />
//                     </Card.Body>
//                 </Card>}
//         </div>
//     );
// }

// export default CardExample;

// import React from 'react'
// import { Pagination } from 'react-bootstrap'

// const Lending = () => {
//     return (
//         <Pagination>
//             <Pagination.First />
//             <Pagination.Prev />
//             <Pagination.Item>{1}</Pagination.Item>
//             <Pagination.Ellipsis />
//             <Pagination.Item>{10}</Pagination.Item>
//             <Pagination.Next />
//             <Pagination.Last />
//         </Pagination>
//     )
// }

// export default Lending

// import React from 'react'
// import { Button, Modal, OverlayTrigger, Popover } from 'react-bootstrap'

// const Lending = () => {
//     const render = (
//         <Popover>
//             <Popover.Header >
//                 This is the
//             </Popover.Header>
//             <Popover.Body>
//                 content
//             </Popover.Body>
//         </Popover>
//     )
//     return (
//         <OverlayTrigger
//             placement='bottom'
//             overlay={render}
//         >
//             <Button variant='success'>touch me </Button>
//         </OverlayTrigger>
//     )
// }

// export default Lending

import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'



const Lending = () => {

    const [add, setAdd] = useState(data)

    const handle = () => {
        const newCard = {
            img: require('../../../assets/netflix_logo.png'),
            header: 'Content',
            body: 'There are some issues you need to solve first'
        }
        setAdd([...add, newCard])
    }
    return (
        <div className='d-flex flex-wrap gap-5 col-lg-12 col-12 col-md-12 col-sm-12'>
            {
                add.map((item, i) => (
                    <Card key={i} style={{}}>
                        <Card.Img src={item.img} style={{ objectFit: "contain", height: '100px', width: "100px" }} />
                        <Card.Body>
                            <Card.Title>{item.header}</Card.Title>
                            <Card.Text>{item.body}</Card.Text>
                            <Button variant='success'>CLick me</Button>
                        </Card.Body>
                    </Card>
                )
                )
            }
            <Button variant='primary' onClick={handle}>
                New
            </Button>
        </div >
    )
}

export default Lending

const data = [
    {

        img: require('../../../assets/netflix_logo.png'),
        header: 'Content',
        body: 'There are some issues you need to solve first'
    },
    {

        img: require('../../../assets/netflix_logo.png'),
        header: 'Content',
        body: 'There are some issues you need to solve first'
    },
    {

        img: require('../../../assets/netflix_logo.png'),
        header: 'Content',
        body: 'There are some issues you need to solve first'
    },
    // {

    //     img: require('../../../assets/netflix_logo.png'),
    //     header: 'Content',
    //     body: 'There are some issues you need to solve first'
    // }
]