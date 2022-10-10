import "./App.css";
import Rating from "./components/Rating/Rating";
import React, { useState } from "react";
import RatingSubmitted from "./components/RatingSubmitted/RatingSubmitted";

function App() {
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);
  const [selectedNum, setSelectedNum] = useState(null);
  const [selected, setIsSelected] = useState(false);

  return (
    <div className='App'>
      {!selected && (
        <Rating
          nums={nums}
          setNums={setNums}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
          setIsSelected={setIsSelected}
        />
      )}

      {selected && <RatingSubmitted selectedNum={selectedNum} />}
    </div>
  );
}

export default App;
