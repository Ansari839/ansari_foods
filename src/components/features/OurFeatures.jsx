'use client'

import React from 'react';
import { motion } from 'framer-motion';

const OurFeatures = () => {
  const featuresData = [
    {
      featureHeading: 'Natural Process',
      featureDiscp: 'Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.',
      featurePath: '/',
      featureIcon: 'icon-1.png',
    },
    {
      featureHeading: 'Organic Products',
      featureDiscp: 'Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.',
      featurePath: '/',
      featureIcon: 'icon-2.png',
    },
    {
      featureHeading: 'Biologically Safe',
      featureDiscp: 'Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.',
      featurePath: '/products',
      featureIcon: 'icon-3.png',
    },
  ];

  return (
    <div className="container-fluid bg-light bg-icon my-5 py-6">
      <div className="container">
        <div
          className="section-header text-center mx-auto mb-5"
          style={{ maxWidth: 500 }}
        >
          <h1 className="display-5 mb-3">Our Features</h1>
          <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div className="row g-4">
          {featuresData.map((data, ind) => (
            <motion.div
              className="col-lg-4 col-md-6"
              key={ind}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: ind * 0.2 }} // Delays each feature a bit more
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src={`img/${data.featureIcon}`} alt="" />
                <h4 className="mb-3">{data.featureHeading}</h4>
                <p className="mb-4">{data.featureDiscp}</p>
                <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href={data.featurePath}>
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
