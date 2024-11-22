import React from 'react';
import Strength from '../assets/images/strength.jpg';
import Cardio from '../assets/images/cardio.jpg';
import Fatloss from '../assets/images/fatloss.jpg';
import Fitness from '../assets/images/fitness.jpg';
import {
  BurningIcon,
  CardioIcon,
  HealthIcon,
  StrengthIcon,
} from '../Utils/icons';

import './Programs.css';

const Programs = () => {
  const programsList = [
    {
      icon: <StrengthIcon />,
      image: Strength,
      title: 'Strength Training',
      description:
        'In this program,you are trained to improve your strength through many exercises.',
    },
    {
      icon: <CardioIcon />,
      image: Cardio,
      title: 'Cardio Training',
      description:
        'In this program,you are trained to do sequential moves in range of 20 until 30 minutes.',
    },
    {
      icon: <BurningIcon />,
      image: Fatloss,
      title: 'Fat Burning',
      description:
        'This program is suitable for you who wants to get rid of your fat and lose their weight.',
    },
    {
      icon: <HealthIcon />,
      image: Fitness,
      title: 'Health Fitness',
      description:
        'This programs is designed for those who exercises only for their body fitness not body building.',
    },
  ];

  return (
    <div id="programs" className="program-container">
      <div className="wordings">
        explore our
        <span className="stroke-text"> programs </span>to get in shape
      </div>
      <div className="program-wordings">
        Let us take your workout routines to the next level with our full-body
        programs and intensity challenges. Find a training that matches your
        needs.
      </div>
      <div className="program-card-container">
        {programsList.map((pgm, index) => {
          return (
            <div className="program-cards" key={index}>
              <div className="program-details">
                <div className="icon">{pgm.icon}</div>
                <div className="title">{pgm.title}</div>
                <div className="description">{pgm.description}</div>
              </div>
              <div className="program-image">
                <img src={pgm.image} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
