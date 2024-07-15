import React from 'react';
import './TrendInvest.css'; // Import the CSS file for styling

// Import images
import img1 from '../../imgs/myn1.jpg';
import img2 from '../../imgs/myn2.jpg';
import img3 from '../../imgs/myn3.jpg';
import img4 from '../../imgs/myn4.jpg';
import img5 from '../../imgs/myn5.jpg';
import img6 from '../../imgs/myn6.jpg';

const TrendInvest = () => {
  // Example data
  const items = [
    { id: 1, name: 'SHEETAL Associates Flared Sleeve Maxi Dress', image: img1 },
    { id: 2, name: 'KASSUALLY Turquoise Blue & Beige FloralPrinted Fit and Flare Dress', image: img2 },
    { id: 3, name: 'Athena Women Burgundy Solid Maxi Dress', image: img3 },
    { id: 4, name: 'FLOWERVELLY V-Neck Striped Fit and Flare Dresses', image: img4 },
    { id: 5, name: 'SASSAFRAS Black & Pink Floral Waist Cut-Out Maxi Dress', image: img5 },
    { id: 6, name: 'Antheaa Square Neck Floral Printed Smocked Tiered Chiffon Fit & Flare Midi Dress', image: img6 },
  ];

  return (
    <div className="trend-invest-container">
      <h1>TrendInvest</h1>
      <p>Discover and invest in today’s hottest fashion trends!</p>
      
      <div className="trend-invest-grid">
        {items.map(item => (
          <div key={item.id} className="trend-invest-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <div className="button-group">
              <button className="invest-button">Invest</button>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendInvest;
