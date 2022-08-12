import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";
const Counter = () => {
  let num = "0";

  const [inter, setInter] = useState();
  const [pause, setPause] = useState(false);
  const [clean, setClean] = useState(false);
  const [counter, setCounter] = useState(num.split(""));
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!pause) {
      setInter(
        setInterval(() => {
          setTime((time) => time + 1);
        }, 1000)
      );
    } else {
      setInter(clearInterval(inter));
    }
  }, [pause]);

  useEffect(() => {
    setCounter(String(time).split("").reverse());
  }, [time]);

  useEffect(() => {
    if (clean) {
      setClean(false);
      setTime(0);
      setCounter(num.split(""));
    }
  }, [clean]);

  return (
    <div className="container p-5 mt-5 bg-opacity-75 bg-dark">
      <div className="row row-cols-1 row-cols-md-6 g-6">
        <Card number={counter.length > 5 ? counter[5] : "0"} />
        <Card number={counter.length > 4 ? counter[4] : "0"} />
        <Card number={counter.length > 3 ? counter[3] : "0"} />
        <Card number={counter.length > 2 ? counter[2] : "0"} />
        <Card number={counter.length > 1 ? counter[1] : "0"} />
        <Card number={counter.length > 0 ? counter[0] : "0"} />
      </div>
      <button onClick={() => setClean(true)}>Clean</button>
      <button onClick={() => setPause(true)}>Pause</button>
      <button onClick={() => setPause(false)}>Continue</button>
    </div>
  );
};

export default Counter;
