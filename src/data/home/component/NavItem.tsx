import React from 'react'
import { Navbar } from 'react-bootstrap'
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { data } from './list';


const NavItem = () => {
    return (
        <Navbar style={{ backgroundColor: '#232f3e' }}>
            <div className='d-flex align-items-center' style={{ width: '100%' }}>
                <RiBarChartHorizontalLine color='white' style={{ marginRight: '10px' }} />

                {/* Ensuring the red background takes full width after the icon */}
                <div className='d-flex' style={{ flex: 1 }}>
                    {
                        data.map((item, index) => (
                            <div key={index} style={{ padding: '0 11px', }}>
                                <p style={{ margin: 0, color: 'white', fontSize: '14px' }}>{item}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Navbar>

    )
}

export default NavItem