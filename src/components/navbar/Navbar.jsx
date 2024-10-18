'use client'

import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import './navbar.css';

const Navbar = () => {
  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    // <!-- Navbar Start -->
    <motion.div
      className="container-fluid fixed-top px-0"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
          <small>
            <i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA
          </small>
          <small className="ms-4">
            <i className="fa fa-envelope me-2"></i>info@example.com
          </small>
        </div>
        <div className="col-lg-6 px-5 text-end">
          <small>Follow us:</small>
          <a className="text-body ms-3" href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="text-body ms-3" href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="text-body ms-3" href="">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="text-body ms-3" href="">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <motion.nav
        className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5"
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <a href="/" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="fw-bold m-0 logo-1">
            F<span className="logo-2">oo</span>dy
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <motion.div
            className="navbar-nav ms-auto p-4 p-lg-0"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              About Us
            </a>
            <a href="/products" className="nav-item nav-link">
              Products
            </a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="blog.html" className="dropdown-item">
                  Blog Grid
                </a>
                <a href="feature.html" className="dropdown-item">
                  Our Features
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <a href="/contact" className="nav-item nav-link">
              Contact Us
            </a>
          </motion.div>
          <motion.div
            className="d-none d-lg-flex ms-2"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
              <small className="fa fa-search text-body"></small>
            </a>
            <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
              <small className="fa fa-user text-body"></small>
            </a>
            <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
              <small className="fa fa-shopping-bag text-body"></small>
            </a>
          </motion.div>
        </div>
      </motion.nav>
    </motion.div>
    // <!-- Navbar End -->
  );
};

export default Navbar;
