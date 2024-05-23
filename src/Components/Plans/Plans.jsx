import React from 'react';
import { plansData } from '../../data/plansData';
import './Plans.css';
import whiteTick from '../../images2/whiteTick.png';

function Plans() {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: '2rem' }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
              {plan.features.map((feature, featureIndex) => (
                <div className="feature" key={featureIndex}>
                  <img src={whiteTick} alt="Tick icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits &rarr;</span>
            </div>
            <button className="btn2">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;


