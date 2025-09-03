import { Link as ScrollLink } from "react-scroll";
import profilePic from "../img/profilephoto.jpg";

function About() {
  return (
    <section id="about" className="p-4">
      <div className="py-4">
        <h1 className="uppercase gold text-center">
          About <i className="fas fa-user"></i>
        </h1>

        <div className="container pt-lg-4">
          <div className="row mt-5 ">
            <div data-aos="fade-right" className="offset-md-1 col-md-5 col-sm-12 text-center">
              <img src={profilePic} alt="" className="img-fluid text-center pt-md-5 pt-lg-0  profile-pic" />
            </div>

            <div data-aos="fade-left" className="offset-md-1 col-md-5 com-sm-12 mt-4 text-white text-justify">
              <p>DevOps Engineer blending cloud, automation, and security to build high-impact, resilient systems. From HIPAA-compliant healthcare platforms to AI/ML-ready pipelines, I deliver secure, zero-downtime solutions at scale. Skilled in AWS, Kubernetes, Terraform, and CI/CD, I turn complex infrastructure into seamless, automated workflows. Passionate about driving DevSecOps transformations and enabling next-gen, cloud-native innovation.</p>
              <div className="mt-5 text-white row justify-content-center">
                <ScrollLink to="VasaviSaiResume.pdf" type="button" className="btn btn-sm btn-outline-white disabled " title="Download Resume" target="_blank">
                  Resume&nbsp;&nbsp; <i className="fas fa-file-download"></i>
                </ScrollLink>
                <ScrollLink to="contact" spy smooth offset={-60} duration={250} className="ml-lg-5 btn btn-sm btn-outline-white">
                  Hire Me
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
