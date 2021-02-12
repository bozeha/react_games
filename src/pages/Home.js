import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Game from "../components/Game";
import { popularGames } from "../getApiUrl";
import GameDetails from "../components/GameDetails";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import Nav from "../components/Nav";

import loader from "../img/loader.gif";

const Home = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  console.log(`${path}`);

  const dispatch = useDispatch();
  useEffect(() => {
    //exampel of dispatch gets function
    dispatch(loadGames());

    /// example for despatch get object
    /* dispatch({
        type: "FETCH_GAMES",
        payload: { popular: ["sssssssssss", "ffffffff", "eeeeeeee"] },
      }); */
  }, [dispatch]);
  //const data = useSelector((state) => state.Games);
  //const data = useSelector((state) => state.Game);
  //console.log(data);
  const { upcoming, newGames, popular, isLoading, search } = useSelector(
    (state) => state.games
  );

  return (
    <>
      {isLoading && (
        <Loader>
          <img src={loader} alt="loader" />
        </Loader>
      )}
      {!isLoading && (
        <AnimateSharedLayout>
          <Nav />
          <div className="">
            <AnimatePresence>
              {path[2] && <GameDetails id={path[2]} />}
            </AnimatePresence>
            {search.length != 0 && (
              <SearchResultStyle>
                <h2>Search results</h2>
                {search.map((currentGame, index) => (
                  <Game
                    name={currentGame.name}
                    released={currentGame.released}
                    img={currentGame.background_image}
                    key={
                      currentGame.key
                        ? currentGame.key
                        : currentGame.name + index
                    }
                    current_index={index}
                    id={currentGame.id}
                  >
                    {/* {console.log(index)} */}
                  </Game>
                ))}
              </SearchResultStyle>
            )}
            <h2>Upcoming Games</h2>
            <Games>
              {upcoming &&
                upcoming.map((currentGame, index) => (
                  <Game
                    name={currentGame.name}
                    released={currentGame.released}
                    img={currentGame.background_image}
                    key={
                      currentGame.key
                        ? currentGame.key
                        : currentGame.name + index
                    }
                    current_index={index}
                    id={currentGame.id}
                  >
                    {/* {console.log(index)} */}
                  </Game>
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
              {newGames &&
                newGames.map((currentGame, index) => (
                  <Game
                    name={currentGame.name}
                    released={currentGame.released}
                    img={currentGame.background_image}
                    key={
                      currentGame.key
                        ? currentGame.key
                        : currentGame.name + index
                    }
                    current_index={index}
                    id={currentGame.id}
                  >
                    {/* {console.log(index)} */}
                  </Game>
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
              {popular &&
                popular.map((currentGame, index) => (
                  <Game
                    name={currentGame.name}
                    released={currentGame.released}
                    img={currentGame.background_image}
                    key={
                      currentGame.key
                        ? currentGame.key
                        : currentGame.name + index
                    }
                    current_index={index}
                    id={currentGame.id}
                  >
                    {/* {console.log(index)} */}
                  </Game>
                ))}
            </Games>
          </div>
        </AnimateSharedLayout>
      )}
    </>
  );
};

//// flex

/* const Games = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;
 */
//// gred

const Games = styled(motion.div)`
  /// display the grid as the size of the element
  display: inline-grid;
  /// display the grid on all page
  display: grid;

  //// this make constent number of element as number of auto , this case alwase 3 elements
  //// first element 80px second 200px therd the rest of the space
  grid-template-columns: 80px 200px auto;
  //// this make constent number of element as number of auto , this case alwase 3 elements
  grid-template-columns: auto auto auto;

  /// gap is extra space between every column
  grid-column-gap: 10px;
  /// gap is extra space between every row
  grid-row-gap: 10px;
  /// gap is extra space between every row and column
  grid-gap: 10px;

  //// repeat if settings are repeate , first value is how meny times to repeat
  /// secend value is how to display element we repeat
  /// this case repeate 4 times in equals fraction
  grid-template-columns: repeat(4, 1fr);
  /// hist will repeate 4 times and every columns will be in the size of is content
  grid-template-columns: repeat(4, auto);
  /// this will make the first column to be 100px and others like above exmple
  grid-template-columns: 100px repeat(4, auto);

  //// 1fr its one equal fraction
  //// repeat -> repeat on all elements , gets to values
  //// first how meny time to rpeate , in this case auto-fit , its can change number of elements
  //// automaticly , and second element is how every element will look like
  //// in this case minmax -> first value is the minimum size and max is the max site

  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  align-items: center;

  overflow: hidden;
  /* .game0 {
    background-color: red;

    //// grid column take palce of few elements ->this case from element 1 to element 3
     
    //width: 100%;
    //grid-column-start: 1;
    //grid-column-end: 3; 
    //// grid row take palce of few elements ->this case from element 1 to element 3
    height: 100%;
    grid-row-start: 1;
    grid-row-end: 3;
  } */

  h3,
  h4 {
    padding: 5px 0px 5px 5px;
  }
`;

const SearchResultStyle = styled(Games)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
  justify-content: space-around;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  img {
    margin: 0 auto;
    display: block;
  }
`;

export default Home;
