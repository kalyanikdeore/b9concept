import React from "react";
import Aboutus from "../../pages/Aboutus/Aboutus";
import Process from "../../pages/Process/Process";
function Contentwrapper({ children, className }) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto my-0 py-0 ' +  {className}`}>
      {children}
    </div>
  );
}
export default Contentwrapper;
