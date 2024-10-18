// import About from "@/components/about/About";
// import Carousel from "@/components/carousel/Carousel";
// import OurFeatures from "@/components/features/OurFeatures";
// import Products from "@/components/products/Products";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <Carousel />
//       <About />
//       <OurFeatures />
//       <Products />
//     </main>
//   );
// }

'use client'
import About from "@/components/about/About";
import Carousel from "@/components/carousel/Carousel";
import OurFeatures from "@/components/features/OurFeatures";
import Products from "@/components/products/Products";
import { useInView } from "@/hooks/useInView"; // Import the useInView hook
import 'animate.css';

export default function Home() {
  const [isCarouselInView, carouselRef] = useInView({ threshold: 0.3 });
  const [isAboutInView, aboutRef] = useInView({ threshold: 0.3 });
  const [isFeaturesInView, featuresRef] = useInView({ threshold: 0.3 });
  const [isProductsInView, productsRef] = useInView({ threshold: 0.3 });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Carousel Section */}
      <div
        ref={carouselRef}
        className={`${isCarouselInView ? 'animate__animated animate__fadeIn' : ''}`}
      >
        <Carousel />
      </div>

      {/* About Section */}
      <div
        ref={aboutRef}
        className={`${isAboutInView ? 'animate__animated animate__fadeInLeft' : ''}`}
      >
        <About />
      </div>

      {/* Our Features Section */}
      <div
        ref={featuresRef}
        className={`${isFeaturesInView ? 'animate__animated animate__fadeInRight' : ''}`}
      >
        <OurFeatures />
      </div>

      {/* Products Section */}
      <div
        ref={productsRef}
        className={`${isProductsInView ? 'animate__animated animate__fadeInUp' : ''}`}
      >
        <Products />
      </div>
    </main>
  );
}
