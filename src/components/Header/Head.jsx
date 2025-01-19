import React from "react";
import { useUser } from "../../context/UserContext";

const storedUser = localStorage.getItem("user");
const user = JSON.parse(storedUser);


export const Head = () => {
 

  return (
    <section className="head">
      <div className="container d_flex">
        <div className="left-row">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=8801317089432"
            className="icon-flex phone-icon"
          >
            <i className="fa fa-phone"></i>
            <label className="phone-icon" htmlFor="">
              {user.name} {/* Access user name here */}
            </label>
          </a>
          <a
            target="_blank"
            href="mailto:arshadchowdhury46@gmail.com"
            className="icon-flex phone-icon"
          >
            <i className="fa fa-envelope"></i>
            <label className="phone-icon" htmlFor="">
              zajampratik@gmail.com
            </label>
          </a>
        </div>
        <div className="right-row">
          <span>
            <label htmlFor="">Need Help ?</label>
          </span>
          <span>
            <span>🇧🇩 </span>
            <label htmlFor="">EN</label>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Head;
