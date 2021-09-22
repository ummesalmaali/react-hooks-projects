// import Head from "next/head";
// import Image from "next/image";
// import { useState } from "react";
// import Form from "../components/Forms/Form";
// import UseEffect from "../components/Forms/UseEffects/UseEffect";
import ComA from "../components/Context/ComA";
import Reducer from "../components/Forms/UseEffects/Reducer";
import Uncontrolled from "../components/Forms/UseEffects/Uncontrolled";
import UseEffect2 from "../components/Forms/UseEffects/UseEffect2";
import UseEffectApi from "../components/UseEffectApi";
// import HooksRules from "../components/HooksRules";
// import ShortCirEval from "../components/ShortCirEval";
// import ToDo from "../components/ToDo";
// import UseStateArray from "../components/UseStateArray";
// import UseStateObj from "../components/UseStateObj";

export default function Home() {
  // const [myName, setMyName] = useState("umme");

  // const changeName = () => {
  //   setMyName("Umme Salma Ali");
  // let toggleName = myName;
  // if (toggleName === "ali") {
  //   setMyName("umme");
  // } else {
  //   setMyName("ali");
  // }
  //   let val = myName;
  //   val === "umme" ? setMyName("salma ali umme") : setMyName("umme");
  // };
  return (
    <div>
      {/* <h1>{myName}</h1>
      <button onClick={changeName}>click me</button> */}
      {/* <HooksRules /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObj /> */}
      {/* <ToDo /> */}
      {/* <ShortCirEval /> */}
      {/* <Form /> */}
      {/* <UseEffect /> */}
      {/* <UseEffect2 /> */}
      {/* <UseEffectApi /> */}
      {/* <Uncontrolled /> */}
      {/* <Reducer /> */}
      <ComA />
    </div>
  );
}
