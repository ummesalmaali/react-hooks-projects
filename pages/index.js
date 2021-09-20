import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import HooksRules from "../components/HooksRules";
import UseStateArray from "../components/UseStateArray";
import UseStateObj from "../components/UseStateObj";

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
      <UseStateObj />
    </div>
  );
}
