import React, { useState } from 'react'
import { Link } from 'react-scroll'

import { BarIcon } from './icons'
import './Header.css'

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)

    const headings = [
        { name: 'Home', path: 'home' },
        { name: 'Programs', path: 'programs' },
        { name: 'Plans', path: 'plans' },
        { name: 'Contact Us', path: 'contactus' },
    ]

    return (
        <div className='header-container'>
            <div className='app-title'>My App</div>
            <div
                className='icon-bar'
                onClick={() => setMenuOpened(!menuOpened)}
            >
                <BarIcon />
            </div>
            {menuOpened && (
                <div className='header-tab-mobile'>
                    {headings.map((header, index) => {
                        return (
                            <Link
                                key={index}
                                activeClass='app-tab active'
                                className='app-tab'
                                spy={true}
                                smooth={true}
                                to={header.path}
                                onClick={() => setMenuOpened(false)}
                            >
                                {header.name}
                            </Link>
                        )
                    })}
                </div>
            )}
            <div className='header-tab'>
                {headings.map((header, index) => {
                    return (
                        <Link
                            key={index}
                            activeClass='app-tab active'
                            className='app-tab'
                            spy={true}
                            smooth={true}
                            to={header.path}
                            onClick={() => setMenuOpened(false)}
                        >
                            {header.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Header
