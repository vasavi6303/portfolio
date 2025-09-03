import { Link } from "react-router-dom";
function Project({ title, link, shortDesc, description, details, image, delay }) {
  return (
    <div className="col-lg-4 col-12  col-sm-6 pb-5" data-aos="fade-up" data-aos-delay={delay}>
      <div className="card">
        <div className="card-body elegant-color-dark white-text">
          <h5 className="card-title gold text-center"> {title} </h5>
          <p className="card-text white-text text-justify font-weight-light pt-3 ellipsis" >
            {shortDesc}  </p>
        </div>
        <div className="card-footer">
            <Link to={{
              pathname: '/view-project',
              state:{
                title: title,
                description: description,
                details: details,
                link: link,
                image: image
              }
            }} className="btn-outline-black text-center btn-sm mx-sm-2 proj-btn" >Read More</Link>
            {/* Show view button only if link exists */}
            {link && link !== "" && (
              <a href={link} target="_blank" className=" proj-btn btn-outline-black text-center btn-sm mx-sm-2 proj-anchor" rel="noreferrer">
                View
              </a>
            )}
        </div>
      </div>
    </div>
  );
}

export default Project;
