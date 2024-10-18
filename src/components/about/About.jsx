// import React from 'react';
// import "./about.css"

// const About = () => {
//   return (
//     <div class="container-xxl py-5">
//     <div class="container">
//         <div class="row g-5 align-items-center">
//             <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
//                 <div class="about-img position-relative overflow-hidden p-5 pe-0">
//                     <img class="img-fluid w-100" src="img/about.jpg" />
//                 </div>
//             </div>
//             <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
//                 <h1 class="display-5 mb-4">Best Organic Fruits And Vegetables</h1>
//                 <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
//                 <p><i class="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
//                 <p><i class="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
//                 <p><i class="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
//                 <a class="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
//             </div>
//         </div>
//     </div>
// </div>
//   )
// }

// export default About

'use client'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <motion.div 
            className="col-lg-6" 
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          >
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src="img/about.jpg" />
            </div>
          </motion.div>
          <motion.div 
            className="col-lg-6" 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="display-5 mb-4">Best Organic Fruits And Vegetables</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, 
              sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
            <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
            <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
            <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
