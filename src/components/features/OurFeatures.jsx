import React from 'react'

const OurFeatures = () => {

    const featuresData = [
        {featureHeading : "Natural Process" , 
        featureDiscp : "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        featurePath : "/",
        featureIcon : "icon-1.png"
    },
    {featureHeading : "Organic Products" , 
        featureDiscp : "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        featurePath : "/",
        featureIcon : "icon-2.png"
    },
    {featureHeading : "Biologically Safe" , 
        featureDiscp : "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
        featurePath : "/products",
        featureIcon : "icon-3.png"
    }

    ]


  return (
    <div class="container-fluid bg-light bg-icon my-5 py-6">
    <div class="container">
        <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:500}}>
            <h1 class="display-5 mb-3  ">Our Features</h1>
            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div class="row g-4">
        {featuresData.map((data,ind)=>(
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={ind}>
            <div class="bg-white text-center h-100 p-4 p-xl-5">
                <img class="img-fluid mb-4" src={`img/${data.featureIcon}`} alt=""  />
                <h4 class="mb-3">{data.featureHeading}</h4>
                <p class="mb-4">{data.featureDiscp}</p>
                <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href={data.featurePath}>Read More</a>
            </div>
    </div>
        ))}    
    </div>
</div>
</div>

  );
};

export default OurFeatures