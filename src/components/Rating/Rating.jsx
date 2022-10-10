import React from "react";
import classes from "./Rating.module.css";
import star from "../../assets/star.svg";

function Rateing({ selectedNum, setSelectedNum, setIsSelected }) {
  const selectNumber = (e) => {
    setSelectedNum(e.target.innerText);
  };

  const submitHandler = () => {
    setIsSelected(true);
  };

  return (
    <div className={classes.rating}>
      <div className={classes.start_icon_wrapper}>
        <div className={classes.star_icon_cont}>
          <img src={star} alt='star_icon' />
        </div>
      </div>
      <h1 className={classes.title}> How did we do? </h1>
      <p className={classes.text}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={classes.rating_numbers}>
        <span
          className={`${classes.num} ${classes.num_1} ${
            selectedNum == "1" && classes.active_num
          }`}
          onClick={selectNumber}>
          1
        </span>
        <span
          className={`${classes.num} ${classes.num_2} ${
            selectedNum == "2" && classes.active_num
          }`}
          onClick={selectNumber}>
          2
        </span>
        <span
          className={`${classes.num} ${classes.num_3} ${
            selectedNum == "3" && classes.active_num
          }`}
          onClick={selectNumber}>
          3
        </span>
        <span
          className={`${classes.num} ${classes.num_4} ${
            selectedNum == "4" && classes.active_num
          }`}
          onClick={selectNumber}>
          4
        </span>
        <span
          className={`${classes.num} ${classes.num_5} ${
            selectedNum == "5" && classes.active_num
          }`}
          onClick={selectNumber}>
          5
        </span>
      </div>
      <button className={classes.submit} onClick={submitHandler}>
        SUBMIT
      </button>
    </div>
  );
}

export default Rateing;
