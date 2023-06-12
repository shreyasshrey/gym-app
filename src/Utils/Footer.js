import React from 'react'

import { CopyRightIcon, LocationIcon, MailIcon, PhoneIcon } from './icons'
import './Footer.css'

const Footer = () => {
    const connectList = [
        {
            icon: <LocationIcon />,
            label: 'Location',
            description: [
                // 'C-Block, JP Nagar, Mysuru, Karnataka 570008',
                'Mysore',
                'Bangalore',
            ],
        },
        {
            icon: <PhoneIcon />,
            label: 'Contact',
            description: ['1234567890', '0987654321'],
        },
        {
            icon: <MailIcon />,
            label: 'Email',
            description: ['gym@gmail.com', 'gyms@gmail.com'],
        },
    ]

    return (
        <div className='footer-container'>
            {/* <div className='footer-blur'></div> */}
            <div className='connect-section'>
                {connectList.map((connect, index) => (
                    <div className='connect-cards' key={index}>
                        {connect.icon}
                        <div className='connect-label'>{connect.label}</div>
                        {connect['description'].map((desc, i) => (
                            <div className='connect-description' key={i}>
                                {desc}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className='app-title'>My App</div>
            {/* <CopyRightIcon /> */}
        </div>
    )
}

export default Footer
