import React from "react";
import classes from "./RatingSubmitted.module.css";
import mobile from "../../assets/mobile.svg";
function RatingSubmitted({ selectedNum }) {
  return (
    <div className={classes.submitted}>
      <div className={classes.icon}>
        <img src={mobile} alt='' />
      </div>
      <div className={classes.selected_cont}>
        you selected {selectedNum} out of 5
      </div>
      <h1 className={classes.thanks}> Thank you!</h1>
      <p className={classes.text}>
        {" "}
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!{" "}
      </p>
    </div>
  );
}

export default RatingSubmitted;
