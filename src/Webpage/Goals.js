import React from 'react';
import './Goals.css';
import Goal1 from '../assets/images/h1-custom-icon-img-1.png';
import Goal2 from '../assets/images/h1-custom-icon-img-2.png';
import Goal3 from '../assets/images/h1-custom-icon-img-3.png';
import Goal4 from '../assets/images/h1-custom-icon-img-4.png';

const Goals = () => {
  const goalList = [
    {
      icon: Goal1,
      title: 'Basic Plan',
      cost: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen ean commodo ligula eget dolor.',
    },
    {
      icon: Goal2,
      title: 'Premium Plan',
      cost: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen ean commodo ligula eget dolor.',
    },
    {
      icon: Goal3,
      title: 'Gold Plan',
      cost: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen ean commodo ligula eget dolor.',
    },
    {
      icon: Goal4,
      title: 'Gold Plan',
      cost: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen ean commodo ligula eget dolor.',
    },
  ];

  return (
    <div id="plans" className="goal-container">
      <div className="wordings">
        set high
        <span className="stroke-text"> fitness </span>goals
      </div>
      <div className="goal-wordings">
        After you decide to start training we will make sure you get the best
        fitness program. Our sport experts and latest sports equipment are the
        winning combination.
      </div>
      <div className="goal-card-container">
        {goalList.map((goal, index) => {
          return (
            <div className="goal-cards" key={index}>
              <div className="goal-icon">
                <img src={goal.icon} alt={goal.icon} />
              </div>
              <div className="goal-title">{goal.title}</div>
              <div className="goal-cost">{goal.cost}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goals;
