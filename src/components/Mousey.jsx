import React from "react";
import {Link as ScrollLink} from "react-scroll";

function Mousey() {
  return (
    <div className="flex-center container-fluid">
      <div className="text-white" style={{ position: "absolute", bottom: 0 }}>
        <ScrollLink to="about" spy smooth offset={-40} duration={250} >
          <div className="scroll-downs pb-5">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </ScrollLink>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Mousey;
