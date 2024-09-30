import React from 'react'
import "./footer.css"
import { data, queue } from 'jquery'

const Footer = () => {


    const footerSocialLink = [
            {socialIcon: "fab fa-twitter", socialLink: '/' },
            {socialIcon: "fab fa-facebook", socialLink: '/' },
            {socialIcon: "fab fa-youtube", socialLink: '/' },
            {socialIcon: "fab fa-linkedin-in", socialLink: '/' }
        ]
        const footerContact = [
            {contactIcon: "fa fa-map-marker-alt me-3", contactContent: '23 Street, New York, USA' },
            {contactIcon: "fa fa-phone-alt me-3", contactContent: '+012 345 67890' },
            {contactIcon: "fa fa-envelope me-3", contactContent: 'info@example.com' },
            
        ]
        const footerQuickLinks = [
            {quiclLink: "About Us", quiclLinkPath: '/about' },
            {quiclLink: "Contact Us", quiclLinkPath: '/contact' },
            {quiclLink: "Our Services", quiclLinkPath: '/products' },
            {quiclLink: "Terms & Condition", quiclLinkPath: '/' },
            {quiclLink: "Support", quiclLinkPath: '/' },
        ]

    
  return (
    <div class="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                <h1 class="fw-bold logo-1 mb-4">F<span class="logo-2">oo</span>dy</h1>
                <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                <div class="d-flex pt-2">
            {footerSocialLink.map((data,ind)=>(
                <a class="btn btn-square btn-outline-light rounded-circle me-1" href={data.socialLink} key={ind}><i class={data.socialIcon}></i></a>))} 
              </div>
            </div> 
            <div class="col-lg-3 col-md-6">
                <h4 class="text-light mb-4">Address</h4>
                {footerContact.map((data,ind)=>(
                    <p key={ind}><i class={data.contactIcon}></i>{data.contactContent}</p>))}
            </div>

            <div class="col-lg-3 col-md-6">
                <h4 class="text-light mb-4">Quick Links</h4>
                {footerQuickLinks.map((data,ind)=>(
                    <a key={ind} class="btn btn-link" href={data.quiclLinkPath}>{data.quiclLink}</a>
                ))}
            </div>
            <div class="col-lg-3 col-md-6">
                <h4 class="text-light mb-4">Newsletter</h4>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div class="position-relative mx-auto" style={{maxWidth:400}}>
                    <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                    <button type="button" class="btn btn-bg py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a href="#">Ansari Foods</a>, All Right Reserved.
                </div>
                <div class="col-md-6 text-center text-md-end">
                    Designed By <a href="/">AA Techs</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer