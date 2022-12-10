import React, { useState, useEffect } from "react";

const Content = () => {
  const [arr, setArr] = useState([]);
  const randArr = () => {
    const randArray = [];
    for (let index = 0; index < 10; index++) {
      randArray[index] = Math.floor(Math.random() * 20 + 1);
    }
    setArr(randArray);
  };

  /*  useEffect(() => {
    setArr(bubbleSort)
    
  },arr); */
  const bubbleSort = () => {
    let currentArr = [...arr];

    for (let i = 0; i < currentArr.length - 1; i++) {
      for (let j = 0; j < currentArr.length - i - 1; j++) {
        if (currentArr[j] > currentArr[j + 1]) {
          let temp = currentArr[j];
          currentArr[j] = currentArr[j + 1];
          currentArr[j + 1] = temp;
          /*  document.getElementById(j).style.transform = "translateX(100px)";
          document.getElementById(j + 1).style.transform = "translateX(-100px)"; */
          setArr(currentArr);
        }
      }
    }
    return currentArr;
  };
  const selectionSort = () => {
    let currentArr = [...arr];
    let min;

    //start passes.
    for (let i = 0; i < currentArr.length; i++) {
      //index of the smallest element to be the ith element.
      min = i;

      for (let j = i + 1; j < currentArr.length; j++) {
        if (currentArr[j] < currentArr[min]) {
          min = j;
        }
      }

      if (min !== i) {
        [currentArr[i], currentArr[min]] = [currentArr[min], currentArr[i]];
      }
    }

    setArr(currentArr);
  };
  const insertionSort=()=>{
	let i, key, j;
  let currentArr = [...arr];

	for (i = 1; i < currentArr.length; i++)
	{
		key = arr[i];
		j = i - 1;		
		while (j >= 0 && currentArr[j] > key)
		{
			currentArr[j + 1] = currentArr[j];
			j = j - 1;
		}
		currentArr[j + 1] = key;
	}
  setArr(currentArr);
}
  return (
    <>
      <div className="container">
        <div className="button">
          <button
            className="btn"
            type="button"
            onClick={() => {
              randArr();
            }}
          >
            <span className="nowrap">New Array</span>{" "}
          </button>
          <button className="btn" onClick={bubbleSort}>
            Bubble
          </button>
          <button className="btn" onClick={selectionSort}>
            Selection
          </button>
          <button className="btn" onClick={insertionSort}>
            Insertion
          </button>
        </div>

        <div className="visualizer">
          {arr.map((number, index) => {
            return (
              <div
                className="box"
                /* key={index} */
                style={{
                  height: `${1.5 * number}rem`,
                  border: "1px solid white",
                }}
              >
                {number}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content;
