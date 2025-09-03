import React, {useEffect, useRef} from "react";
import { init } from "ityped";

function HeaderContent() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
        showCursor: true,
        strings: ["Masters from Northeastern Univ", "DevOps Engineer"],
        backDelay: 1500,
        loop: true
    } )
  }, []);
  return (
    <div className="flex-center align-content-center justify-content-center offset-xs-2 offset-lg-3 offset-md-2 col-md-6">
      <div className="container justify-content-center">
        <h1 className="gold">&nbsp;I'm </h1>
        <h1 className="name">VASAVI</h1>
        <span className="ml-lg-2 skills" ref={textRef} >
        </span>
      </div>
    </div>
  );
}

export default HeaderContent;
