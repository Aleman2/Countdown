import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import Counter from "./Counter.jsx";

const CountDown = () => {
  let num = "0";

  const [setter, setSetter] = useState(false);
  const [timer, setTimer] = useState(0);
  const [inter, serInter] = useState();
  const [pause, setPause] = useState(true);
  const [clean, setClean] = useState(false);
  const [counter, setCounter] = useState(num.split(""));
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!pause) {
      serInter(
        setInterval(() => {
          setTime((time) => time - 1);
        }, 1000)
      );
    } else {
      serInter(clearInterval(inter));
    }
  }, [pause]);

  useEffect(() => {
    setCounter(String(time).split("").reverse());
    if (time <= 0) {
      setPause(true);
      setCounter(num.split(""));
    }
  }, [time]);

  useEffect(() => {
    if (clean) {
      setClean(false);
      setTime(0);
      setCounter(num.split(""));
    }
  }, [clean]);

  useEffect(() => {
    if (setter) {
      if (timer > 0) {
        setTime(timer);
      } else {
        alert("put a number greater than 0");
      }
    }
    setSetter(false);
  }, [setter]);

  return (
    <>
      <Counter />
      <div className="container p-5 mt-5 bg-opacity-75 bg-dark">
        <div className="row row-cols-1 row-cols-md-6 g-6">
          <Card number={counter.length > 5 ? counter[5] : "0"} />
          <Card number={counter.length > 4 ? counter[4] : "0"} />
          <Card number={counter.length > 3 ? counter[3] : "0"} />
          <Card number={counter.length > 2 ? counter[2] : "0"} />
          <Card number={counter.length > 1 ? counter[1] : "0"} />
          <Card number={counter.length > 0 ? counter[0] : "0"} />
        </div>
        <button onClick={() => setClean(true)}>limpiar</button>
        <button onClick={() => setPause(true)}>Pausar</button>
        <button onClick={() => setPause(false)}>Continuar</button>
        <input onChange={(event) => setTimer(event.target.value)} />
        <button onClick={() => setSetter(true)}>Set Time</button>
      </div>
    </>
  );
};

export default CountDown;
