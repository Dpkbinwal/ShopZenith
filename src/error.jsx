import { NavLink } from "react-router-dom";
import "./error.scss";
// import styled from "styled-components";
// import { Button } from "./styles/Button";

const error = () => {
  return (
    <div className="error-page">
        <img src="https://i.pinimg.com/originals/fe/df/71/fedf7125acf620e856b6d09ef44eee51.gif" />
          {/* <span >404</span>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p> */}

          <NavLink to="/">
            <button className="btn">Go Back to Home</button>
          </NavLink>
        
    </div>
  );
};
export default error;