import React from "react";
import { animateScroll } from "react-scroll";

function Footer() {

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 300,
      smooth: true
    });
  };

  return (
    <footer className="page-footer font-weight-bold pb-lg-0 black">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12 pt-5 pb-5">
            <div>
              
              <a className="li-ic" target="_blank" title="Linkedin Profile" href="https://www.linkedin.com/in/vasavisainunna/"  rel="noreferrer">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x hvr-float"> </i>
              </a>
              
              <a className="github-ic" target="_blank" title="GitHub profile" href="https://github.com/vasavi6303"  rel="noreferrer">
                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x hvr-float" aria-hidden="true"></i>
              </a>

              <a className="medium-ic" target="_blank" title="Medium profile" href="https://medium.com/@vasavisainunna"  rel="noreferrer">
                <i className="fab fa-medium fa-lg white-text mr-md-5 mr-3 fa-2x hvr-float" aria-hidden="true"></i>
              </a>

            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center my-0 pb-4 font-small">
        <hr style={{ backgroundColor: "grey", height: "0px" }} className="pb-0 mb-1" />
        Designed by
        <span className="gold" onClick={() => scrollToTop()} style={{cursor: 'pointer'}}> Vasavi Sai Nunna</span>
      </div>
    </footer>
  );
}

export default Footer;
