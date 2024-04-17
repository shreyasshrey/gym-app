import React from 'react'
import {
    BurningIcon,
    CardioIcon,
    HealthIcon,
    StrengthIcon,
} from '../Utils/icons'

import './Programs.css'

const Programs = () => {
    const programsList = [
        {
            icon: <StrengthIcon />,
            title: 'Strength Training',
            description:
                'In this program,you are trained to improve your strength through many exercises.',
        },
        {
            icon: <CardioIcon />,
            title: 'Cardio Training',
            description:
                'In this program,you are trained to do sequential moves in range of 20 until 30 minutes.',
        },
        {
            icon: <BurningIcon />,
            title: 'Fat Burning',
            description:
                'This program is suitable for you who wants to get rid of your fat and lose their weight.',
        },
        {
            icon: <HealthIcon />,
            title: 'Health Fitness',
            description:
                'This programs is designed for those who exercises only for their body fitness not body building.',
        },
    ]

    return (
        <div id='programs' className='section'>
            <div className='wordings'>
                explore our
                <span className='stroke-text'> programs </span>to get in shape
            </div>
            <div className='program-card-container'>
                {programsList.map((pgm, index) => {
                    return (
                        <div className='program-cards' key={index}>
                            <div className='icon'>{pgm.icon}</div>
                            <div className='title'>{pgm.title}</div>
                            <div className='description'>{pgm.description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Programs
