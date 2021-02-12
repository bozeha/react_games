import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gameDetails } from "../actions/detailsAction";
import { loadGames } from "../actions/gamesAction";
import { getResizedImg } from "../Utils";

import { Link } from "react-router-dom";

/// animation
import { ResizeImg } from "../animation";

const Game = ({ name, released, img, current_index, id }) => {
  const dispatch = useDispatch();
  const HandeldGameClick = () => {
    dispatch(gameDetails(id));
    document.body.style.overflow = "hidden";
  };
  return (
    <Link to={`/game/${id}`}>
      <GameStyle
        variants={ResizeImg}
        initial="hidden"
        animate="show"
        className={`game${current_index}`}
        onClick={HandeldGameClick}
        layoutId={id && id.toString()}
      >
        {console.log(id)}
        <h3>{name}</h3>
        <h4>{released}</h4>
        <img src={getResizedImg(img, 420)} alt="" layoutId={img} />
      </GameStyle>
    </Link>
  );
};
//// flex
/* const GameStyle = styled(motion.div)`
  height: 300px;
  width: 300px;
  img {
    width: 100%;
    height: 200px;
    object-fit: fill;
  }
`;
 */
/// grid
const GameStyle = styled(motion.div)`
  cursor: pointer;
  height: 300px;
  width: 300px;
  margin: 0 auto;
  box-shadow: 1px 1px 1px 1px gray;
  border-radius: 4px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  img {
    width: 100%;
    height: 200px;
    object-fit: fill;
  }
`;

export default Game;
