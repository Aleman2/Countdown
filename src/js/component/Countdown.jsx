import React from "react";
import { useState, useEffect } from "react";
//include images into your bundle
import ReactDOM from "react-dom";
import Card_1 from "./Card_1.jsx";
import Home from "./Contador.jsx";

//create your first component
const CountDown = () => {
  let a = "0";

  const [probar, setSetter] = useState(false);
  const [temporizador, setTemporizador] = useState(0);
  const [inter, setIntervalo] = useState();
  const [pause, setPause] = useState(true);
  const [clean, setClean] = useState(false);
  const [contador, setContador] = useState(a.split(""));
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!pause) {
      setIntervalo(
        setInterval(() => {
          setTime((time) => time - 1);
        }, 1000)
      );
      console.log(inter);
    } else {
      setIntervalo(clearInterval(inter));
    }
  }, [pause]);

  useEffect(() => {
    setContador(String(time).split("").reverse());
    if (time <= 0) {
      setPause(true);
      setContador(a.split(""));
    }
  }, [time]);

  useEffect(() => {
    if (clean) {
      console.log("a");
      setClean(false);
      setTime(0);
      setContador(a.split(""));
    }
  }, [clean]);

  useEffect(() => {
    if (probar) {
      if (temporizador > 0) {
        setTime(temporizador);
      } else {
        alert("ponga un numero mayor a 0");
      }
    }
    setSetter(false);
  }, [probar]);

  return (
    <>
      <Home />
      <div className="container p-5 mt-5 bg-opacity-75 bg-dark">
        <div className="row row-cols-1 row-cols-md-6 g-6">
          <Card_1 number={contador.length > 5 ? contador[5] : "0"} />
          <Card_1 number={contador.length > 4 ? contador[4] : "0"} />
          <Card_1 number={contador.length > 3 ? contador[3] : "0"} />
          <Card_1 number={contador.length > 2 ? contador[2] : "0"} />
          <Card_1 number={contador.length > 1 ? contador[1] : "0"} />
          <Card_1 number={contador.length > 0 ? contador[0] : "0"} />
        </div>
        <button onClick={() => setClean(true)}>limpiar</button>
        <button onClick={() => setPause(true)}>Pausar</button>
        <button onClick={() => setPause(false)}>Continuar</button>
        <input onChange={(event) => setTemporizador(event.target.value)} />
        <button onClick={() => setSetter(true)}>Set Time</button>
      </div>
    </>
  );
};

export default CountDown;
