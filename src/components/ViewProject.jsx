import React, { useEffect } from "react";
import { MDBNavbar, MDBIcon } from "mdbreact";
import { Link, Redirect } from "react-router-dom";

function ViewProject(props) {

  const { title, description, details, image } = props.history.location.state ? props.history.location.state : {} ;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    {
      // Redirect to homepage if this page is visited without selecting a project
      props.history.location.state === undefined ? <Redirect to="/" /> :
    <header className="view-project-header">
      <div className="container">
        <MDBNavbar  scroling transparent dark expand="lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              V<span className="gold">A</span>SA<span className="gold">V</span>I
            </Link>
            <a href="/#projects" title="Go Back">
              <MDBIcon icon="arrow-left" className="text-white" size="2x" data-aos="fade-left" data-aos-duration="1000" />
            </a>
          </div>
        </MDBNavbar>
      </div>
      <div className="container mt-5">
        <div className="row" id="proj_div">
          <div className="col-md-6 col-sm-12 flex-center flex-column">
            <h2 className="mt-5 text-center gold" style={{fontWeight: 'bold'}}>{title}</h2>
            <img src={require(`../${image}`).default} alt="Project_thumbnail" className="mt-5 img-fluid img-thumbnail" />
          </div>

          <div className="container col-md-6 col-sm-12 flex-center flex-column">
            <h4 className="gold my-5 pt-lg-5"  style={{fontWeight: 'bold'}}>Description</h4>
            <p className="text-white text-justify">{description}</p>

            <ul style={{ listStyle: "none" }} className="my-5 text-white text-left">
              {details.map((d, index) => {
                return <li key={index}>{d}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="container pt-5 mt-lg-5 text-center justify-content-center">
        <a href="/#projects" className="btn-sm btn btn-outline-white text-white">
          Go Back
        </a>
      </div>
    </header>
   }
   </>
  );
}

export default ViewProject;
