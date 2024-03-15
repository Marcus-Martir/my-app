import { useState } from "react";

export default function Clicker({ clickerTitle }) {
  const [clicks, setClicks] = useState(0);
  const increment = () => {
    setClicks(prevClicks => prevClicks + 1);
  }
  return (
    <>
      <h1>{clickerTitle} {clicks}</h1>
      <button onClick={increment}>Click here!</button>
    </>
  );
}