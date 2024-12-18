import React from 'react';
import './Benefits.css';

const benefitsData = [
  {
    id: 1,
    title: 'High-Quality Standards',
    description:
      'We pride ourselves on delivering services that adhere to the highest quality standards. From spotless housekeeping to top-notch linen management and effective pest control, we maintain consistency in quality and efficiency.',
    icon: '🏆', // You can replace this with an icon from a library like Font Awesome or Material Icons
  },
  {
    id: 2,
    title: 'Reliability & Consistency',
    description:
      'Our clients can count on us for reliable and timely service delivery, ensuring that operations run smoothly without interruptions. We are committed to maintaining a consistent level of service excellence that you can depend on every day.',
    icon: '🔒',
  },
  {
    id: 3,
    title: 'Eco-friendly Practices',
    description:
      'We prioritize sustainability by using eco-friendly cleaning products and pest control methods, reducing environmental impact while ensuring your space remains safe and hygienic.',
    icon: '🌱',
  },
  {
    id: 4,
    title: 'Cost-Effective',
    description:
      'By offering competitive pricing and bundled services, we help you reduce costs while maintaining high standards of quality. We ensure that our services provide excellent value for money.',
    icon: '💸',
  },
  {
    id: 5,
    title: 'Peace of Mind',
    description:
      'With our comprehensive services, you can have peace of mind knowing that your facility is clean, secure, well-maintained, and pest-free. We handle the details so you can focus on your core business.',
    icon: '🕊️',
  },
];

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h2 className="benefits-title">Why Choose Us?</h2>
      <div className="benefits-list">
        {benefitsData.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <div className="benefit-icon">
              <span>{benefit.icon}</span>
            </div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
