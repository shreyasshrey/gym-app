import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

import { goToContactus } from './WebpageUtils/HelperFunction';
import {
  BasicPlanIcon,
  GoldPlanIcon,
  IndianRupeeIcon,
  PremiumPlanIcon,
} from '../Utils/icons';

import './Plans.css';

const Plans = () => {
  const planList = [
    {
      icon: <BasicPlanIcon />,
      title: 'Basic Plan',
      cost: 8000,
      currency: 'INR',
      benefits: [
        'Standard gym access during operating hours',
        'Use of basic gym equipment',
        'Limited group fitness classes',
        'No access to additional amenities (sauna, pool, etc.)',
      ],
    },
    {
      icon: <PremiumPlanIcon />,
      title: 'Premium Plan',
      cost: 1200,
      currency: 'INR',
      benefits: [
        'Basic plan benefits',
        '24/7 access or extended hours',
        'Access to additional amenities (sauna, pool, etc.)',
        'More diverse group fitness options',
      ],
    },
    {
      icon: <GoldPlanIcon />,
      title: 'Gold Plan',
      cost: 1600,
      currency: 'INR',
      benefits: [
        'Premium plan benefits',
        'Priority booking for classes',
        'Access to exclusive areas/equipment',
        'Complimentary services (towels, lockers)',
      ],
    },
  ];

  return (
    <div id="plans" className="section">
      <div className="wordings">
        <div>
          Get ready to
          <span className="stroke-text"> plan </span>with us !
        </div>
      </div>
      <div className="plan-card-container">
        {planList.map((plan, index) => {
          return (
            <div className="plan-cards" key={index}>
              <div>
                <div className="plan-icon">{plan.icon}</div>
                <div className="plan-title">{plan.title}</div>
                <div className="plan-cost">
                  <IndianRupeeIcon />
                  {plan.cost}/year
                  {/* <span>{plan.currency}</span> */}
                </div>
                <div className="plan-lists">
                  {plan.benefits.map((benefit, i) => (
                    <div className="plan-benefits" key={i}>
                      <span>
                        <IoMdCheckmarkCircleOutline />
                      </span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <div className="join-btn">
                <button onClick={() => goToContactus('contactus')}>
                  Join Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
