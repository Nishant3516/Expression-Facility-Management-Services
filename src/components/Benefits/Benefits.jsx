import React from 'react';
import './Benefits.css';

const benefitsData = [
  {
    id: 1,
    title: 'Comprehensive Solutions',
    description:
      'One-stop solution for housekeeping, security, linen, and pest control, ensuring quality under one roof.',
    icon: '🛠️',
  },
  {
    id: 2,
    title: 'Professional Expertise',
    description:
      'Highly trained professionals in cleaning, security, linen, and pest control, ensuring high standards.',
    icon: '👨‍🔬',
  },
  {
    id: 3,
    title: 'Tailored Approach',
    description:
      'Customized services to meet unique client needs, ensuring alignment with your business goals.',
    icon: '⚙️',
  },
  {
    id: 4,
    title: 'High-Quality Standards',
    description:
      'Adhering to high standards in housekeeping, linen management, and pest control for consistency.',
    icon: '🏆',
  },
  {
    id: 5,
    title: 'Reliability & Consistency',
    description:
      'Reliable and timely service delivery, ensuring smooth operations with consistent excellence.',
    icon: '🔒',
  },
  {
    id: 6,
    title: 'Eco-friendly Practices',
    description:
      'Eco-friendly methods in cleaning and pest control, reducing environmental impact while ensuring safety.',
    icon: '🌱',
  },
  {
    id: 7,
    title: 'Cost-Effective',
    description:
      'Competitive pricing and bundled services to reduce costs while maintaining high standards.',
    icon: '💸',
  },
  {
    id: 8,
    title: 'Peace of Mind',
    description:
      'Ensuring your facility is clean, secure, and pest-free so you can focus on your core business.',
    icon: '🕊️',
  },
];

const Benefits = () => {

  return (
    <div className="benefits-container">
      <h2 className="benefits-title">Why Choose Us?</h2>
      <div className="benefits-grid">
        <div className="benefits-row">
          {benefitsData.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon">
                <span>{benefit.icon}</span>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              {/* <p className="benefit-description">{benefit.description}</p> */}
            </div>
          ))}
        </div>
        
        {/* <div className="benefits-row">
          {secondRow.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon">
                <span>{benefit.icon}</span>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              {/* <p className="benefit-description">{benefit.description}</p> */}
            {/* </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Benefits;
