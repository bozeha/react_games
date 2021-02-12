import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { getResizedImg } from "../Utils";
//// import images

import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import xbox from "../img/xbox.svg";
import full_star from "../img/star-full.png";
import empty_star from "../img/star-empty.png";

const GameDetails = (id) => {
  const { game, screen, isLoading } = useSelector((state) => state.game);
  const history = useHistory();

  const DetailsCloseHandler = (e) => {
    const clickedOnDark = e.target.classList.contains("dark_block")
      ? true
      : false;
    if (clickedOnDark) {
      history.push("/");
      /// return the scroller to main page
      document.body.style.overflow = "auto";
    }
  };

  const getStars = (stars) => {
    const arrayOfStars = [];
    for (let loop = 0; loop != 5; loop++) {
      if (stars > loop) {
        arrayOfStars.push(<img src={full_star} />);
      } else arrayOfStars.push(<img src={empty_star} />);
    }
    return arrayOfStars;
  };
  const getPlatform = (platforms) => {
    const arrayOfPlatforms = [];
    platforms.forEach((currentPlatform) => {
      console.log(currentPlatform.platform.name);
      switch (currentPlatform.platform.name) {
        case "Xbox One":
          arrayOfPlatforms.push(xbox);
          break;
        case "PC":
          arrayOfPlatforms.push(xbox);
          break;
        case "Xbox Series S/X":
          arrayOfPlatforms.push(xbox);
          break;
        case "PlayStation 5":
        case "PlayStation 4":
          //arrayOfPlatforms.push(<img src={playstation} alt="playstation" />);
          arrayOfPlatforms.push(playstation);
          break;
        default:
          //arrayOfPlatforms.push(<img src={playstation} alt="playstation" />);
          arrayOfPlatforms.push(playstation);
      }
    });
    return arrayOfPlatforms;
  };

  useEffect(() => {
    if (!game.name) {
    }
  }, []);
  return (
    <>
      {!isLoading && (
        <Dark
          layoutId={id.id}
          onClick={DetailsCloseHandler}
          className="dark_block"
          style={game.name ? { display: "block" } : { display: "none" }}
        >
          {console.log("xxxxxxxxx:" + JSON.stringify(id.id))}
          <WhiteDetailsBlock>
            <TopDetails>
              <div className="main_details">
                <h2>{game.name}</h2>
                <h3>{`Rating: ${game.rating}`}</h3>
                <div className="stars">{getStars(game.rating)}</div>
                <motion.img
                  layoutId={game.background_image}
                  src={game.background_image}
                />
                <p>{`Disc: ${game.description_raw}`}</p>
              </div>
              <div>
                <h2>Platforms:</h2>
                <div className="platforms">
                  {game.platforms &&
                    getPlatform(game.platforms).map((currentPlatform) => (
                      <img src={currentPlatform} alt={currentPlatform} />
                    ))}
                </div>
              </div>
            </TopDetails>

            <div className="screens">
              {screen.results &&
                screen.results.map((currentScreen, index) => (
                  <div>
                    <img
                      src={getResizedImg(currentScreen.image, 640)}
                      key={index}
                      alt="xx"
                    />
                  </div>
                ))}
            </div>
          </WhiteDetailsBlock>
        </Dark>
      )}
    </>
  );
};

const Dark = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  position: fixed;
  min-height: 100vh;
  top: 0px;
  left: 0px;
  overflow: scroll;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background-color: #7e5b5b;
  }
  &::-webkit-scrollbar-thumb {
    background-color: green;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;
const WhiteDetailsBlock = styled.div`
  background-color: white;
  width: 80%;
  left: 10%;
  padding: 40px 40px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 4px;
  position: absolute;

  img {
    width: 100%;
  }
`;

const TopDetails = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  .main_details {
    p {
      width: 80%;
    }
    .stars img {
      width: 20px;
    }
  }
  .platforms {
    display: flex;
    justify-content: space-evenly;
  }
  .platforms {
    img {
      width: 20px;
    }
  }
`;

export default GameDetails;
