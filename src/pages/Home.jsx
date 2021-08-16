import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decNumberBy1,
  incNumberBy1,
  incNumberBy10,
  decNumberBy10,
  mulNumberBy10,
} from "../actions/index";

function Home() {
  const num1 = useSelector((state) => state.changeTheNumberBy1);
  const num10 = useSelector((state) => state.changeTheNumberBy10);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decNumberBy1())}>-</button>
      <span>num1 = {num1} </span>
      <button onClick={() => dispatch(incNumberBy1())}>+</button>

      <br />
      <br />
      <br />

      <button onClick={() => dispatch(decNumberBy10())}>-</button>
      <span>num10 = {num10} </span>
      <button onClick={() => dispatch(incNumberBy10())}>+</button>
    </>
  );
}

export default Home;
