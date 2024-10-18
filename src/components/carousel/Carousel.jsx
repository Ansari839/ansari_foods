// "use client"
// import React, { useEffect } from 'react';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import dynamic from 'next/dynamic';
// import "./carousel.css";

// const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
//   ssr: false,
// });


// const carouselData = [
//   {
//     imgPath:"carousel3.jpeg",
//     imgName:"salt",
//     heading: "Organic Food Is Good For Health"

//   },
//   {
//     imgPath:"carousel4.jpeg",
//     imgName:"salt",
//     heading: "Natural Food Is Always Healthy"

//   },
// ]


// const Carousel = () => {
//   const options = {
//     loop: true,
//     margin: 10,
//     nav: true,
//     items: 1,
//     autoplay: true,
//     autoplayTimeout: 5000,
//     autoplayHoverPause: true,
//     navText: [
//       '<span class="carousel-control-prev-icon" aria-hidden="true"></span>',
//     //   '<span class="carousel-control-next-icon" aria-hidden="true"></span>',
//     ],
//   };
//   useEffect(()=> {
//     if (typeof window !== 'undefined') {
//         window.$ = window.jQuery = require('jquery');
//       }
// },[])
//   return (
//     <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
//       <OwlCarousel className="owl-theme" {...options}>
//         {carouselData.map((data , ind)=>(
//           <div className="item" key={ind}>
//            <img className="w-100" src={`/img/${data.imgPath}`} alt={data.imgName} />
//            <div className="carousel-caption">
//              <div className="container">
//                <div className="row justify-content-start">
//                  <div className="col-lg-7">
//                    <h1 className="display-2 mb-5 animated slideInDown carousel-content">
//                      {data.heading}
//                    </h1>
//                    <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
//                    <a href="" className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//         ))}
//       </OwlCarousel>
//     </div>
//   );
// };

// export default Carousel;



"use client"
import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import './carousel.css';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const carouselData = [
  {
    imgPath: "carousel3.jpeg",
    imgName: "salt",
    heading: "Organic Food Is Good For Health",
  },
  {
    imgPath: "carousel4.jpeg",
    imgName: "salt",
    heading: "Natural Food Is Always Healthy",
  },
];

const Carousel = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<span class="carousel-control-prev-icon" aria-hidden="true"></span>',
    ],
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.$ = window.jQuery = require('jquery');
    }
  }, []);

  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <OwlCarousel className="owl-theme" {...options}>
        {carouselData.map((data, ind) => (
          <div className="item" key={ind}>
            <img
              className="w-100"
              src={`/img/${data.imgPath}`}
              alt={data.imgName}
            />
            <div className="carousel-caption d-flex flex-column justify-content-center">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-7">
                    <h1 className="display-2 mb-5 animated slideInDown carousel-content">
                      {data.heading}
                    </h1>
                    <a
                      href="/products"
                      className="btn btn-primary rounded-pill py-sm-3 px-sm-5 animated fadeInUp"
                    >
                      Products
                    </a>
                    <a
                      href="/services"
                      className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3 animated fadeInUp"
                      style={{ animationDelay: '0.3s' }}
                    >
                      Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
