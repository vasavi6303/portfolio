import { workHistory } from "../data/WorkHistory";

function WorkExperience() {
  return (
    <section
      id="work-history"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div>
        <h1 className="gold text-center uppercase">
          Work History <i className="fas fa-light fa-briefcase"></i>
        </h1>

        <div className="pt-md-4">
          <ul className="timeline p-4 offset-md-1 col-md-10">
            {workHistory.map((history, index) => (
              <li key={index}>
                <div data-aos="fade-left">
                  <span className="gold card-title">
                    {history.role}
                  </span>
                  <div>
                    <small className="gold col-12 col-md-6 pl-0">
                      <i className="fa fa-building mr-1" aria-hidden="true"></i>
                      {history.company}
                    </small>
                    <small className="gold col-12 col-md-3 float-md-right">
                      <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                      {history.tenure}
                    </small>
                  </div>
                  <div className="text-white text-justify container">
                    <ul>
                      {history.actions.map((action, idx) => (
                        <li key={idx}>{action}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;