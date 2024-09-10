import React, { useState } from 'react'
import { Dropdown, Nav, Navbar } from 'react-bootstrap'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";




const Navigationbar = () => {

    const [selectedItem, setSelectedItem] = useState('All');

    const handleSelect = (eventKey: any) => {
        setSelectedItem(eventKey);
    };

    const [selectedCountry, setSelectedCountry] = useState('EN');

    const handleSelectCountry = (eventKey: any) => {
        setSelectedCountry(eventKey);
    };

    return (
        <Navbar style={{ backgroundColor: '#0f1111' }}>
            <div className='col-1'>
                <img
                    src={require('../../../assets/img/amazon_PNG20.png')}
                    style={{ height: '40px', width: "120px", objectFit: 'contain', }}
                />
            </div>

            <div className='d-flex align-items-center col-2  '>
                <HiOutlineLocationMarker color='white' />
                <div>
                    <p style={{ color: "gray", margin: 0, fontSize: 12 }}>Delivering to Ahmedabad 380003</p>
                    <p style={{ color: "white", margin: 0 }}>Update location</p>
                </div>
            </div>

            <div className='d-flex m-0 p-0 border-0 col-5' >
                <Dropdown onSelect={handleSelect} style={{ backgroundColor: "lightgrey", borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', height: '6vh' }}>
                    <Dropdown.Toggle
                        variant="light"
                        style={{ backgroundColor: 'lightgray', width: '100%', border: 0 }} // Adjust background to look like select
                    >
                        {selectedItem}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '100%' }}>
                        <Dropdown.Item eventKey="All Categories">All Categories</Dropdown.Item>
                        <Dropdown.Item eventKey="Category 1">Category 1</Dropdown.Item>
                        <Dropdown.Item eventKey="Category 2">Category 2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <input
                    style={{ backgroundColor: "white", width: "40vw", height: '6vh', border: 0 }}
                    placeholder='Search Amazon.in'
                />
                <div style={{ backgroundColor: "#febd69", height: '6vh', padding: "0px 10px", borderTopRightRadius: '5px', borderBottomRightRadius: "5px", display: 'flex', alignItems: "center", justifyContent: 'center', }}>
                    <IoMdSearch color='black' size={18} />
                </div>
            </div>

            <div className='col-4 d-flex justify-content-around'>
                <Dropdown onSelect={handleSelectCountry} >
                    <Dropdown.Toggle
                        // variant="light"
                        style={{ backgroundColor: '#0f1111', width: '100%', border: 0, display: 'flex', alignItems: 'center' }} // Adjust background to look like select
                    >

                        <img
                            src='http://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png'
                            style={{ height: '20px', width: "20px", objectFit: 'contain', marginRight: '5px' }}
                        />
                        <p style={{ color: "white", margin: 0 }}>{selectedCountry}</p>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '100%' }}>
                        <Dropdown.Item eventKey="888">All Categories</Dropdown.Item>
                        <Dropdown.Item eventKey="Category 1">Category 1</Dropdown.Item>
                        <Dropdown.Item eventKey="Category 2">Category 2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div>
                    <p style={{ margin: 0, color: "white", fontSize: '12px' }}>Hello, Sign in </p>
                    <p style={{ margin: 0, color: "white" }}>Account & Lists</p>
                </div>

                <div>
                    <p style={{ margin: 0, color: "white", fontSize: '12px' }}>Returns</p>
                    <p style={{ margin: 0, color: "white" }}>& Orders</p>
                </div>

                <PiShoppingCartLight color='white' size={40} />

            </div>


        </Navbar >
    )
}

export default Navigationbar