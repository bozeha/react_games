import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

import { useDispatch } from "react-redux";

import { loadGameFromSearch } from "../actions/gamesAction";

/// animation
import { FadeIn } from "../animation";

const Nav = () => {
  const dispatch = useDispatch();
  const [useInput, setInput] = useState("");

  const onChangeInputHandler = (e) => {
    setInput(e.target.value);
  };
  const onClickSearchHandler = () => {
    dispatch(loadGameFromSearch(useInput));
    setInput("");
  };
  return (
    <MainNav variants={FadeIn} initial="hidden" animate="show">
      {/* <p>{useInput}</p> */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="input">
        <input type="text" onChange={onChangeInputHandler} value={useInput} />
        <button onClick={onClickSearchHandler}>Search</button>
      </div>
    </MainNav>
  );
};

const MainNav = styled(motion.Nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  .input input {
    border: none;
    outline: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  }
`;

export default Nav;
