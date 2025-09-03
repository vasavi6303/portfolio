import React from "react";
import { MDBContainer, MDBIcon, MDBInput } from "mdbreact";

function Contact() {
  return (
    <section id="contact" className="pt-5">
      <div className="container">
        <h1 className="gold text-center uppercase">
          Contact <i className="far fa-address-card"></i>
        </h1>

        <div className="row py-5">
          <div className="col-sm-6 col-12 col-md-5 offset-md-1 contact-div text-white"  data-aos="fade-right">
            <div className="row text-center py-5">
              <div className="col-md-12 text-center">
                <ul className="list-unstyled mb-0">
                  <li >
                    <i className="fa fa-map-marker-alt fa-2x "></i>
                    <p>
                      Boston, MA <br /> USA 
                    </p>
                  </li>
              
                  <li >
                    <i className="fa fa-envelope fa-2x mt-4 "></i>
                    <p className="mb-0">
                      <a href="mailto:vasavisainunna98@gmail.com" className="text-white email" title="Send e-mail">
                        vasavisainunna98@gmail.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-12 col-md-5 pt-1" data-aos="fade-left">
            <MDBContainer>
              <form className="contact-form">
                <div className="white-text">
                  <MDBInput label="Your name" icon="user" group type="text" validate error="wrong" success="right" />
                  <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                  <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                  <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                </div>
              </form>
              <div className="text-right">
                <MDBIcon icon="paper-plane" title="Send" className="send-icon pb-2 text-white"
                  onClick={()=>{
                    alert("Kindly drop an email to vasavisainunna@gmail.com as this site currently not integrated with any email service.")
                  }}
                />
              </div>
            </MDBContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
