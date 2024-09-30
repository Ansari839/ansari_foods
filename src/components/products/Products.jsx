'use client'
import React, { useState } from "react";
import "./products.css";

const Products = () => {
  // Manage selected tab
  const [selectedTab, setSelectedTab] = useState("Vegetable");

  const productsTabs = [
    { tabName: "Vegetable", tabToggle: "pill" },
    { tabName: "Fruits", tabToggle: "pill" },
    { tabName: "Fresh", tabToggle: "pill" },
  ];

  const productsData = [
    {
      productTag: "New",
      productName: "Fresh Tomato",
      productImg: "product-1.jpg",
      productPrice: "$29.00",
      productDiscountPrice: "$19.00",
      category: "Vegetable",
    },
    {
      productTag: "New",
      productName: "Fresh Apple",
      productImg: "product-2.jpg",
      productPrice: "$29.00",
      productDiscountPrice: "$19.00",
      category: "Fruits",
    },
    {
      productTag: "New",
      productName: "Fresh Banana",
      productImg: "product-3.jpg",
      productPrice: "$29.00",
      productDiscountPrice: "$19.00",
      category: "Fruits",
    },
    {
      productTag: "New",
      productName: "Fresh Carrot",
      productImg: "product-4.jpg",
      productPrice: "$29.00",
      productDiscountPrice: "$19.00",
      category: "Vegetable",
    },
    {
      productTag: "New",
      productName: "Fresh Orange",
      productImg: "product-5.jpg",
      productPrice: "$29.00",
      productDiscountPrice: "$19.00",
      category: "Fruits",
    },
    {
      productTag: "New",
      productName: "Fresh Lettuce",
      productImg: "product-6.jpg",
      productPrice: "$29.00",
      productDiscountPrice: "$19.00",
      category: "Vegetable",
    },
  ];

  // Filter products based on selected tab
  const filteredProducts = productsData.filter(
    (product) => product.category === selectedTab
  );

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div
              className="section-header text-start mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 }}
            >
              <h1 className="display-5 mb-3">Our Products</h1>
              <p>
                Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                diam justo sed rebum vero dolor duo.
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 text-start text-lg-end wow slideInRight"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
              {productsTabs.map((data, ind) => (
                <li className="nav-item me-2" key={ind}>
                  <a
                    className={`btn btn-outline-primary border-2 ${
                      selectedTab === data.tabName ? "active" : ""
                    }`}
                    data-bs-toggle={data.tabToggle}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent page refresh
                      setSelectedTab(data.tabName); // Update selected tab
                    }}
                  >
                    {data.tabName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              {filteredProducts.map((data, ind) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={ind}
                >
                  <div className="product-item">
                    <div className="position-relative bg-light overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src={`/img/${data.productImg}`}
                        alt={data.productName}
                      />
                      <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        {data.productTag}
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <a className="d-block h5 mb-2" href="">
                        {data.productName}
                      </a>
                      <span className="text-primary me-1">
                        {data.productDiscountPrice}
                      </span>
                      <span className="text-body text-decoration-line-through">
                        {data.productPrice}
                      </span>
                    </div>
                    <div className="d-flex border-top">
                      <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-eye text-primary me-2"></i>View
                          detail
                        </a>
                      </small>
                      <small className="w-50 text-center py-2">
                        <a className="text-body" href="">
                          <i className="fa fa-shopping-bag text-primary me-2"></i>
                          Add to cart
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
