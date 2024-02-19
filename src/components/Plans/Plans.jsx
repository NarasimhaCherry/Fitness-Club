import React from 'react'
import './Plans.css';
import { plansData }from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className='plans-container' id="plain">
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        <div className='programs-header' style={{gap: '2rem'}}>
            <span className='stroke-text'>Simple, </span>
            <span>transparent</span>
            <span className='stroke-text'> pricing</span>
        </div>
        <div className='para'>
            Whether your fitness automation needs are large or small, we’re here to help you scale.
        </div>

        {/* plans card */}
        <div className='plans'>
            {plansData.map((plan, i) =>(
                <div className='plan' key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className='features'>
                        {plan.features.map((features, i) => (
                            <div className='feature'>
                                <img src={whiteTick} alt="whitetick" />
                                <span key={i}>{features}</span>
                            </div>
                        ))}
                    </div>

                    <div><span>See more benefits  </span></div>
                    <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans