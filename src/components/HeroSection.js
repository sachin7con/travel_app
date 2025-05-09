import React from 'react';
import Tokyo from '../images/Tokyo.jpg';

const HeroSection = ({ country, duration, activities, groupSize }) => {
    return (
        <div 
            className="hero-section"
            style={{ 
                backgroundImage: `url(${Tokyo})`, 
                color: 'white', 
                width: '353px', 
                height: '330px', 
                marginTop: '167px', 
                marginLeft: '20px', 
                borderRadius: '16px',
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            {/* Top: Country Name and Arrow */}
            <div className="hero-top" style={{ display: 'flex'}}>
                <div className='left'><h1 className="country-name">{country}</h1><p>Date range</p></div>
                <div className="arrow">&#8599;</div> {/* ↗ Arrow */}
            </div>

            {/* Bottom: Trip Details */}
            <div className="hero-bottom" style={{ display:'flex', textAlign:'end'}}>
                <p>{duration} Duration</p>
                <p>{groupSize} Group Size </p>
                <p>{activities} Activities</p>
            </div>
        </div>
    );
};

export default HeroSection;