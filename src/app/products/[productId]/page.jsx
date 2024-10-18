// "use client";

// import React, { useEffect, useState } from "react";
// import { productsData } from "@/lib/products"; // Import your product data directly
// import { Button } from "bootstrap";
// import { sendMail } from "@/lib/mail";

// const ProductDetail = ({ params }) => {
//   const { productId } = params;
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const selectedProduct = productsData.find(
//       (item) => item.productId === productId
//     ); // Directly find the product
//     setProduct(selectedProduct);
//   }, [productId]);

//   if (!product)
//     return (
//       <div className="text-center mt-10 text-lg font-bold">Loading...</div>
//     );
//     const handleSendMail = async () => {
//         await sendMail({
//             to: "almashanif126@gmail.com",
//             name: "Almas",
//             subject: "Test Mail",
//             body: 'testing..............',
//         });
//     };

//   return (
//     <div class="container-xxl py-5 mt-5" style={{ marginTop: 50 }}>
//       <div class="container">
//         <div class="row g-5 align-items-center">
//           <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
//             <div class="about-img position-relative overflow-hidden p-5 pe-0">
//               <img class="img-fluid w-100" src={`/img/${product.productImg}`} />
//             </div>
//           </div>
//           <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
//             <h1 class="display-5 mb-4">{product.productName}</h1>
//             <p class="mb-4">
//               Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
//               diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
//               lorem sit clita duo justo magna dolore erat amet
//             </p>
//             <p>
//               <i class="fa fa-check text-primary me-3"></i>Tempor erat elitr
//               rebum at clita
//             </p>
//             <p>
//               <i class="fa fa-check text-primary me-3"></i>Aliqu diam amet diam
//               et eos
//             </p>
//             <p>
//               <i class="fa fa-check text-primary me-3"></i>Clita duo justo magna
//               dolore erat amet
//             </p>
//             <form action={handleSendMail}>
//               <button type="submit" className="btn btn-primary">
//                 Send Mail
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


"use client";

import React, { useEffect, useState } from "react";
import { productsData } from "@/lib/products";
import { sendMail } from "@/lib/mail";

const ProductDetail = ({ params }) => {
  const { productId } = params;
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const selectedProduct = productsData.find(
      (item) => item.productId === productId
    );
    setProduct(selectedProduct);
  }, [productId]);

  if (!product)
    return (
      <div className="text-center mt-10 text-lg font-bold">Loading...</div>
    );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle sending email
  const handleSendMail = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    await sendMail({
      to: formData.email, // Use the email from form input
      name: formData.name, // Use the name from form input
      subject: `Quotation Request for ${product.productName}`,
      body: `
        <h1>Quotation Request</h1>
        <p>Product: ${product.productName}</p>
        <p>Name: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <p>Message: ${formData.message}</p>
      `,
    });

    alert("Quotation request sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container-xxl py-5 mt-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src={`/img/${product.productImg}`} alt={product.productName} />
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 mb-4">{product.productName}</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
            </p>
            <form onSubmit={handleSendMail}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Quotation Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
