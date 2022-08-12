import React from "react";
import { useState, useEffect } from "react";
import Card_1 from "./Card_1.jsx";
const Home = () => {
  let a = "0";

  const [inter, setIntervalo] = useState();
  const [pause, setPause] = useState(false);
  const [clean, setClean] = useState(false);
  const [contador, setContador] = useState(a.split(""));
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!pause) {
      setIntervalo(
        setInterval(() => {
          setTime((time) => time + 1);
        }, 1000)
      );
      console.log(inter);
    } else {
      setIntervalo(clearInterval(inter));
    }
  }, [pause]);

  useEffect(() => {
    setContador(String(time).split("").reverse());
  }, [time]);

  useEffect(() => {
    if (clean) {
      console.log("a");
      setClean(false);
      setTime(0);
      setContador(a.split(""));
    }
  }, [clean]);

  return (
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
    </div>
  );
};

export default Home;
