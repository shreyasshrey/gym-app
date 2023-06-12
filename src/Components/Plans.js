import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

import { goToContactus } from '../Utils/HelperFunction'
import {
    BasicPlanIcon,
    GoldPlanIcon,
    IndianRupeeIcon,
    PremiumPlanIcon,
} from '../Utils/icons'

import './Plans.css'

const Plans = () => {
    const planList = [
        {
            icon: <BasicPlanIcon />,
            title: 'Basic Plan',
            cost: 1200,
            currency: 'INR',
            benefits: [
                '2 hrs of exercises',
                'Free consultation to coaches',
                'Access',
            ],
        },
        {
            icon: <PremiumPlanIcon />,
            title: 'Premium Plan',
            cost: 1200,
            currency: 'INR',
            benefits: [
                '2 hrs of exercises',
                'Free consultation to coaches',
                'Access',
            ],
        },
        {
            icon: <GoldPlanIcon />,
            title: 'Gold Plan',
            cost: 1200,
            currency: 'INR',
            benefits: [
                '2 hrs of exercises',
                'Free consultation to coaches',
                'Access',
            ],
        },
    ]

    return (
        <div id='plans' className='section'>
            <div className='wordings'>
                <div>
                    Get ready to
                    <span className='stroke-text'> plan </span>with us !
                </div>
            </div>
            <div className='plan-card-container'>
                {planList.map((plan, index) => {
                    return (
                        <div className='plan-cards' key={index}>
                            <div className='plan-icon'>{plan.icon}</div>
                            <div className='plan-title'>{plan.title}</div>
                            <div className='plan-cost'>
                                <IndianRupeeIcon />
                                {plan.cost}
                                {/* <span>{plan.currency}</span> */}
                            </div>
                            {plan.benefits.map((benefit, i) => (
                                <div className='plan-benefits' key={i}>
                                    <IoMdCheckmarkCircleOutline />
                                    {benefit}
                                </div>
                            ))}
                            <div className='join-btn'>
                                <button
                                    onClick={() => goToContactus('contactus')}
                                >
                                    Join Now
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Plans
